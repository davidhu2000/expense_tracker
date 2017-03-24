import * as ExpensesUtil from '../util/expenses_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const receiveExpenses = expenses => ({
  type: RECEIVE_EXPENSES,
  expenses
});

export const receiveExpense = expense => ({
  type: RECEIVE_EXPENSE,
  expense
});

export const deleteExpense = () => ({
  type: DELETE_EXPENSE
});

export const fetchExpenses = () => dispatch => (
  ExpensesUtil.fetchExpenses()
    .then(
      expenses => dispatch(receiveExpenses(expenses)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const fetchExpense = id => dispatch => (
  ExpensesUtil.fetchExpense(id)
    .then(
      expense => dispatch(receiveExpense(expense)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const createExpense = expense => dispatch => (
  APIUtil.createExpense(expense)
    .then(
     expense => dispatch(receiveExpense(expense)),
     err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const updateExpense = data => dispatch => (
  APIUtil.updateExpense(expense)
    .then(
     expense => dispatch(receiveExpense(expense)),
     err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const removeExpense = id => dispatch => (
  APIUtil.deleteExpense(id)
    .then(
     expense => dispatch(deleteExpense(expense)),
     err => dispatch(receiveErrors(err.responseJSON))
    )
);
