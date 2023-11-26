const express = require('express')
const router = express.Router()

const {registerStudent, updateStudent, deleteStudent, getStudentData} = require('../controllers/studentController');


router.get('/', getStudentData)
router.post('/register', registerStudent)
router.post('/update/:id',updateStudent)
router.get('/delete/:id', deleteStudent)

module.exports = router;