var express = require('express');
var router = express.Router();

// GET method api
router.get('/', (req, res) => {
    res.json({'get':'this is a get'});
});

// POST method api
router.post('/', (req, res) => {
    let msg = req.body;
    console.log(msg['message']);
    res.send('message success!');
});

module.exports = router;