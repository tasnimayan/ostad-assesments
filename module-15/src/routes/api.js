const express = require('express')
const router = express.Router()

const {registerStudent, updateStudent, deleteStudent} = require('../controllers/studentController');


router.post('/registration', registerStudent)
router.post('/student/update',updateStudent)
router.get('/student/delete/:id', deleteStudent)

module.exports = router;