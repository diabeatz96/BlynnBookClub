let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/library', (req, res) => {
    res.render('library');
})

router.get('/aboutus', (req, res) => {
    res.render('aboutus');
})

module.exports = router;


