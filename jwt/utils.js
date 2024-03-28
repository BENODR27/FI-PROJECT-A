const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

function generateToken(user) {
  return jwt.sign({ sub: user.id }, 'your_secret_key', { expiresIn: '1h' }); // Replace with your own secret key and token expiration time
}

function verifyPassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

module.exports = { generateToken, verifyPassword };
