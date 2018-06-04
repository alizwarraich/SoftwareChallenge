import sinon from 'sinon';
import {expect} from 'chai';
import auth from '../../../utils/auth';
import {LOGIN_SUCCESS} from '../../actions/login/login';
import persistToken from './persistToken';

describe('(Middleware) persistToken', () => {
  it('call save token when action is `LOGIN_SUCCESS`', () => {
    const mockAction = {type: LOGIN_SUCCESS, data: {token: 'token'}};
    const nextSpy = sinon.spy();
    const authMock = sinon.mock(auth);

    authMock.expects('saveToken').once().calledWith(mockAction.data.token);

    persistToken({})(nextSpy)(mockAction);

    authMock.verify();

  });

  it('should always call next on action', () => {
    const mockAction = {type: LOGIN_SUCCESS, data: {token: 'token'}};
    const nextSpy = sinon.spy();
    const saveTokenStub = sinon.stub(auth, 'saveToken');

    saveTokenStub.withArgs(mockAction.data.token).calledOnce;

    persistToken({})(nextSpy)(mockAction);
    expect(nextSpy.calledWith(mockAction));

    mockAction.type = 'someAction';

    persistToken({})(nextSpy)(mockAction);
    expect(nextSpy.calledWith(mockAction));
  });
});