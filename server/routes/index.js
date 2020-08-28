const express = require('express');
const app = express();

app.use(require('./usuario'));
app.use(require('./login'));
app.use(require('./dashboard'));
app.use(require('./gasto'));

module.exports = app;