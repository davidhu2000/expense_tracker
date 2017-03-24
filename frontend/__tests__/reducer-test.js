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
})
