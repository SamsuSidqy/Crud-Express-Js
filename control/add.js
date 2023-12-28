const {conn} = require('./database/db');

// db.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

const insert = (data) =>{
	return new Promise((resl,rej) => {

		conn.connect((err) => {
			if (err) throw err;
			  conn.query(`INSERT INTO nama VALUES ('','${data.nama}')`,(err,res) => {
			  	if (err) {rej(err)}
			  	resl(res)
			 })
		});

		// Coba Asnchronus
		// if (data.nama === "juber") {
		// setTimeout(() => {
		// 	conn.connect((err) => {
		// 	  if (err) throw err;
		// 	  conn.query(`INSERT INTO nama VALUES ('','${data.nama}')`,(err,res) => {
		// 	  	if (err) {rej(err)}
		// 	  	resl(res)
		// 	  })
		// 	});
		// },10000)
		// }else{
		// setTimeout(() => {
		// 	conn.connect((err) => {
		// 		if (err) throw err;
		// 		conn.query(`INSERT INTO nama VALUES ('','${data.nama}')`,(err,res) => {
		// 		if (err) {rej(err)}
		// 	  	resl(res)
		// 	  })
		// 	});
		// },5000)
		// }

	})	

}

const update = (data) => {
	return new Promise((resl,rejc) => {
		conn.connect((err) => {
			if (err) throw err;
			  conn.query(`UPDATE nama SET nama = '${data.nama}' WHERE id =${data.id}`,(err,res) => {
			  	if (err) {rejc(err)}
			  	resl(res)
			 })
		});
	})
}


module.exports = {
	insert,
	update
}