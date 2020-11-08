var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = require("../db");
  var Users = db.Mongoose.model('usercollection', db.UserSchema,
'usercollection');
  Users.find({}).lean().exec(
     function (e, docs) {
      res.json(docs);
      res.end();
  });
});
/* GET Userlist page. */
router.get('/api', function(req, res) {
  res.render('index', { title: 'API' });
  });
module.exports = router;
