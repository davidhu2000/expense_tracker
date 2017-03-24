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

export const deleteExpense = expense => ({
  type: DELETE_EXPENSE,
  expense
});

export const fetchExpenses = () => dispatch => (
  ExpensesUtil.fetchExpenses()
    .then(
      res => dispatch(receiveExpenses(res))
    ).catch(
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const fetchExpense = id => dispatch => (
  ExpensesUtil.fetchExpense(id)
    .then(
      res => dispatch(receiveExpense(res))
    ).catch(
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const createExpense = expense => dispatch => (
  ExpensesUtil.createExpense(expense)
    .then(
      res => dispatch(receiveExpense(res))
    ).catch(
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const updateExpense = expense => dispatch => (
  ExpensesUtil.updateExpense(expense)
    .then(
      res => dispatch(receiveExpense(res)),
    ).catch(
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const removeExpense = id => dispatch => (
  ExpensesUtil.deleteExpense(id)
    .then(
      res => dispatch(deleteExpense(res))
    ).catch(
      err => dispatch(receiveErrors(err.responseJSON))
    )
);
