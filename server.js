// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 3000 

const homeRoutes = require('./routes/homeRoute')
const blogRoutes = require('./routes/blogRoute')

// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())


// Our "root" route for our app 
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.use('/home', homeRoutes)

app.use('/blog', blogRoutes)

app.get('/about', (req, res) => {
    res.send('<h1>About Page!!</h1>')
})

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page!!</h1>')
})


app.get('/9', (req, res) => {
    res.send('<h1>Page 9!!</h1>')
})

app.get('/10', (req, res) => {
    res.send('<h1>Page 10 :)!!</h1>')
})

app.get('/queryroute', (req, res) => {
    console.log(req.query.random)
    res.send(`<h1>${req.query.random} anything</h1>`)
})

app.get('/:name', (req, res) => {
    console.log(req.params)
    res.send(`<h1>Hello ${req.params.name}</h1>`)
})


app.get('/:name/:last', (req, res) => {
    console.log(req.params)
    res.send(`<h1>Hello ${req.params.name} ${req.params.last}</h1>`)
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})