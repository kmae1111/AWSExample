var connection;
const mysql = require('mysql2/promise');
const db_settings = require('../settings/db_setting');
const fs = require('fs');

module.exports = class DBAccessor {
  async connect(dbname) {
    this.connection = await mysql.createConnection({
      host: db_settings.DB_HOST,
      port: 3306,
      user: db_settings.DB_USER,
      password: db_settings.DB_PASS,
      database: db_settings.DB_NAME,
      ssl  : {
        ca : fs.readFileSync(db_settings.DB_SSL_FULLPATH)
      }
    });

    this.dbname = dbname;
  }
  async disconnect() {
    await this.connection.end();
  }

  async execQuery(sql) {
    // console.log(sql)
    return await this.connection.query(sql);
  }

  async insert(data) {
    var sql =
      'INSERT INTO ' +
      this.dbname +
      ' (st_name,grade,class,gender,subjects,score) VALUES ("' +
      data.st_name +
      '",' +
      data.grade +
      ',' +
      data.class +
      ',"' +
      data.gender +
      '","' +
      data.subjects +
      '",' +
      data.score +
      ')';
    const [rows, field] = await this.execQuery(sql).catch(err => {
      throw err;
    });
    return rows;
  }

  async updateByID(id, key, data) {
    var sql =
      'UPDATE ' +
      this.dbname +
      ' SET ' +
      key +
      ' = ' +
      data +
      ' WHERE id=' +
      id +
      '';

    const [rows, field] = await this.execQuery(sql).catch(err => {
      throw err;
    });
    return rows;
  }
  async deleteByID(id) {
    var sql = 'DELETE FROM ' + this.dbname + ' WHERE id=' + id + '';
    const [rows, field] = await this.execQuery(sql).catch(err => {
      throw err;
    });
    return rows;
  }

  async searchALL() {
    var sql = 'SELECT * FROM ' + this.dbname + '';
    const [rows, field] = await this.execQuery(sql).catch(err => {
      throw err;
    });
    return rows;
  }

  async searchByID(id) {
    var sql = 'SELECT * FROM ' + this.dbname + ' WHERE id=' + id + '';
    const [rows, field] = await this.execQuery(sql).catch(err => {
      throw err;
    });
    return rows;
  }
};
