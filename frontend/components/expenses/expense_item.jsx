import React from 'react';
const moment =require('moment');

const ExpenseItem = ({expense, update, removeExpense }) => (
  <tr>
    <td>{moment(expense.expense_date).format('YYYY-MM-DD')}</td>
    <td>{expense.description}</td>
    <td>${expense.amount.toFixed(2)}</td>
    <td>
      <button onClick={ update }>Update</button>
    </td>
     <td>
       <button onClick={ () => removeExpense(expense.id)}>Delete</button>
     </td>
  </tr>
);

export default ExpenseItem;
