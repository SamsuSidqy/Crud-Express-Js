const {conn} = require('./database/db');





const list = () => {
	return new Promise((res,rej) => {
	try
	{
		conn.query("SELECT * FROM nama",(err,row) =>{
			if (err) {throw err}
			res(row)	
		})	
	}catch(er){
		rej("Gagal Try")
	}

})
}

const baca = (id) => {
	return new Promise((res,rej) => {
		conn.query(`SELECT * FROM nama WHERE id =${id}`, (err,row) => {
			if (err) {throw err}
			res(row)
			console.log(row)
		})
			
		
	})
}






module.exports = {
	list,
	baca
}