const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const app = express();
const db = require('./database');
const { ExpenseUpdates } = require('./expenseUpdates');
const http = require('http');

app.use(express.static('public'));
app.use(express.json()); //json and cookie middleware
app.use(cookieParser());

const port = process.argv.length > 2 ? process.argv[2] : 4000; //port 4000 like Simon example

const cookieOptions = { 
  httpOnly: true, 
  secure: process.env.NODE_ENV === 'production', 
  sameSite: 'strict' 
};

const httpServer = http.createServer(app); //http server

const expenseProxy = new ExpenseUpdates(httpServer);

//server starts, connect to mongo
(async () => {
  try {
    await db.connectToDatabase();
    console.log('Connected to MongoDB database');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    //continue incase the connection works out later
  }
})();

//mid war auth like I used in cs240
async function authenticateUser(req, res, next) {
  const authToken = req.cookies.authToken;
  if (!authToken) {
    return res.status(401).send({ msg: 'Unauthorized' });
  }

  try {
    const user = await db.getUserByToken(authToken);
    if (!user) {
      return res.status(401).send({ msg: 'Unauthorized' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Error with authentication:', error);
    return res.status(500).send({ msg: 'Error: Authentication' });
  }
}

//auth endpoints
app.post('/api/auth/create', async (req, res) => {
  const { userName, password } = req.body;
  
  //no empty fields check
  if (!userName || !password) {
    return res.status(400).send({ msg: 'Both a username and password are required' });
  }
  
  try {
    //username already exists
    const existingUser = await db.getUser(userName);
    if (existingUser) {
      return res.status(409).send({ msg: 'Username already exists' });
    }
    
    //create db user
    const result = await db.createUser(userName, password);
    
    res.cookie('authToken', result.authToken, cookieOptions);
    res.send({ userName });
  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).send({ msg: 'Error creating user' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { userName, password } = req.body;
  
  try {
    //find a user
    const user = await db.getUser(userName);
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).send({ msg: 'Invalid credentials' });
    }
    
    //update an authtoken
    const authToken = await db.updateUserAuthToken(userName);
    
    res.cookie('authToken', authToken, cookieOptions);
    res.send({ userName });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send({ msg: 'Error during login' });
  }
});

app.delete('/api/auth/logout', authenticateUser, async (req, res) => {
  try {
    await db.clearUserAuthToken(req.user.userName);
    res.clearCookie('authToken');
    res.status(200).json({ msg: 'Logged out' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ msg: 'Logout failed' });
  }
});

//expense endpoints
app.get('/api/expenses', authenticateUser, async (req, res) => {
  try {
    const userName = req.user.userName;
    const userExpenses = await db.getUserExpenses(userName);
    res.send(userExpenses);
  } catch (error) {
    console.error('Get expenses error:', error);
    res.status(500).send({ msg: 'Error fetching expenses' });
  }
});

app.post('/api/expenses', authenticateUser, async (req, res) => {
  const { vehicle, expenseType, amount } = req.body;
  const userName = req.user.userName;
  
  //ensure valid expense fields
  if (!vehicle || !expenseType || amount === undefined) {
    return res.status(400).send({ msg: 'All 3 boxes must be filled' });
  }
  
  try {
    const newExpense = await db.addExpense(userName, { vehicle, expenseType, amount });
    res.send(newExpense);
  } catch (error) {
    console.error('Add expense error:', error);
    res.status(500).send({ msg: 'Error adding expense' });
  }
});

app.put('/api/expenses/:id', authenticateUser, async (req, res) => {
  const expenseId = req.params.id;
  const { vehicle, expenseType, amount } = req.body;
  const userName = req.user.userName;
  
  try {
    const updates = {};
    if (vehicle) updates.vehicle = vehicle;
    if (expenseType) updates.expenseType = expenseType;
    if (amount !== undefined) updates.amount = amount;
    
    const updatedExpense = await db.updateExpense(userName, expenseId, updates);
    
    if (!updatedExpense) {
      return res.status(404).send({ msg: 'Could not find expense' });
    }
    
    res.send(updatedExpense);
  } catch (error) {
    console.error('Update expense error:', error);
    res.status(500).send({ msg: 'Error updating expense' });
  }
});

app.delete('/api/expenses/:id', authenticateUser, async (req, res) => {
  const expenseId = req.params.id;
  const userName = req.user.userName;
  
  try {
    const deletedExpense = await db.deleteExpense(userName, expenseId);
    
    if (!deletedExpense) {
      return res.status(404).send({ msg: 'Could not find expense' });
    }
    
    res.send(deletedExpense);
  } catch (error) {
    console.error('Delete expense error:', error);
    res.status(500).send({ msg: 'Error deleting expense' });
  }
});

//using a third party quote api similar to Simon example
app.get('/api/quote', async (req, res) => {
  try {
    //zen quotes third party api
    const response = await fetch('https://zenquotes.io/api/random');
    const quotes = await response.json();
    
    if (!Array.isArray(quotes) || quotes.length === 0) {
      throw new Error('Invalid quote data received from ZenQuotes API');
    }
    
    //zen quotes is returning an array with a single quote object with 'q' for quote text and 'a' for author
    const quote = quotes[0];
    
    //adjusting to expected format
    res.send({
      text: quote.q || 'No quote quote could be displayed at this time. But hey, is that Warren Buffet?^^^',
      author: quote.a || 'Your AutoExpenseTracker Web Devs'
    });
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).send({ 
      msg: 'Failed to fetch quote', 
      error: error.message
    });
  }
});

//for websoc. new end point that can get current info 
app.get('/api/auth/me', authenticateUser, async (req, res) => {
  try {
    const user = req.user;
    res.send({ userName: user.userName });
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).send({ msg: 'Error fetching user info' });
  }
});


//server startup 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Internal server error' });
});
