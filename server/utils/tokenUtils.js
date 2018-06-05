const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';

const signToken = (user) => {
  const options = {
    expiresIn: 15 * 60 * 1000 // 15 minutes
  };

  return jwt.sign({
    _id: user._id,
    email: user.email,
    password: new String(user.password),
  }, JWT_SECRET, options);
};

module.exports = {signToken, JWT_SECRET};