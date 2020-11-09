var express = require('express');
var router = express.Router();
var unirest = require("unirest");



/* GET Resposta rapida CALCULAR. */
router.get('/', function(req, res) {
  res.render('pesquisa', { title: 'Pesquisar' });
  });



// curiosidades  







module.exports = router;
