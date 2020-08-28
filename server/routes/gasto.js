const express = require('express');

let Gasto = require('../models/gasto');

const app = express();

app.get('/gasto', (req, res) => {
    let body = req.body;

    Gasto.find({ vigente: true }, 'nombre')
        .exec((err, gastoDB) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                gasto: gastoDB
            });
        });
});

module.exports = app;