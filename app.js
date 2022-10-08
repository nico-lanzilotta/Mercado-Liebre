/*const express = require ('express');
const path = require ('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.listen(3000, () => {
    console.log('servidor corriendo en el puerto 3000')
})*/

const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');

app.listen(3000, () => console.log('Server on'));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.use(express.static(publicPath));






