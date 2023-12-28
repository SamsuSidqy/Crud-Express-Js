const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors  = require('cors')

const { insert, update } = require('./control/add')
const { list, baca } = require('./control/list')


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
  list()
  .then(resp => {
	  	res.render('home',{
	  	data:resp
	  })	
  })
  .catch(err => {
  	res.send("Terjadi Kesalahan");
  })

})

app.get('/get-data', (req,res) => {
	list()
  .then(resp => {
	  	res.json(resp)	
  })
  .catch(err => {
  	res.send("Terjadi Kesalahan");
  })
})

app.get('/baca/:id', (req,res) => {
		const id = parseInt(req.params.id)
		if (isNaN(id)) {
			res.send(400)
		}else{
		baca(id)
		.then(row => {
			res.render("read",{data:row})
		})
		.catch(er => {res.send("Something Wrong")})
		}
})


app.post('/add/', async(req,res) => {
	const masuk =   await insert(req.body)
	res.redirect('/')
})

app.post('/update/', async(req,res) => {
	await update(req.body)
	res.redirect('/')
})

app.use((req,res) => {
	res.send(404)
})

app.listen(8000,() => {
	console.log('Listen In Port 8000')
})