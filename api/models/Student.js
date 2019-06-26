const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
		unique: true
	},
	age: {
		type: Number
	},
	photoUrl: {
		type: String
	},
	bio: {
		type: String
	}
})

const Student = mongoose.model('Student', StudentSchema)

module.exports = Student
