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

// pesquise receita por nutrie
  router.get('/filtrareceitas/:min_carb/:min_pro/:max_cal/:max_carb/:max_gor/:max_pro/:min_gor/:min_cal',(req, res)=> {
    const requ = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByNutrients");
    requ.query({
      "minCarbs":req.params.min_carb ,
    "minProtein":req.params.min_pro ,
    "maxCalories": req.params.max_cal,
    "maxCarbs":req.params.max_carb ,
    "maxFat": req.params.max_gor,
    "maxProtein": req.params.max_pro,
    "minFat":req.params.min_gor,
    "minCalories": req.params.min_cal,
      
      
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




router.get('/substituto/:ingrediente', function(req, res) {
  

  var requ = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/substitutes");

  requ.query({
    "ingredientName": req.params.ingrediente,
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


// curiosidades  
router.get('/curiosidades', function(req, res) {
  var unirest = require("unirest");

  var requ = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random");

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
