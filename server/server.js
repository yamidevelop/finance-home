require('./config/config');

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../public/'))); //.. porque tiene que subir un nivel, salir de carpeta server, para entrar en la carpeta public

console.log(__dirname);

//configuración global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.urlDB, { useNewUrlParser: true, useCreateIndex: true },
    (err, res) => {
        if (err)
            console.log('base de datos offline, no se pudo conectar');
        else
            console.log('Base de datos ONLINE');
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});