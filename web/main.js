// iife
// immediately invoked function expression

const page = {
	init: function() {
		page
			.getStudents()
			.then(function(students) {
				console.log('STUDENTS', students)
				page.addStudentsToPage(students.data)
			})
			.then(function() {
				page.initEvents()
			})
	},
	initEvents: function() {
		// setTimeout(function() {
		page.clickDetails()
		page.deleteStudentEvent()
		// }, 2000)
	},
	clickDetails: function() {
		document.addEventListener('click', function(event) {
			event.preventDefault()
			const data = event.target.dataset
			console.log(data.id)
			const isMoreDetail = event.target.classList.contains('detailLink')
			if (isMoreDetail) {
				page.getSingleStudent(data.id).then(function(student) {
					console.log('we are getting our student', student)
				})
			}
		})
	},
	getSingleStudent: function(studentId) {
		return fetch(`http://localhost:8000/students/${studentId}`).then(function(student) {
			return student.json()
		})
	},
	deleteStudentEvent: function() {
		const $deleteLinks = document.querySelectorAll('.deleteLink')
		console.log('hello links', $deleteLinks)
		$deleteLinks.forEach(function(deleteLinkDom) {
			deleteLinkDom.addEventListener('click', function(event) {
				event.preventDefault()
				const data = event.target.dataset
				const isDeleteLink = event.target.classList.contains('deleteLink')
				if (isDeleteLink) {
					page.deleteStudentFromApi(data.id)
				}
				console.log(data.id)
			})
		})
	},
	deleteStudentFromApi: function(studentId) {
		return fetch(`http://localhost:8000/students/${studentId}`, {
			method: 'DELETE'
		}).then(function(res) {
			return res.json()
		})
	},
	getStudents: function() {
		return fetch('http://localhost:8000/students')
			.then(function(students) {
				return students.json()
			})
			.catch((error) => console.log('Error', error))
	},
	addStudentsToPage: function(students) {
		let html = '<ul>'
		students.forEach(function(student) {
			html += `<li>${page.singleStudentTemplate(student)}</li>`
		})
		html += '</ul>'
		const $studentsList = document.querySelector('#studentsList')
		$studentsList.innerHTML = html
		console.log(html)
	},
	singleStudentTemplate: function(student) {
		return `<div data-id="${student._id}">
        <h3>${student.name}</h3>
        <img src="${student.photoUrl}">
        <p>${student.bio}</p>
        <a class="detailLink" href="#" data-id="${student._id}">More Details</a> 
        <a class="deleteLink" href="#" data-id="${student._id}">Delete student</a>
        </div>`
	}
}
;(function() {
	page.init()
})()
