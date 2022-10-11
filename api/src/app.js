const express = require('express');
const cors = require('cors');

const app = express();

const index = require('./routes/index');
const productRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('images'))

app.use(index);
app.use('/api/', productRoute);

module.exports = app;