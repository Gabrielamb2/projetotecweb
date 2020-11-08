var express = require('express');
var router = express.Router();
var unirest = require("unirest");
var reqi = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer");


/* GET Resposta rapida CALCULAR. */
router.get('/', function(req, res) {
  res.render('pesquisa', { title: 'Pesquisar' });
  });

  /* POST  Resposta rapida CALCULAR*/
router.post('/buscar', function (req, res) {
  var pesquisa = req.body.pesquisa;
  console.log(pesquisa);
  reqi.query({
	"q": pesquisa
});
reqi.headers({
	"x-rapidapi-key": "a189d94715msh94688240afe7d21p18a442jsn5712d79e456d",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	"useQueryString": true
});
reqi.end(function (res) {
	if (res.error) throw new Error(res.error);
// RESPOSTA 
  console.log(res.body.answer);
 
});


  });

  
    /* POST  CONVERTER*/
  router.post('/converter', function (req, res) {
    var ingrediente  = req.body.ingre;
    var numero  = req.body.valor;
    var med_antes  = req.body.medicao_antes;
    var med_dps  = req.body.medicao_depois;
    console.log(ingrediente)
    console.log(numero)
    console.log(med_antes)
    console.log(med_dps)
    var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/convert");

    req.query({
      "ingredientName": ingrediente,
      "targetUnit": med_dps,
      "sourceUnit": med_antes,
      "sourceAmount": numero
    });

    req.headers({
      "x-rapidapi-key": "a189d94715msh94688240afe7d21p18a442jsn5712d79e456d",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "useQueryString": true
    });


    req.end(function (res) {
      if (res.error) throw new Error(res.error);
// RESPOSTA 
      console.log(res.body);
    });
  });


module.exports = router;
