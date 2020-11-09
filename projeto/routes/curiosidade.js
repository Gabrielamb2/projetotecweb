var express = require('express');
var router = express.Router();
var unirest = require("unirest");

router.get('/', function(req, res) {
    
  
    var requ = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/trivia/random");
  
    requ.headers({
      "x-rapidapi-key": "a189d94715msh94688240afe7d21p18a442jsn5712d79e456d",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "useQueryString": true
    });
  
  
    requ.end(function (response) {
      if (response.error) throw new Error(response.error);
      res.json(response.body.text);
      
    });
    });

    module.exports = router;