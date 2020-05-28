var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', (req, res) => {
  res.send('Go to react port')
});

module.exports = router;
