const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
   res.status(200).send('We have a message!')
});

app.listen(port, () => {
   console.log(`Xray is listening on port ${port}!`)
});
