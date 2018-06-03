var mockery = require('mockery')
var sinon = require('sinon');
var expect = require('chai').expect;
var signup = require('./signup');
var User = require('../../models/User');

describe('(Route) signup', () => {
  it('', () => {});

  // it('should send error when req.body is empty or undefined', () => {
  //   const req = {};
  //   const res = {send: sinon.spy(), status: sinon.spy()};
  //
  //   signup(req, res);
  //
  //   expect(res.send.calledWith({
  //     error: 'body cannot be empty'
  //   })).to.be.true;
  // });

  // describe('User not existing', () => {
  //   let findOne;
  //
  //   before(() => {
  //     const mockFindOne = {
  //       exec: function () {
  //         return new Promise((resolve, reject) => {
  //           return reject(false);
  //         });
  //       }
  //     };
  //     findOne = sinon.stub(User, 'findOne').returns(mockFindOne);
  //   });
  //
  //   it('should create new User and call validate', () => {
  //     const
  //       username ='nonexisting',
  //       email = 'nonexisting@gmail.com',
  //       password = 'password',
  //       confirmPassword = 'password';
  //     const
  //       req = {body: {username, email, password, confirmPassword}},
  //       res = {send: sinon.spy(), status: sinon.spy()};
  //
  //     signup(req, res);
  //
  //     expect(res.send.called).to.be.true;
  //     // expect(res.status.calledWith(201)).to.be.true;
  //   });
  //
  //   after(() => {
  //     findOne.restore();
  //   });
  // });

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
  //     findOne = sinon.stub(User, 'findOne').returns(mockFindOne);
  //   });
  //
  //   it('should send error', () => {
  //     const username ='imranariffin', password = 'password', confirmPassword = 'password';
  //     const req = {body: {username, password, confirmPassword}};
  //     const res = {send: sinon.spy(), status: sinon.spy()};
  //
  //     signup(req, res);
  //
  //     expect(res.send.calledWith({
  //       error: ''
  //     }));
  //   });
  //
  //   after(() => {
  //     findOne.restore();
  //   });
  // });
});

