var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'A Simple Express-API '});
});

module.exports = router;
