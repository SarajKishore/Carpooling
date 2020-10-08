let mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

let stmt =`INSERT INTO react_schema.teacher_woc (T_ID, T_NAME, T_PHONE, T_PICKUP, T_START_TIME) VALUES (?,?,?,?,?)`;
let todo =['1', 'tattoo', '11111', 'uno', '8:00:00'];
let select=`SELECT * FROM react_schema.teacher_woc`;

connection.query(select, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    // get inserted id
    console.log(results[0].T_ID

        );
  });




 
connection.end();