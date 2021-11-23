require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('public'));

const router = require('./app/router');

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});