
var db = require('./db_accessor.js');
db.connect();

console.log("Insert Start...");
//TODO::callback地獄
var data={
    st_name:"JUN TAKADA",
    grade:4,
    class:3,
    gender:"Man",
    subjects:"Science",
    score:84
}
db.insert(data,function(ret){
    console.log("Search ALL Start...");
    db.searchALL(function(ret){
        console.log(ret);
        db.disconnect();
        console.log("Search ALL End")
    });
});

