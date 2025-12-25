// src/controllers/studentController.js
const { addStudent, getStudentById, getAllStudents, updateStudent, deleteStudent } = require('../services/StudentService');

// Controller for adding a student
async function addStudentController(req, res) {
  const { sname, roll, email } = req.body;
  try {
    const newStudent = await addStudent(sname, roll, email); // service
    res.status(201).json({
      error: false,
      message: "Success",
      code: "STUD_CRT_SUES",
      data: newStudent
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Error adding student",
      code: "STUD_CRT_FAL",
      data: ""
    });
  }
}

// Controller for getting a student by ID
async function getStudentByIdController(req, res) {
  const { id } = req.params;
  try {
    const student = await getStudentById(id); // service 
    if (student) {
      res.json({
        error: false,
        message: "Success",
        code: "STUD_GET_SUES",
        data: student
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'Student not found',
        code: 'STUD_NOT_FOUND',
        data: ''
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Error fetching student',
      code: 'STUD_GET_FAL',
      data: ''
    });
  }
}

// Controller for getting all students
async function getAllStudentsController(req, res) {
  try {
    const students = await getAllStudents();
    res.json({
      error: false,
      message: "Success",
      code: "STUD_GET_ALL_SUES",
      data: students
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Error fetching students',
      code: 'STUD_GET_ALL_FAL',
      data: ''
    });
  }
}

// Controller for updating a student by ID
async function updateStudentController(req, res) {
  const { id } = req.params;
  const { sname, roll, email } = req.body;
  try {
    const updatedStudent = await updateStudent(id, sname, roll, email);
    if (updatedStudent) {
      res.json({
        error: false,
        message: "Success",
        code: "STUD_UPD_SUES",
        data: updatedStudent
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'Student not found',
        code: 'STUD_NOT_FOUND',
        data: ''
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Error updating student',
      code: 'STUD_UPD_FAL',
      data: ''
    });
  }
}

// Controller for deleting a student by ID
async function deleteStudentController(req, res) {
  const { id } = req.params;
  try {
    const result = await deleteStudent(id);
    if (result) {
      res.json({
        error: false,
        message: 'Success',
        code: 'STUD_DEL_SUES',
        data: result
      });
    } else {
      res.status(404).json({
        error: true,
        message: 'Student not found',
        code: 'STUD_NOT_FOUND',
        data: ''
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Error deleting student',
      code: 'STUD_DEL_FAL',
      data: ''
    });
  }
}

module.exports = {
  addStudentController,
  getStudentByIdController,
  getAllStudentsController,
  updateStudentController,
  deleteStudentController
};
