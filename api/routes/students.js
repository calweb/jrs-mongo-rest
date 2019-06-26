const express = require('express')
const Student = require('../models/Student')
const router = express.Router()

// /students/
router
	.route('/')
	.get(function(request, response) {
		Student.find({}).then(function(students) {
			response.json({ status: 'ok', data: students })
		})
	})
	.post(function(request, response) {
		const rawStudent = request.body

		const newStudent = new Student(rawStudent)

		newStudent.save()

		response.json({ status: 'ok', newStudent })
	})

// /students/:studentId
router
	.route('/:studentId')
	.get(function(request, response) {
		Student.findById(request.params.studentId).then(function(foundStudent) {
			response.json(foundStudent)
		})
	})
	.put(function(request, response) {
		Student.findById(request.params.studentId).then(function(foundStudent) {
			foundStudent.name = request.body.name
			foundStudent.age = request.body.age
			foundStudent.photoUrl = request.body.photoUrl
			foundStudent.bio = request.body.bio

			foundStudent.save()

			response.json(foundStudent)
		})
	})
	.delete(function(request, response) {
		Student.findByIdAndDelete(request.params.studentId).then(function(res) {
			response.json({ status: 'ok', res: res })
		})
	})

module.exports = router
