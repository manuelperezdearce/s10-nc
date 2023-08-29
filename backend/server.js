const express = require('express');
const app = express();
const cors = require('cors');
const routerApi = require('./src/routes/categories.router');

app.use(express.json());
app.use(cors());
app.use(routerApi)

module.exports = { app }
