const express = require('express');

const app = express();


app.use(express.json())

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get('/about', (req, res) => {
    res.send("About Page")
})
app.get('/login', (req, res) => {
    res.send("Login Page")
})

app.post('/signup', (req, res) => {
    // const { name, age } = req.body
    res.send(`My name is ${req.body.name} and I'm ${req.body.age} years old`)
})

app.listen(8888, () => console.log("server running"))

