const ageMiddleware = (req, res, next) => {
  const age = parseInt(req.query.age, 10);     // Get age from query parameters

  if (isNaN(age)) {
    return res.status(400).json({ message: 'Age parameter is required and must be a number.' });
  }
if (age < 18) {
    return res.status(403).json({ message: 'Access denied. You must be at least 18 years old.' });
  } 
    next(); // Proceed to the next middleware or route handler
};

module.exports = ageMiddleware;
