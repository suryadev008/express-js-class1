// src/models/Student.js
const { DataTypes } = require('sequelize');  // Only import DataTypes
const {sequelize} = require('../config/dbConnection');  // Importing the sequelize instance

// Define the Student model
const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  sname: {
    type: DataTypes.STRING(55),
    allowNull: false
  },
  roll: {
    type: DataTypes.STRING(3),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'students',  // Explicitly define the table name
  timestamps: false       // Disable automatic timestamp fields (createdAt, updatedAt)
});

// Export the model
module.exports = Student;
