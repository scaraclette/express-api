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

// GET cute cats
router.get('/cats', (req, res) => {
    const cats = {
        "cats": [
            {id: 1, name: 'Si', isChonky: true},
            {id: 2, name: 'Winston', isChonky: false},
            {id: 3, name: 'Ducky', isChonky: false},
            {id: 4, name: 'Helli', isChonky: true},
            {id: 5, name: 'Cleo', isChonky: true},
            {id: 6, name: 'Adrian', isChonky: true},
            {id: 7, name: 'Scarlett', isChonky: false}
        ]
    }
    res.json(cats);
});

module.exports = router;