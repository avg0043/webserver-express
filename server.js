const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
// takes the variable PORT or if doesn't exist takes 3000 port (local)
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// routes app
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Fernando'
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});

// listen port
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});