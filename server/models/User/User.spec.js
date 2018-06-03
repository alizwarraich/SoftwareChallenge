var expect = require('chai').expect;
var User = require('./User');

describe('(Model) User', () => {

  it('should be invalid if email is empty or missing', (done) => {
    const user = new User({
      password: 'password',
    });
    user.validate((err) => {
      expect(err.errors.email).to.exist;
      done();
    });
  });

  it('should be invalid if password is empty or missing', (done) => {
    const user = new User({
      email: 'someEmail',
    });
    user.validate((err) => {
      expect(err.errors.password).to.exist;
      done();
    });
  });

  describe('`findOne`', () => {
    it('should be exported as a function', () => {
      expect(User.findOne).to.be.a('function');
    });

    it('should return a promise', () => {
      const returned = User.findOne();

      expect(returned.exec).to.be.a('function');

      const exec = returned.exec();

      expect(exec.then).to.be.a('function');
      expect(exec.catch).to.be.a('function');
    });
  });
});