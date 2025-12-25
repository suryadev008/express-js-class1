// require('dotenv').config();
// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//   host: DB_HOST,
//   dialect:'mysql'
// });

const { Sequelize } = require('sequelize');
require('dotenv').config(); // To use environment variables

// Environment-specific configuration
const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: console.log,  // Enable logging in development for debugging
    pool: {
      max: 5,
      min: 2,
      acquire: 30000,
      idle: 10000
    }
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,  // Disable logging in production
    pool: {
      max: 10,
      min: 2,
      acquire: 60000,
      idle: 20000
    },
    dialectOptions: {
      // This option allows you to handle character encoding issues (UTF-8)
      charset: 'utf8mb4',
    }
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  }
};

// Select the configuration based on the environment
const environment = process.env.NODE_ENV || 'development'; // Default to 'development' if not set
const dbConfig = config[environment];
console.log(dbConfig)

// Create Sequelize instance
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  logging: dbConfig.logging,
  pool: dbConfig.pool,
  dialectOptions: dbConfig.dialectOptions,
});


// Authenticate the connection
// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Database connection established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//     throw error; // Throw error to handle it in the API
//   }
// }

module.exports = sequelize;
