const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');


const server = express();

//Configuramos la app:
const BASE_URL = process.env.NODE_BASE_URL ? process.env.NODE_BASE_URL : 'http://localhost:3000'

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `${BASE_URL}`);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use('/', routes); 


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});


module.exports = server;