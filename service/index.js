const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const app = express();


app.use(express.static('public'));
app.use(express.json()); //json and cookie midwar
app.use(cookieParser());

const port = process.argv.length > 2 ? process.argv[2] : 4000; //port 4000 like Simno example

//will change to DB in next startup
const users = [];
const expenses = {};

const cookieOptions = { 
  httpOnly: true, 
  secure: process.env.NODE_ENV === 'production', 
  sameSite: 'strict' 
};

//midware auth
function authenticateUser(req, res, next) {
  const authToken = req.cookies.authToken;
  if (!authToken) {
    return res.status(401).send({ msg: 'Unauthorized' });
  }

  const user = users.find(user => user.authToken === authToken);
  if (!user) {
    return res.status(401).send({ msg: 'Unauthorized' });
  }

  req.user = user;
  next();
}

//auth endpoints
app.post('/api/auth/create', (req, res) => {
  const { userName, password } = req.body;
  
  //check for username and password
  if (!userName || !password) {
    return res.status(400).send({ msg: 'You must enter a username and password' });
  }
  
  //see if user already exists
  if (users.find(user => user.userName === userName)) {
    return res.status(409).send({ msg: 'Username already exists' });
  }
  
  //hash password  with bcrypt like in CS240
  const passwordHash = bcrypt.hashSync(password, 10);
  const authToken = uuidv4();
  //create user
  const newUser = { 
    userName, 
    passwordHash, 
    authToken 
  };
  
  users.push(newUser);
  expenses[userName] = []; //empty array for expenses
  
  res.cookie('authToken', authToken, cookieOptions);
  res.send({ userName });
});

app.post('/api/auth/login', (req, res) => {
  const { userName, password } = req.body;
  
  //find user method
  const user = users.find(user => user.userName === userName);
  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).send({ msg: 'Invalid credentials' });
  }
  
  //update authToken method
  user.authToken = uuidv4();
  
  res.cookie('authToken', user.authToken, cookieOptions);
  res.send({ userName });
});

app.delete('/api/auth/logout', authenticateUser, (req, res) => {
  try {
    req.user.authToken = null; //user from mid war
    res.clearCookie('authToken');
    res.status(200).json({ msg: 'Logged out' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ msg: 'Logout failed' });
  }
});

//expense endpoints
app.get('/api/expenses', authenticateUser, (req, res) => {
  const userName = req.user.userName;
  res.send(expenses[userName] || []);
});

app.post('/api/expenses', authenticateUser, (req, res) => {
  const { vehicle, expenseType, amount } = req.body;
  const userName = req.user.userName;
  
  //ensure valid expensie feilds
  if (!vehicle || !expenseType || amount === undefined) {
    return res.status(400).send({ msg: 'All 3 boxes must be filled' });
  }
  
  const newExpense = {
    id: uuidv4(),
    vehicle,
    expenseType,
    amount,
    date: new Date().toLocaleDateString() //for the current date
  };
  
  if (!expenses[userName]) {
    expenses[userName] = [];
  }
  
  expenses[userName].push(newExpense);
  res.send(newExpense);
});

app.put('/api/expenses/:id', authenticateUser, (req, res) => {
  const expenseId = req.params.id;
  const { vehicle, expenseType, amount } = req.body;
  const userName = req.user.userName;
  
  const userExpenses = expenses[userName] || [];
  const expenseIndex = userExpenses.findIndex(exp => exp.id === expenseId); //find expense
  
  if (expenseIndex === -1) {
    return res.status(404).send({ msg: 'Could not find expense' });
  }
  
  //if the expense is found, updated with entered info
  if (vehicle) userExpenses[expenseIndex].vehicle = vehicle;
  if (expenseType) userExpenses[expenseIndex].expenseType = expenseType;
  if (amount !== undefined) userExpenses[expenseIndex].amount = amount;
  
  res.send(userExpenses[expenseIndex]);
});

app.delete('/api/expenses/:id', authenticateUser, (req, res) => {
  const expenseId = req.params.id;
  const userName = req.user.userName;
  
  //find and remove. Similar to find and update
  const userExpenses = expenses[userName] || [];
  const expenseIndex = userExpenses.findIndex(exp => exp.id === expenseId);
  
  if (expenseIndex === -1) {
    return res.status(404).send({ msg: 'Could not find expense' });
  }
  
  const deletedExpense = userExpenses.splice(expenseIndex, 1)[0];
  res.send(deletedExpense);
});

//using a third party quote api similar to Sim example
app.get('/api/quote', async (req, res) => {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const quotes = await response.json();
    
    //zen quotes returns an array with one object
    const quote = quotes[0];
    
    // updating names ot work with client.
    res.send({
      text: quote.q,
      author: quote.a
    });
  } catch (error) {
    console.error('Error fetching quote:', error);
    res.status(500).send({ msg: 'Failed to fetch quote', error: error.message });
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