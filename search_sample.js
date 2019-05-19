var db = require('./db_accessor.js');
const targetID=2;
db.connect();

console.log("Search ALL Start...");
//TODO::callback地獄
db.searchALL(function(ret){
    console.log(ret);
    console.log("Search ALL End")
    console.log("Search by ID = "+ targetID +" Start...")
    db.searchByID(targetID,function(ret){
        console.log(ret);
        db.disconnect();
        console.log("Search by ID = "+ targetID +" End")
    });
});

