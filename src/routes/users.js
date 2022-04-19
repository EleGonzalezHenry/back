const server = require('express').Router();
const axios = require('axios')

/* GET users listing. */
server.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

server.get('/list', async(req, res) =>{
  try {
    let usuarios = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(usuarios)
    res.send(usuarios.data);
    
  } catch (error) {
    console.log(error)
  }
});
module.exports = server;
