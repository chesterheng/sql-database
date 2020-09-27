const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : '',
    database : 'smart-brain'
  }
});

db.select('*').from('users').then(data => {
  console.log(data);
});

const app = express();

const database = {
  users: [
    {
      id: '123',
      name: 'John',
      password: 'cookies',
      email: 'john@gmail.com',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Sally',
      password: 'bananans',
      email: 'sally@gmail.com',
      entries: 0,
      joined: new Date()
    }
  ]
}

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  db.select('*').from('users').then(data => {
    res.send(data)
  });
});

app.post('/signin', (req, res) => {
  if(req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password) {
      res.json(database.users[0]);
  } else {
    res.status(400).json('error logging in');
  }
});

app.post('/register', (req, res) => {
  const { email, name } = req.body;
  db('users')
    .returning('*')
    .insert({
      name,
      email,
      joined: new Date()
  })
  .then(user => res.json(user[0]))
  .catch(err => res.status(400).json('unable to register'));
});

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  db
    .select('*')
    .from('users')
    .where({ id })
    .then(user => {
      if(user.length) {
        res.json(user[0])
      } else {
        res.status(400).json('not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'));
});

app.listen(3000, () => {
  console.log('app is running on port 3000')
})