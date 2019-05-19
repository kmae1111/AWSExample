var connection;
const mysql = require('mysql2');
var db_settings = require('./settings/db_setting');
exports.connect=function(){
    connection = mysql.createConnection({
        host: db_settings.DB_HOST,
        port: 3306,
        user: db_settings.DB_USER,
        password: db_settings.DB_PASS,
        database: db_settings.DB_NAME,
    });
}
exports.disconnect=function(){
    connection.end();
}
exports.insert= function(data,event){
    var query='INSERT INTO ' + db_settings.DB_TABLE_NAME + ' (st_name,grade,class,gender,subjects,score) VALUES ("'+ data.st_name + '",' + data.grade + ',' + data.class + ',"' + data.gender + '","' + data.subjects + '",' + data.score + ');';
    console.log(query);
    connection.query(query,function(err, rows, fields)  {
        if (err) { console.log('err: ' + err); }
        event();
    })
}
exports.updateByID = function(id,key,data,event){
    var query='UPDATE ' + db_settings.DB_TABLE_NAME + ' SET ' + key + ' = '+ data +' WHERE id=' + id + ';';
    connection.query(query,function(err, rows, fields)  {
        if (err) { console.log('err: ' + err); }
        event();
    })
}
exports.deleteByID = function(id,event){
    var query='DELETE FROM ' + db_settings.DB_TABLE_NAME + ' WHERE id=' + id + ';';
    connection.query(query,function(err, rows, fields)  {
        if (err) { console.log('err: ' + err); }
        event();
    })
}

exports.searchALL = function(event){
    var query='SELECT * FROM ' + db_settings.DB_TABLE_NAME + ';';
    connection.query(query,function(err, rows, fields)  {
        if (err) { console.log('err: ' + err); }
        event(rows);
    })
}
exports.searchByID = function(id,event){
    var query='SELECT * FROM ' + db_settings.DB_TABLE_NAME + ' WHERE id=' + id + ';';
    connection.query(query,function(err, rows, fields)  {
        if (err) { console.log('err: ' + err); }
        event(rows);
    })
}