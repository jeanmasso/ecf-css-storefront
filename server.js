/* Initialisation des outils utiles au serveur */
const express = require('express')

const app = express()
const port = 3000 // Port sur lequel est logé le serveur

/* Initialisation du moteur de modèle à utiliser */
app.set('view engine', 'pug') // Modèle utilisé: pug
app.set('views', __dirname) // Le dossier dans lequel se trouvent les modèles de vues

/* Initialisation des fichiers statiques (pour les dépendances, styles, images, ...) */
app.use(express.static('public'))
app.use(express.static('node_modules'))

/* Initialisation des url pour l'acquisition des pages */
app.get(['/', '/home'], (req, res) => {
    res.render('index',{
        title: 'Home',
        page: 'index'
    });
}) // Si l'url = localhost:3000 ou localhost:3000/home elle renvoie la page index.pug avec include views/category-page.pug

app.get('/product-details', (req, res) => {
    res.render('index',{
        title: 'Product details',
        page: 'product-details'
    });
}) // Si l'url = localhost:3000/product-details elle renvoie la page index.pug avec include views/product-details.pug

app.get('/cart', (req, res) => {
    res.render('index',{
        title: 'My cart',
        page: 'cart'
    });
}) // Si l'url = localhost:3000/cart elle renvoie la page index.pug avec include views/cart.pug

app.listen(port)