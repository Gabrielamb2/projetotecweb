var express = require('express');
var router = express.Router();
var unirest = require("unirest");
var reqi = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET Userlist page. */
// router.get('/userlist', function(req, res) {
//   var db = require("../db");
//   var Users = db.Mongoose.model('usercollection', db.UserSchema,
// 'usercollection');
//   Users.find({}).lean().exec(
//      function (e, docs) {
//       res.json(docs);
//       res.end();
//   });
// });

/* GET Resposta rapida CALCULAR. */
router.get('/', function(req, res) {
  res.render('pesquisa', { title: 'Pesquisar' });
  });

  /* POST  Resposta rapida CALCULAR*/
router.post('/buscar', function (req, res) {
  var pesquisa = req.body.pesquisa;
//   console.log(pesquisa);
//   reqi.query({
// 	"q": pesquisa
// });
// reqi.headers({
// 	"x-rapidapi-key": "a189d94715msh94688240afe7d21p18a442jsn5712d79e456d",
// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 	"useQueryString": true
// });
// reqi.end(function (res) {
// 	if (res.error) throw new Error(res.error);
//   var resposta = res.body.answer
//   console.log(res.body.answer);
  // res.render('resultado', { resposta: resposta });
// });


  });
  
    /* POST Converter valor CALCULAR*/
  router.post('/converter', function (req, res) {
    const rootElement = document.getElementById("ingrediente");
    // var ingrediente = req.body.ingrediente;
    console.log(rootElement);
  });

module.exports = router;
