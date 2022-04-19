const { Router } = require('express');
const users = require('./users');

const routes = Router();

routes.use('/users', users);

module.exports = routes;
