// utils/testConnection.js
const sequelize = require('./dbConnection.js');  // Importing sequelize instance

// Function to test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();  // Try authenticating the connection
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);  // Exit the process on failure
  }
}

// Retry connection logic if the connection fails
async function retryConnection() {
  try {
    await testConnection();
  } catch (error) {
    console.error('Error during connection attempt:', error);
    setTimeout(retryConnection, 5000); // Retry every 5 seconds
  }
}

// Export retryConnection for use in other parts of the application
module.exports = retryConnection;
