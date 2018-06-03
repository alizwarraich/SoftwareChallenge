var bcrypt = require('bcrypt');
var _ = require('lodash');
var User = require('../../models/User');

var signup = function(req, res) {
  if (!req.body || _.isEmpty(req.body)) {
    return res.send({
      error: 'body cannot be empty'
    });
  }

  const {email, password, confirmPassword} = req.body;

  if (password !== confirmPassword) {
    return res.send({
      error: 'password confirmation not match'
    });
  }

  if (password.length < 5) {
    return res.send({
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
      var hashedPassword = bcrypt.hashSync(password, saltRounds);
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
      res.status(201).send(user).end();
    })
    .catch((error) => {
      res.status(400).send(error).end();
    });
};

module.exports = signup;