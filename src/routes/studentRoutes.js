const express=require('express');
const studentController=require('../controllers/student.controller')
const ageMiddleware = require('../middlewares/ageMiddleware');
const router=express.Router();


// CREATE A NEW STUDENT
router.post('/students', studentController.addStudentController);

// router.get('/students',ageMiddleware, studentController.getAllStudentsController);
// GET DETAILS OF ALL STUDENTS
router.get('/students', studentController.getAllStudentsController);

// GET, UPDATE, DELETE A STUDENT BY ID
router.get('/students/:id', studentController.getStudentByIdController);

// UPDATE A STUDENT BY ID
router.put('/students/:id', studentController.updateStudentController);

// DELETE A STUDENT BY ID
router.delete('/students/:id', studentController.deleteStudentController);

module.exports=router;