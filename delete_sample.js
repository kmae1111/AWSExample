var db = require('./db_accessor.js');
var targetID=2;
db.connect();

console.log("Delete id="+ targetID +" Start...");
//TODO::callback地獄
db.deleteByID(targetID,function(ret){
    console.log("Search ALL Start...");
    db.searchALL(function(ret){
        console.log(ret);
        db.disconnect();
        console.log("Search ALL End")
    });
});

