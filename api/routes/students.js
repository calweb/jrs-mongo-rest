const express = require('express')
const Student = require('../models/Student')
const router = express.Router

router
	.route('/')
	.get(function(request, response) {
		Student.find({}).then(function(students) {
			response.json({ status: 'ok', data: students })
		})
	})
	.post(function(request, response) {})

router
	.route('/:studentId')
	.get(function(request, response) {})
	.put(function(request, response) {})
	.delete(function(request, response) {})

module.exports = router
