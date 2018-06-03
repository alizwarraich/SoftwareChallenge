var _ = require('lodash');
var User = require('../../models/User');

var signup = function(req, res) {
  if (!req.body || _.isEmpty(req.body)) {
    return res.send({
      error: 'body cannot be empty'
    });
  }

  const {username, email, password} = req.body;

  User.findOne({username: req.body.username}).exec()
    .then((user) => {
      if (!user) {
        return Promise.resolve();
      }
      return Promise.reject({error: 'User already exist!'});
    })
    .then(() => {
      const user = new User({username, email, password});

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
      res.status(201).send({}).end();
    })
    .catch((error) => {
      res.status(400).send(error).end();
    });
};

module.exports = signup;