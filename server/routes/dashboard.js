const express = require('express');

const app = express();
const Usuario = require('../models/usuario');

app.get('/dashboard', async(req, res) => {
    const usuariosDB = await Usuario.find();
    res.json(usuariosDB);
});

app.post('/dashboard', async(req, res) => {
    new Usuario();
    console.log(new Usuario());
})

module.exports = app;