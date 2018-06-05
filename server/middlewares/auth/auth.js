const jwt = require('jsonwebtoken');
const tokenUtils = require('../../utils/tokenUtils');

const auth = (req, res, next) => {

  if (req.originalUrl === '/login' || req.originalUrl === '/signup') {
    return next();
  }

  const header = req.get('Authorization');
  if (!header) {
    return res.status(403).send({
      error: 'Not allowed: No token'
    });
  }

  const headerComponent = header.split(' ');

  if (headerComponent.length !== 2 || headerComponent[0] !== 'Bearer') {
    return res.status(403).send({
      error: 'Not allowed: Token header malformed'
    });
  }

  const [Bearer, token] = headerComponent;

  jwt.verify(token, tokenUtils.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({
        error: 'Not allowed: Token malformed'
      });
    }
    req.user = decoded;
    next();
  });
};

module.exports = auth;