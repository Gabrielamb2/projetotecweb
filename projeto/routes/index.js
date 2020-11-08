var express = require('express');
var router = express.Router();
var unirest = require("unirest");



/* GET Resposta rapida CALCULAR. */
router.get('/', function(req, res) {
  res.render('pesquisa', { title: 'Pesquisar' });
  });

  /* POST  Resposta rapida CALCULAR*/
// router.post('/buscar', function (req, res) {
//   var pesquisa = req.body.pesquisa;
//   console.log(pesquisa);
  
// });
router.get('/buscar/:word',(req, res)=> {
  const requ = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer");
  requ.query({
    "q": req.params.word
  });
  requ.headers({
    "x-rapidapi-key": "a189d94715msh94688240afe7d21p18a442jsn5712d79e456d",
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "useQueryString": true
  });
  requ.end(function (response) {
    if (response.error) throw new Error(response.error);
    res.json(response.body);
    
  });
    
    // res.json(res.body);
    // res.end();
  
      // console.log(req);
      // var parsedBody = JSON.parse(res)
      // res.send(parsedBody)
    
  // RESPOSTA 
    
   
  });


  



  
    /* POST  CONVERTER*/
//   router.post('/converter', function (req, res) {
//     var ingrediente  = req.body.ingre;
//     var numero  = req.body.valor;
//     var med_antes  = req.body.medicao_antes;
//     var med_dps  = req.body.medicao_depois;
//     console.log(ingrediente)
//     console.log(numero)
//     console.log(med_antes)
//     console.log(med_dps)
//     var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/convert");

//     req.query({
//       "ingredientName": ingrediente,
//       "targetUnit": med_dps,
//       "sourceUnit": med_antes,
//       "sourceAmount": numero
//     });

//     req.headers({
//       "x-rapidapi-key": "a189d94715msh94688240afe7d21p18a442jsn5712d79e456d",
//       "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//       "useQueryString": true
//     });


//     req.end(function (res) {
//       if (res.error) throw new Error(res.error);
// // RESPOSTA 
//       console.log(res.body);
//     });
//   });
  router.get('/converter/:ingrediente/:med_dps/:med_antes/:numero',(req, res)=> {
    const requ = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/convert");
    requ.query({
      "ingredientName": req.params.ingrediente,
    "targetUnit": req.params.med_dps,
    "sourceUnit": req.params.med_antes,
    "sourceAmount":req.params.numero
      
    });
    requ.headers({
      "x-rapidapi-key": "a189d94715msh94688240afe7d21p18a442jsn5712d79e456d",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "useQueryString": true
    });

    requ.end(function (response) {
      if (response.error) throw new Error(response.error);
      res.json(response.body);
      
    });
  });

// pesquise receita por nutrientes
router.post('/receitas', function(req, res) {
  res.render('pesquisa_receitas_nutrientes');
  });

router.post('/filtrar/receitas/nutrientes', function(req, res) {
  var min_carb  = req.body.min_carb;
  var max_carb  = req.body.max_carb;
  var min_pro  = req.body.min_pro;
  var max_pro  = req.body.max_pro;
  var min_cal  = req.body.min_cal;
  var max_cal  = req.body.max_cal;
  var min_gor  = req.body.min_gor;
  var max_gor  = req.body.max_gor;

  var unirest = require("unirest");

  var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients");

  req.query({
    "minCarbs":min_carb ,
    "minProtein":min_pro ,
    "maxCalories": max_cal,
    "maxCarbs":max_carb ,
    "maxFat": max_gor,
    "maxProtein": max_pro,
    "minFat": min_gor,
    "minCalories": min_cal,
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

// obtenha substitutos para ingredientes 
router.post('/ingredientes', function(req, res) {
  res.render('substituto_ingredientes');
  });

router.post('/substituto/ingredientes', function(req, res) {
  var ingrediente  = req.body.ingre;
  var unirest = require("unirest");

  var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/substitutes");

  req.query({
    "ingredientName": ingrediente
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


// curiosidades  
router.post('/curiosidades', function(req, res) {
  var unirest = require("unirest");

  var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random");

  req.headers({
    "x-rapidapi-key": "a189d94715msh94688240afe7d21p18a442jsn5712d79e456d",
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "useQueryString": true
  });


  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
  });

// Criar cartão de receita
router.post('/criareceita', function(req, res) {
  res.render('criar_cartao_receita');
  });

router.post('/receitanova', function(req, res) {
  var unirest = require("unirest");

  var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random");

  req.headers({
    "x-rapidapi-key": "a189d94715msh94688240afe7d21p18a442jsn5712d79e456d",
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "useQueryString": true
  });


  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
  });


module.exports = router;
