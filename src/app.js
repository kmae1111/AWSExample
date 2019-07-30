const express = require('express');
      app     = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const logger = require('morgan');
app.use(logger());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var router = require('./routes/v1/');
app.use('/api/v1/',router);
app.use('/static', express.static(__dirname + '/public'));

app.use(require('./session/sessionCheck'));

app.get('/',(req,res)=>{
  res.send("Welcome to My page");
})
app.use((req, res, next) => {
    res.status(404).send("This page is Not Found")
})

app.listen(port);
console.log('listen on port '+port);