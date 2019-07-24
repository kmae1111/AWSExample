const express = require('express');
      router  = express.Router();
      db_route = require('./db');

router.use('/db',db_route);

module.exports=router;