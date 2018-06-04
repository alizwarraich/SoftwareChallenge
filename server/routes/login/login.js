const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const User = require('../../models/User');

const login = (req, res) => {
  if (!req.body || _.isEmpty(req.body)) {
    return res.status(400).send({
      error: 'body cannot be empty'
    });
  }

  const {email, password} = req.body;

  User.findOne({email}).exec()
    .then((user) => {
      if (!user) {
        return Promise.reject({error: 'User does not exist!'});
      }

      return Promise.resolve(user);
    })
    .then((user) => {
      if(bcrypt.compareSync(password, user.password)) {
        return Promise.resolve(user);
      }
      return Promise.reject({
        error: 'password not match'
      });
    })
    .then((user) => {
      const options = {
        expiresIn: 15 * 60 * 1000 // 15 minutes
      };

      const token = jwt.sign({
        email: user.email,
        password: new String(user.password),
      }, 'secret', options);

      return Promise.resolve({token});
    })
    .then((response) => {
      res.status(200).send(response).end();
    })
    .catch((error) => {
      res.status(400).send(error).end();
    });
};

module.exports = login;