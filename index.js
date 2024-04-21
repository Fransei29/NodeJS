// --- Now we gonna create our first Server using Express
// Then, send a normal response and other one with "JSON"

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => res.send('Hello World, this is my first Express server!!'))
// app.get('/', (req, res) => res.json({ username: 'Flavio' }))

// app.listen(3000, () => console.log('Server ready to be use!'))

// --- Retrieving the GET query string parameters 

// app.get('/', (req, res) => {
//     console.log("hola" + req.query) 
// })

// app.listen(8080)

// --- Retrieving the POST query string parameters 

// app.post('/form', (req, res) => {
//     const name = req.body.name
//   })

//   --- Let´s send a response
// res.status(404).send('File not found')

// --- Manipulating Cookies
// res.cookie('username', 'Flavio', { domain: '.flaviocopes.com', path: '/administrator', secure: true })



// ---- Time to start using PUG to create a dynamic html..----

const express = require('express');
const path = require('path');
const app = express();

// Configurar el motor de plantillas (Pug)
app.set('view engine', 'pug');
// Indicar la carpeta donde se encuentran las vistas
app.set('views', path.join(__dirname, 'views'));

// Definir la ruta para renderizar la vista 'about'
app.get('/about', (req, res) => {
    res.render('about')
});

app.listen(8080, () => {
    console.log('Server ready to use in 8080');
});



  