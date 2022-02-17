let express = require('express');
let router = express.Router();


const tempBookObjects = [
    {   name: "In The Miso Soup",
        date: "february",
        genre: "Horror",
        author: "Ryū Murakami",
        people: 5
    }, {
        name: "In The Miso Soup2222",
        date: "february",
        genre: "Horror",
        author: "Ryū Murakami",
        people: 5
    }, {
        name: "In The Miso Soup111",
        date: "february",
        genre: "Horror",
        author: "Ryū Murakami",
        people: 5
    }
]

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/library', (req, res) => {
    res.render('library', {tempBookObjects});
})

router.get('/aboutus', (req, res) => {
    res.render('aboutus');
})

module.exports = router;


