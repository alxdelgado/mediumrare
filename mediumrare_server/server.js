const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser = require('body-parser');

// knex.js connecting to our mediumrare_database.
const knex = require('knex');
const db = knex({
   client: 'pg',
   connection: {
      // host: '127.0.0.1',
      port: '5432',
      db: '5432',
      user: 'Alex',
      password: '',
      database: "mediumrare_database"
   }
});

const app = express();
const port = 3001;


// middleware

// body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// cors
const corsOptions = {
   origin: 'http://localhost:3000',
   credentials: true,
   optionsSuccessStatus: 200 // some legacy browsers choke on 204
}
app.use(cors(corsOptions));

// get route ---> my collection of records.
app.get('/mediumrare_database', async (req, res, next) => {
   try {
      db.select('*').from('vinyl_information').then(data => console.log(data));
      res.status(200).json('Getting some records').next();
   } catch (err) {
      res.json(err)
   }
});

// post route ---> Login
app.use('/mediumrare_database', async (req, res, next) => {
   try {
      db.select('*').from('user_info').then(console.log());
      res.status(200).json('logging in')
   } catch (err) {
      res.json(err)
   }
});

// Register user ----> post route
// app.post('/register', (req, res) => {
//    // hashing the password
//    bcrypt.hash('bacon', 8, function(err, hash) {
// });
//    res.json('user registering')
// });



// port
app.listen(port, () => {
   console.log(`Xray is listening on port ${port}!`)
});
