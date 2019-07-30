const express = require('express');
const router  = express.Router({mergeParams: true});

router.use((req, res, next) => {
    console.log((new Date()).toISOString());
    next();
});

router.use('/login',require('./login.js'));
router.use('/db',require('./db.js'));


module.exports=router;