let express = require('express');
let router = express.Router();

/* For now we will insert Book Objects to add new book descriptions. */


const tempBookObjects = [
    {   name: "In The Miso Soup",
        date: "february",
        genre: "Horror",
        author: "Ryū Murakami",
        description: "In the Miso Soup tells of Frank, an overweight American tourist who has hired Kenji to take him on a guided tour of Tokyo’s sleazy nightlife",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/In_the_Miso_Soup_Cover.jpg"
    }, {
        name: "Im thinking of ending things",
        date: "December/January 2021/2022",
        genre: "Horror",
        author: "Ian Reid",
        description: "Full of misgivings, a young woman travels with her new boyfriend to his parents' secluded farm. Upon arriving, she comes to question everything she thought she knew about him, and herself.",
        image: "https://images-na.ssl-images-amazon.com/images/I/71UZvIul-+L.jpg"
    }, {
        name: "Perfume: The Story of a Murderer",
        date: "June",
        genre: "Thriller",
        author: "Patrick Süskind",
        description: "Perfume: The Story of a Murderer (German: Das Parfum: Die Geschichte eines Mörders [das paʁˈfœ̃ː diː ɡəˈʃɪçtə ˈʔaɪnəs ˈmœʁdɐs] (audio speaker iconlisten)) is a 1985 literary historical fantasy novel by German writer Patrick Süskind. The novel explores the sense of smell and its relationship with the emotional meanings that scents may have.",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f5/PerfumeSuskind.jpg"
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


