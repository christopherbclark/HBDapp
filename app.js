const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello from the server!');
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
