var mysql = require('mysql');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "SQLPass123",
            database: "islandfurniture_it07"
        });
        return conn;
    }
};
module.exports = dbconnect