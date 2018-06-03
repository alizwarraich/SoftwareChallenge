import {expect} from 'chai';
import {canHaveBody, handleSuccessAndError} from './apiClient';

describe('(util) apiClient', () => {
  describe('canHaveBody', () => {
    it('returns `true` when method is `POST` or `PUT`', () => {
      let config = {method: 'pOst'};
      expect(canHaveBody(config)).to.be.true;

      config = {method: 'pUt'};
      expect(canHaveBody(config)).to.be.true;
    });

    it('returns `false` when method is `GET` or `HEAD`', () => {
      let config = {method: 'gET'};
      expect(canHaveBody(config)).to.be.false;

      config = {method: 'hEAd'};
      expect(canHaveBody(config)).to.be.false;
    });
  });

  describe('handleSuccesAndError', () => {
    it('returns a promise', () => {
      const response = {
        json: () => new Promise(() => ({}))
      };
      const result = handleSuccessAndError(response);

      expect(result.then).to.be.a('function');
      expect(result.catch).to.be.a('function');
    });
  });
});