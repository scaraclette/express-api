var express = require('express');
var router = express.Router();

// Test first page
router.get('/', function(req, res) {
    res.json({'first api':'now'});
});

module.exports = router;