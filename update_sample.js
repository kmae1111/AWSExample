var db = require('./db_accessor.js');
var targetID=2;
var targetKey="score";
var newScore=100;
db.connect();

console.log("Update(id="+ targetID +",key="+ targetKey+",param=" + newScore + ") Start...");
//TODO::callback地獄
db.updateByID(targetID,targetKey,newScore,function(ret){
    console.log("Search ALL Start...");
    db.searchALL(function(ret){
        console.log(ret);
        db.disconnect();
        console.log("Search ALL End")
    });
});

