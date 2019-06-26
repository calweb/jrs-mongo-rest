const express = require('express')
const Student = require('./models/Student')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/students', { useNewUrlParser: true })

const app = express()

app.use(bodyParser())

// Main GET / route
app.get('/', function(request, response) {
	console.log('We live in the GET route')
	response.json({ status: 'ok', message: 'Welcome to my server.' })
})

app.get('/students', function(request, response) {
	Student.find({}).then(function(students) {
		response.json({ status: 'ok', data: students })
	})
})

app.post('/students', function(request, response) {
	const rawStudent = request.body

	const newStudent = new Student(rawStudent)

	newStudent.save()

	response.json({ status: 'ok', newStudent })
})

app.get('/students/:studentId', function(request, response) {
	Student.findById(request.params.studentId).then(function(foundStudent) {
		response.json(foundStudent)
	})
})

app.put('/students/:studentId', function(request, response) {
	Student.findById(request.params.studentId).then(function(foundStudent) {
		foundStudent.name = request.body.name
		foundStudent.age = request.body.age
		foundStudent.photoUrl = request.body.photoUrl
		foundStudent.bio = request.body.bio

		foundStudent.save()

		response.json(foundStudent)
	})
})

app.delete('/students/:studentId', function(request, response) {
	Student.findByIdAndDelete(request.params.studentId).then(function(res) {
		response.json({ status: 'ok', res: res })
	})
})

app.listen(8000, function() {
	console.log('Server is listening on PORT 8000 -- hello everyone')
})
