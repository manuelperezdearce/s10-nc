const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./src/routes');

app.use(express.json());
app.use(cors());
app.use(router)

module.exports = { app }
