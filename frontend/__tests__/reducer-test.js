/* globals jest */

import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import sessionReducer from '../reducers/session_reducer';

describe('rootReducer', () => {
  let store;

  beforeAll(() => {
    store = createStore(rootReducer);
  });

  it('exports a function', () => {
    expect(typeof rootReducer).toEqual('function');
  });

  it('includes the sessionReducer with the key session', () => {
    const currentUser = {
      id: 1,
      username: 'Gig'
    };

    const action = {
      type: "RECEIVE_USER",
      currentUser
    };

    store.dispatch(action);

    expect(store.getState().session)
      .toEqual(sessionReducer({}, action))
  })
});

describe('sessionReducer', () => {
  let store;
  beforeAll(() => {
    store = createStore(rootReducer);
  });

  it('exports a function', () => {
    expect(typeof sessionReducer).toEqual('function');
  });

  describe('should handle RECEIVE_USER action', () => {
    let currentUser, action;

    beforeAll(() => {
      currentUser = { id: 1, username: 'Test' };
      action = {
        type: "RECEIVE_USER",
        currentUser,
        errors: []
      }
    });

    it('should update the state with currentUser', () => {
      const state = sessionReducer(undefined, action);
      expect(state.currentUser).toEqual(currentUser);
    });

    it('should not modify the old state', () => {
      let oldState = { currentUser: null, errors: [] };
      sessionReducer(oldState, action);
      expect(oldState).toEqual({ currentUser: null, errors: [] });
    })
  });

  describe('should handle RECEIVE_ERRORS and CLEAR_ERRORS', () => {
    let errors, action;

    beforeAll(() => {
      errors = ['Invalid credentials'];
      action = {
        type: 'RECEIVE_ERRORS',
        errors
      }
    });

    it('should update the state with errors', () => {
      const state = sessionReducer(undefined, action);
      expect(state.errors).toEqual(errors);
    });

    it('should not modify the old state', () => {
      let oldState = { currentUser: null, errors: [] };
      sessionReducer(oldState, action);
      expect(oldState).toEqual({ currentUser: null, errors: [] });
    });

    it('should clear the errors', () => {
      let clearErrorAction = {
        type: "CLEAR_ERRORS"
      };

      const state = sessionReducer({
        currentUser: null,
        errors: ['stuff']
      }, clearErrorAction);

      expect(state.errors).toHaveLength(0);
    })
  });
});
