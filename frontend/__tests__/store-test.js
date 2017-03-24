/* globals jest */

jest.mock('../reducers/root_reducer', () => {
  return jest.fn((oldState, action) => ({
    expenses: { 1: { id: 1, description: "Some Charge", amount: 29.99 } }
  }));
});

const rootReducer = require('../reducers/root_reducer');

import configureStore from '../store/store';

describe('Store', () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  afterEach(() => {
    rootReducer.mockClear();
  });

  it('should export a configureStore function', () => {
    expect(typeof configureStore).toEqual('function');
  });

  it('the exported function should create a store when invoked', () => {
    expect(store.getState()).toEqual({
      expenses: { 1: { id: 1, description: "Some Charge", amount: 29.99 } }
    });
  });

  it('passes dispatched objects the the reducer', () => {
    store.dispatch({ type: "RECEIVE_EXPENSE" });

    expect(rootReducer).toHaveBeenCalledTimes(2);
  });

  it('creates a store with thunk middleware', () => {
    store.dispatch(dispatch => {});

    expect(rootReducer).toHaveBeenCalledTimes(1);
  });
});
