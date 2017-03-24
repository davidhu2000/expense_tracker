import React from 'react';

const ExpenseItem = ({expense}) => (
  <tr>
    <td>{expense.expense_date}</td>
    <td>{expense.description}</td>
    <td>${expense.amount}</td>
  </tr>
);

export default ExpenseItem;
