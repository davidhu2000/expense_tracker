/* globals jest */

import {
  RECEIVE_EXPENSES,
  RECEIVE_EXPENSE,
  DELETE_EXPENSE,
  receiveExpenses,
  receiveExpense,
  deleteExpense,
  fetchExpenses,
  fetchExpense,
  createExpense,
  updateExpense,
  removeExpense
} from '../actions/expenses_actions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('expenses actions', () => {
  describe('expenses constants', () => {
    it('should contain a RECEIVE_EXPENSES constant', () => {
      expect(RECEIVE_EXPENSES).toEqual('RECEIVE_EXPENSES');
    });

    it('should contain a RECEIVE_EXPENSE constant', () => {
      expect(RECEIVE_EXPENSE).toEqual('RECEIVE_EXPENSE');
    });

    it('should contain a DELETE_EXPENSE constant', () => {
      expect(DELETE_EXPENSE).toEqual('DELETE_EXPENSE');
    });
  });

  describe('receiveExpenses', () => {
    it('should export a receiveExpenses function', () => {
      expect(typeof receiveExpenses).toEqual('function');
    });
  });

  describe('receiveExpense', () => {
    it('should export a receiveExpense function', () => {
      expect(typeof receiveExpense).toEqual('function');
    });
  });

  describe('deleteExpense', () => {
    it('should export a deleteExpense function', () => {
      expect(typeof deleteExpense).toEqual('function');
    });
  });

  describe('thunks', () => {
    let ExpensesUtil, store;

    beforeEach(() => {
      ExpensesUtil = require('../util/expenses_util');
      store = mockStore({
        expenses: {}
      });
    });

    describe('fetchExpenses', () => {
      it('dispatches RECEIVE_EXPENSES', () => {
        const expenses = {1: {}, 2: {}};
        ExpensesUtil.fetchExpenses = jest.fn(() => {
          return Promise.resolve(expenses);
        });

        const expectedActions = [{type: 'RECEIVE_EXPENSES', expenses}];

        return store.dispatch(fetchExpenses()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('fetchExpense', () => {
      it('dispatches RECEIVE_EXPENSE', () => {
        const expense = {};
        ExpensesUtil.fetchExpense = jest.fn((id) => {
          return Promise.resolve(expense);
        });

        const expectedActions = [{type: 'RECEIVE_EXPENSE', expense}];

        return store.dispatch(fetchExpense(1)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('deleteExpense', () => {
      it('dispatches DELETE_EXPENSE', () => {
        const expense = {};
        ExpensesUtil.deleteExpense = jest.fn((id) => {
          return Promise.resolve(expense);
        });

        const expectedActions = [{type: 'DELETE_EXPENSE'}];

        return store.dispatch(deleteExpense(expense)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('createExpense', () => {
      it('dispatches RECEIVE_EXPENSE', () => {
        const expense = {};
        ExpensesUtil.createExpense = jest.fn((expense) => {
          return Promise.resolve(expense);
        });

        const expectedActions = [{type: 'RECEIVE_EXPENSE', expense}];

        return store.dispatch(createExpense(expense)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('updateExpense', () => {
      it('dispatches RECEIVE_EXPENSE', () => {
        const expense = {};
        ExpensesUtil.updateExpense = jest.fn((expense) => {
          return Promise.resolve(expense);
        });

        const expectedActions = [{type: 'RECEIVE_EXPENSE', expense}];

        return store.dispatch(updateExpense(expense)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

  });
});
