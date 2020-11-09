var express = require('express');
var router = express.Router();
var unirest = require("unirest");

router.get('/:ingrediente', function(req, res) {
  

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
module.exports = router;