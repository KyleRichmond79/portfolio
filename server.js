'use strict';

const express = require('express');
const bodyParser = require('body-parser').urlencoded({
  extend: true
});
let app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./'));
app.get('', function(request, response){
  response.sendfile('index.html', {
    root: './'
  })
});
app.post('./', bodyParser, function(request, response){
  console.log(request.body);
  response.send('Record posted to server!');
});

app.listen(PORT, function(){
  console.log(`'listening on port: ${PORT}'`);
});
