var express = require('express');
var router = express.Router();
var unirest = require("unirest");


router.get('/:ingrediente/:med_dps/:med_antes/:numero',(req, res)=> {
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

  module.exports = router;