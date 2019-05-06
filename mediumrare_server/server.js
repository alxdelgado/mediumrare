const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// body parser
app.use(bodyParser.json());


app.get('/https://api.discogs.com/users/alexdelgado/collection/folders', (req, res) => {

   console.log(req.body);
   res.status(200).send('We have a message!')
});

app.listen(port, () => {
   console.log(`Xray is listening on port ${port}!`)
});
