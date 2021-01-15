const express = require('express')
const pug = require('pug')

const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', __dirname)

app.use(express.static('public'))
app.use(express.static('node_modules'))

const compiledFunction = pug.compileFile(__dirname + '/index.pug');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port)