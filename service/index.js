const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(express.static('public'));

let users = {};
let scores = [];

const apiRouter = express.Router();
app.use('/api', apiRouter);

// CreateAuth - Create a new user
apiRouter.post('/auth/create', (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const newUser = { email: req.body.email, password: req.body.password, token: uuidv4() };
    users[newUser.email] = newUser;
    res.send({ token: newUser.token });
  }
});

// GetAuth - Login an existing user
apiRouter.post('/auth/login', (req, res) => {
  const user = users[req.body.email];
  if (user && req.body.password === user.password) {
    user.token = uuidv4();
    res.send({ token: user.token });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// DeleteAuth - Logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find(u => u.token === req.body.token);
  if (user) delete user.token;
  res.status(204).end();
});

// GetScores - Retrieve high scores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore - Submit a new score
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});

// Helper function to update high scores
function updateScores(newScore, scores) {
  let found = false;
  for (let i = 0; i < scores.length; i++) {
    if (newScore.score > scores[i].score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }
  if (!found) scores.push(newScore);
  if (scores.length > 10) scores.length = 10; // Keep only top 10 scores
  return scores;
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
