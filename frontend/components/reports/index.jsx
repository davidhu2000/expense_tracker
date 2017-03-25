import React from 'react';
import { connect } from 'react-redux';
import Reports from './reports.jsx';
import { fetchExpenses } from '../../actions/expenses_actions';

const mapStateToProps = ({ expenses}) => ({
  expenses
});

const mapDispatchToProps = dispatch => ({
  fetchExpenses: () => dispatch(fetchExpenses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);
