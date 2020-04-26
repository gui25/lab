const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/arquivo.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the arquivo database.');
    db.run('CREATE TABLE langs(id integer primary key autoincrement, nome text,msg text');
});





db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
});