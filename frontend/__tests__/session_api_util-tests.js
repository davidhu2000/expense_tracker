/* globals jest */

import {
  login,
  signup,
  logout
} from '../util/session_api_util';

describe('the api util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
    const user = { username: 'jest', password: 'password' };
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('login makes request and returns an ajax promise', () => {
    const returnValue = login(user);
    expect($.ajax).toBeCalled();

    const ajaxCall = $.ajax.mock.calls[0][0];
    expect(ajaxCall.url).toEqual('api/session');
    expect(ajaxCall.type || ajaxCall.method).toMatch(/post/i);
    expect(ajaxCall.data).toEqual({ user });
    expect(returnValue).toEqual("ajax promise");
  });

  it('signup makes request and returns an ajax promise', () => {
    const returnValue = signup(user);
    expect($.ajax).toBeCalled();

    const ajaxCall = $.ajax.mock.calls[0][0];
    expect(ajaxCall.url).toEqual('api/users');
    expect(ajaxCall.type || ajaxCall.method).toMatch(/post/i);
    expect(ajaxCall.data).toEqual({ user });
    expect(returnValue).toEqual("ajax promise");
  });

  it('logut makes request and returns an ajax promise', () => {
    const returnValue = logout();
    expect($.ajax).toBeCalled();

    const ajaxCall = $.ajax.mock.calls[0][0];
    expect(ajaxCall.url).toEqual('api/session');
    expect(ajaxCall.type || ajaxCall.method).toMatch(/delete/i);
    expect(returnValue).toEqual("ajax promise");
  });

});
