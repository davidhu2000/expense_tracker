import React from 'react';

const ExpenseItem = ({expense, updateExpense, removeExpense }) => (
  <tr>
    <td>{expense.expense_date}</td>
    <td>{expense.description}</td>
    <td>${expense.amount}</td>
    <td>
      <button onClick={ () => removeExpense(expense.id)}>Delete</button>
    </td>
  </tr>
);

export default ExpenseItem;
