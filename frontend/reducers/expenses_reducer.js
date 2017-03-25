import { merge } from 'lodash';
import {
  RECEIVE_EXPENSES,
  RECEIVE_EXPENSE,
  DELETE_EXPENSE } from "../actions/expenses_actions.js";

let _defaultState = {};

const expensesReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EXPENSES:
      return action.expenses;
    case RECEIVE_EXPENSE:
      return merge({}, state, {
        [action.expense.id]: action.expense
      })
    case DELETE_EXPENSE:
      let newState = merge({}, state);
      delete newState[action.expense.id];
      return newState;
    default:
      return state;
  }
};

export default expensesReducer;
