const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const User = require('../../models/User');
const JWT_SECRET = require('../login/constants').JWT_SECRET;

const signup = function(req, res) {
  if (!req.body || _.isEmpty(req.body)) {
    return res.status(400).send({
      error: 'body cannot be empty'
    });
  }

  const {email, password, confirmPassword} = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send({
      error: 'password confirmation not match'
    });
  }

  if (password.length < 5) {
    return res.status(400).send({
      error: 'password too short'
    });
  }

  User.findOne({email: req.body.email}).exec()
    .then((user) => {
      if (!user) {
        return Promise.resolve();
      }
      return Promise.reject({error: 'User already exist!'});
    })
    .then(() => {
      var saltRounds = 13;
      return bcrypt.hashSync(password, saltRounds);
    })
    .then((hashedPassword) => {
      const user = new User({email, password: hashedPassword});

      return new Promise((resolve, reject) => {
        user.validate((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(user);
        });
      });
    })
    .then((user) => {
      user.save();

      const options = {
        expiresIn: 15 * 60 * 1000 // 15 minutes
      };

      const token = jwt.sign({
        email: user.email,
        password: new String(user.password),
      }, JWT_SECRET, options);

      return Promise.resolve({token});
    })
    .then((response) => {
      res.status(201).send(response).end();
    })
    .catch((error) => {
      res.status(400).send(error).end();
    });
};

module.exports = signup;