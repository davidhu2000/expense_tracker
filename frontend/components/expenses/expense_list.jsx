import React from 'react';
import { sortBy } from 'lodash';
import ExpenseItem from './expense_item';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderExpenseItems() {
    if(this.props.expenses && this.props.expenses.length > 0) {
      let sorted = sortBy(this.props.expenses, [obj => obj.expense_date ]).reverse()
      return sorted.map( (expense, idx) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          update={() => this.props.toggleForm(expense)}
          removeExpense={this.props.removeExpense} />
      ));
    } else {
      return (
        <tr>
          <td>
            <h4>
              No Expenses to Show
            </h4>
          </td>
        </tr>
      )
    }
  }
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>{"Date"}</th>
            <th>{"Description"}</th>
            <th>{"Amount"}</th>
          </tr>
          { this.renderExpenseItems() }
        </tbody>
      </table>
    );
  }

}

export default ExpenseList;
