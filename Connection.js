const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'streamframe',
  multipleStatements: true,
});

db.connect((err) => {
  console.log(`Streamframe database ${!err ? 'connected' : 'not connected'}!`);
});

module.exports = db;
