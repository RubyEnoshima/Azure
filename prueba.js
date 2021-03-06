process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const mysql = require('mysql');
const fs = require('fs');
var config = {
    host: 'cloud04server.mysql.database.azure.com',
    user: 'vilaruben70@cloud04server',
    password: 'pokemon1A',
    database: 'cloud04server',
    port: 3306,
    ssl: { ca: fs.readFileSync("C:\\Users\\Ruby\\Downloads\\D-TRUST_Root_Class_3_CA_2_2009.crt") }
};

const conn = new mysql.createConnection(config);

conn.connect(
    function(err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        } else {
            console.log("Connection established.");
            queryDatabase();
        }
    });

function queryDatabase() {
    conn.query('DROP TABLE IF EXISTS inventory;', function(err, results, fields) {
        if (err) throw err;
        console.log('Dropped inventory table if existed.');
    })
    conn.query('CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);',
        function(err, results, fields) {
            if (err) throw err;
            console.log('Created inventory table.');
        })
    conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['banana', 150],
        function(err, results, fields) {
            if (err) throw err;
            else console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
    conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['orange', 154],
        function(err, results, fields) {
            if (err) throw err;
            console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
    conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['apple', 100],
        function(err, results, fields) {
            if (err) throw err;
            console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
    conn.end(function(err) {
        if (err) throw err;
        else console.log('Done.')
    });
};