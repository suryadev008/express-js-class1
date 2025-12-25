const express=require('express');
const studentController=require('../controllers/student.controller')
const router=express.Router();


router.post('/students', studentController.addStudentController);
router.get('/students/:id', studentController.getStudentByIdController);
router.get('/students', studentController.getAllStudentsController);
router.put('/students/:id', studentController.updateStudentController);
router.delete('/students/:id', studentController.deleteStudentController);

module.exports=router;