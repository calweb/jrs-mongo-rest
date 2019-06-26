const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const StudentRoutes = require('./routes/students')
mongoose.connect('mongodb://localhost:27017/students', { useNewUrlParser: true })

const app = express()

app.use(bodyParser())
app.get('/', function(request, response) {
	console.log('We live in the GET route')
	response.json({ status: 'ok', message: 'Welcome to my server.' })
})
app.use('/students', StudentRoutes)

app.listen(8000, function() {
	console.log('Server is listening on PORT 8000 -- hello everyone')
})
