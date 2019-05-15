const express = require('express');
const bodyParser = require('body-parser');

const knex = require('knex');

// knex.js connecting to our mediumrare_database.
const db = knex({
   client: 'pg',
   connection: {
      host: '127.0.0.1',
      port: '5432',
      user: 'Alex',
      password: '',
      database: "mediumrare_database"
   }
});

const app = express();
const port = 3001;

// body parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// get route --> my collection of records.
app.get('/mediumrare_database', (req, res) => {
   db.select('*').from('vinyl_information').then(data => console.log(data));
   res.status(200).json('Getting some records')
});

// Login --- post route
app.post('/login', (req,res) => {
   res.json('logging in')
});

// Register user ----> post route
app.post('/register', (req, res) => {
   res.json('user registering')
});



// port
app.listen(port, () => {
   console.log(`Xray is listening on port ${port}!`)
});
