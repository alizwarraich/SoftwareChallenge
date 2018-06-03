var mockery = require('mockery')
var sinon = require('sinon');
var expect = require('chai').expect;
var signup = require('./signup');
var User = require('../../models/User');

describe('(Route) signup', () => {
  it('should send error when req.body is empty or undefined', () => {
    const req = {};
    const res = {send: sinon.spy()};

    signup(req, res);

    expect(res.send.calledWith({
      error: 'body cannot be empty'
    })).to.be.true;
  });

  describe('User not existing', () => {
    let findOne;

    before(() => {
      const mockFindOne = {
        exec: function () {
          return new Promise((resolve, reject) => {
            return reject('notexist');
          });
        }
      };
      sinon.stub(User, 'findOne').returns(mockFindOne);
    });

    it('should create new User and call validate', () => {
      const username ='imranariffin', password = 'password', confirmPassword = 'password';
      const req = {body: {username, password, confirmPassword}};
      const res = {send: sinon.spy()};

      signup(req, res);

      expect(res.send.calledWith({
        error: ''
      }));
    });
  });

  // describe('User existing', () => {
  //   let findOne;
  //
  //   before(() => {
  //     const mockFindOne = {
  //       exec: function () {
  //         return new Promise((resolve) => {
  //           return resolve('someUser');
  //         });
  //       }
  //     };
  //     sinon.stub(User, 'findOne').returns(mockFindOne);
  //   });
  //
  //   it('should send error', () => {
  //     const username ='imranariffin', password = 'password', confirmPassword = 'password';
  //     const req = {body: {username, password, confirmPassword}};
  //     const res = {send: sinon.spy()};
  //
  //     signup(req, res);
  //
  //     expect(res.send.calledWith({
  //       error: ''
  //     }));
  //   });
  // });
});

