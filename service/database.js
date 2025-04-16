const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const config = require('./dbConfig.json');

//connection url
const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('autoExpenseTracker');
const usersCollection = db.collection('users');
const expensesCollection = db.collection('expenses');

//connects to database
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Sucessfully connected to DB');
    return true;
  } catch (error) {
    console.error('Could not connet to the MongoDB:', error);
    return false;
  }
}

//user managment function 
async function getUser(username) {
  return await usersCollection.findOne({ userName: username });
}

async function createUser(username, password) {
  //hash the password
  const passwordHash = await bcrypt.hash(password, 10);
  const authToken = uuidv4();
  
  const user = {
    userName: username,
    passwordHash,
    authToken
  };
  
  await usersCollection.insertOne(user);
  return { userName: username, authToken };
}

async function updateUserAuthToken(username) {
  const authToken = uuidv4();
  await usersCollection.updateOne(
    { userName: username },
    { $set: { authToken } }
  );
  return authToken;
}

async function getUserByToken(token) {
  return await usersCollection.findOne({ authToken: token });
}

async function clearUserAuthToken(username) {
  await usersCollection.updateOne(
    { userName: username },
    { $set: { authToken: null } }
  );
}

//my expense funcs
async function getUserExpenses(username) {
  return await expensesCollection.find({ userName: username }).toArray();
}

async function addExpense(username, expense) {
  const newExpense = {
    ...expense,
    id: uuidv4(),
    userName: username,
    date: new Date().toLocaleDateString()
  };
  
  await expensesCollection.insertOne(newExpense);
  return newExpense;
}

async function updateExpense(username, expenseId, updates) {
  await expensesCollection.updateOne(
    { id: expenseId, userName: username },
    { $set: updates }
  );
  return await expensesCollection.findOne({ id: expenseId, userName: username });
}

async function deleteExpense(username, expenseId) {
  const expense = await expensesCollection.findOne({ id: expenseId, userName: username });
  if (expense) {
    await expensesCollection.deleteOne({ id: expenseId, userName: username });
  }
  return expense;
}

module.exports = {
  connectToDatabase,
  getUser,
  createUser,
  updateUserAuthToken,
  getUserByToken,
  clearUserAuthToken,
  getUserExpenses,
  addExpense,
  updateExpense,
  deleteExpense
};
