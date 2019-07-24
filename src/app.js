const express = require('express');
      app     = express();
      bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.use('/api/v1',require('./routes/v1/'));

app.listen(port);
console.log('listen on port '+port);