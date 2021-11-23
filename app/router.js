const { response } = require('express');
const express = require('express');

const mainController = require('./controllers/mainController');

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/detail/:id', mainController.pokemonPage);

router.get('/type', mainController.listeType);

router.get('/liste/:id', mainController.typePage);

module.exports = router;