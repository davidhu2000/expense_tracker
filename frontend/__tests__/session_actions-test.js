/* globals jest */

import {
  RECEIVE_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  receiveUser,
  receiveErrors,
  clearErrors
} from '../actions/session_actions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('session actions', () => {
  describe('session constants', () => {
    it('should contain a RECEIVE_USER constant', () => {
      expect(RECEIVE_USER).toEqual('RECEIVE_USER');
    });

    it('should contain a RECEIVE_ERRORS constant', () => {
      expect(RECEIVE_ERRORS).toEqual('RECEIVE_ERRORS');
    });

    it('should contain a CLEAR_ERRORS constant', () => {
      expect(CLEAR_ERRORS).toEqual('CLEAR_ERRORS');
    });
  });

  describe('thunks', () => {
    let SessionApiUtil, store;

    beforeEach(() => {
      SessionApiUtil = require('../util/session_api_util');
      store = mockStore({ session: {
        currentUser: null,
        errors: []
      } });
    });

    describe('receiveUser', () => {
      it('should export a receiveUser function', () => {
        expect(typeof receiveUser).toEqual('function');
      });

      it('dispatches RECEIVE_USER when user logs in', () => {
        const currentUser = { username: 'jest', password: 'password' };
        SessionApiUtil.login = jest.fn(() => (
          Promise.resolve(currentUser)
        ));
        const expectedActions = [{ type: "RECEIVE_USER", currentUser }];

        return store.dispatch(login(currentUser)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });

      it('dispatches RECEIVE_USER when user signs in', () => {
        const currentUser = { username: 'jest', password: 'password' };
        SessionApiUtil.signup = jest.fn(() => (
          Promise.resolve(currentUser)
        ));
        const expectedActions = [{ type: "RECEIVE_USER", currentUser }];

        return store.dispatch(signup(currentUser)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });

      it('dispatches RECEIVE_USER when user logs out', () => {
        SessionApiUtil.login = jest.fn(() => (
          Promise.resolve()
        ));
        const expectedActions = [{ type: "RECEIVE_USER", currentUser: null }];

        return store.dispatch(logout()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('receiveErrors', () => {
      it('should export a receiveErrors function', () => {
        expect(typeof receiveErrors).toEqual('function');
      });
    });

    describe('clearErrors', () => {
      it('should export a clearErrors function', () => {
        expect(typeof clearErrors).toEqual('function');
      });
    });

  });
});
