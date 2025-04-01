const express = require('express');
const path = require('path');

const web = express();

// Set EJS as the view engine
web.set('view engine', 'ejs');
web.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory (optional for CSS/JS)
web.use(express.static(path.join(__dirname, 'public')));

web.get('/', (req, res) => {
    res.render('index'); // Render three.ejs
});
web.get('/portfolio', (req, res) => {
    res.render('portfolio'); // Render the portfolio.ejs template
});
web.get('/about', (req, res) => {
    res.render('about'); // Render three.ejs
});
web.get('/contact', (req, res) => {
    res.render('contact'); // Render three.ejs
});

// Start the server
const PORT = 9000;
web.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
