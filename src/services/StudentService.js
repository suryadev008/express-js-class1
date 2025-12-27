// src/services/StudentService.js
const Student = require('../models/Student');  // Import the Student model

// Service to add a new student
async function addStudent(sname, roll, email) {
  try {
    const newStudent = await Student.create({
      sname,
      roll,
      email
    });
    return newStudent;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
}

// Service to get a student by ID
async function getStudentById(id) {
  try {
    const student = await Student.findOne({
      where: {
        roll: id
      }
    });
    return student;
  } catch (error) {
    console.error('Error fetching student by ID:', error);
    throw error;
  }
}

// Service to get all students
async function getAllStudents() {
  try {
    const students = await Student.findAll();
    return students;
  } catch (error) {
    console.error('Error fetching all students:', error);
    throw error;
  }
}

// Service to update a student's details by ID
async function updateStudent(id, sname, roll, email) {
  try {
    const student = await Student.findOne({
      where: {
        roll: id
      }
    });
    if (student) {
      student.sname = sname || student.sname;
      student.roll = roll || student.roll;
      student.email = email || student.email;
      await student.save();
      return student;
    } else {
      throw new Error('Student not found');
    }
  } catch (error) {
    console.error('Error updating student:', error);
    throw error;
  }
}

// Service to delete a student by ID
async function deleteStudent(id) {
  try {
    
    const student = await Student.findOne({
      where: {
        roll: id
      }
    });

    if (student) {
      await student.destroy();
      return { message: 'Student deleted successfully' };
    } else {
      throw new Error('Student not found');
    }
    
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
}

module.exports = {
  addStudent,
  getStudentById,
  getAllStudents,
  updateStudent,
  deleteStudent
};
