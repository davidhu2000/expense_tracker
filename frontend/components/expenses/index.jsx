import React from 'react';
import { connect } from 'react-redux';
import Expenses from './expenses.jsx';
import { values } from 'lodash';

import {
  fetchExpenses,
  fetchExpense,
  createExpense,
  updateExpense,
  removeExpense } from '../../actions/expenses_actions';

const mapStateToProps = ({ expenses }, ownProps) => ({
  expenses: values(expenses)
});

const mapDispatchToProps = dispatch => ({
  fetchExpenses: () => dispatch(fetchExpenses()),
  fetchExpense:  id => dispatch(fetchExpense(id)),
  createExpense: expense => dispatch(createExpense(expense)),
  updateExpense: expense => dispatch(updateExpense(expense)),
  removeExpense: id => dispatch(removeExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses);
