const mysql = require('mysql2')

const conn = mysql.createConnection({
		 host     : 'localhost',
  	     user     : 'root',
   		 password : '',
   		 database : 'node_crud'
})





module.exports = {
	conn
}