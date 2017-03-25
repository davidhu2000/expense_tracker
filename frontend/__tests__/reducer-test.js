/* globals jest */

import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import sessionReducer from '../reducers/session_reducer';
import expensesReducer from '../reducers/expenses_reducer';

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
      user: currentUser
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
        user: currentUser,
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

describe('expensesReducer', () => {
  let store, expenses, expense1, expense2, action;
  beforeAll(() => {
    store = createStore(rootReducer);
    expense1 = { id: 1, amount: 19.99, description: 'test', expense_date: '12/12/12'};
    expense2 = { id: 2, amount: 29.99, description: 'test2', expense_date: '12/10/12'};
    expenses = { 1: expense1, 2: expense2 };
  });

  it('exports a function', () => {
    expect(typeof expensesReducer).toEqual('function');
  });

  describe('should handle RECEIVE_EXPENSES action', () => {
    let action;

    beforeAll(() => {
      action = {
        type: "RECEIVE_EXPENSES",
        expenses
      }
    })

    it('should update the state with expenses', () => {
      const state = expensesReducer(undefined, action);
      expect(state).toEqual(expenses);
    });

    it('should not modify the old state', () => {
      let oldState = {};
      expensesReducer(oldState, action);
      expect(oldState).toEqual({});
    })
  });

  describe('should handle RECEIVE_EXPENSE action', () => {
    let action;

    beforeAll(() => {
      action = {
        type: "RECEIVE_EXPENSE",
        expense: expense1
      }
    });

    it('should update the state with expense', () => {
      const state = expensesReducer({}, action);
      expect(state[1]).toBeDefined();
    });

    it('should not modify the old state', () => {
      let oldState = {};
      expensesReducer(oldState, action);
      expect(oldState).toEqual({});
    })
  });

  describe('should handle DELETE_EXPENSE action', () => {
    let action;

    beforeAll(() => {
      action = {
        type: "DELETE_EXPENSE",
        expense: expense1
      }
    })
    it('should remove expense from state', () => {
      const state = expensesReducer(expenses, action);
      expect(state[1]).toBeUndefined();
    });

    it('should not modify the old state', () => {
      let oldState = expenses;
      expensesReducer(oldState, action);
      expect(oldState).toEqual(expenses);
    });
  });
});
