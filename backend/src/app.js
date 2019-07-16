const express = require('express');
const app = express();

require('./utils/middlewares')(app);
require('./routes')(app);

module.exports = app;
