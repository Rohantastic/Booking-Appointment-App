const db = require('mysql2');
const pool = db.createConnection({
    host:'localhost',
    user: 'root',
    database: 'student',
    password:'root'
});

pool.connect(()=>{
    console.log('Database connection initiated...');
});

module.exports = pool.promise();


