const express = require('express');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

let users = {};
let expenses = [];

const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }

  // Check if user exists
  if (users[username]) {
    // Existing user - verify password
    if (users[username].password === password) {
      res.json({ username });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
    return;
  }

  // New user - check password requirements
  if (password.length < 8) {
    res.status(400).json({ error: 'Password must be at least 8 characters' });
    return;
  }
  
  // Create new user
  users[username] = { 
    username,
    password
  };
  res.json({ username });
});



apiRouter.post('/auth/logout', (req, res) => {
  const { username } = req.body;
  if (users[username]) {
    delete users[username];
  }
  res.json({ message: 'Logged out successfully' });
});

apiRouter.get('/auth/check', (req, res) => {
  const { username } = req.query;
  if (users[username]) {
    res.json({ authenticated: true });
  } else {
    res.json({ authenticated: false });
  }
});

apiRouter.post('/expenses', (req, res) => {
  const { vehicle, expenseType, amount, date, username } = req.body;
  const newExpense = {
    id: expenses.length + 1,
    vehicle,
    expenseType,
    amount,
    date,
    username
  };
  
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

apiRouter.get('/expenses/:username', (req, res) => {
  const userExpenses = expenses
    .filter(expense => expense.username === req.params.username)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  res.json(userExpenses);
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`AutoExpenseTracker service listening on port ${port}`);
});