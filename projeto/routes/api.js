var unirest = require("unirest");
var express = require('express');
var router = express.Router();
var req = unirest("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer");
// req.query({
// 	"q": "How much vitamin c is in 2 apples?"
// });
// req.headers({
// 	"x-rapidapi-key": "a189d94715msh94688240afe7d21p18a442jsn5712d79e456d",
// 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 	"useQueryString": true
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });
router.get('/oi', function(req, res, next) {
	res.body
	
	
});


module.exports = router;