import React from 'react';
import { withRouter } from 'react-router';

import ExpenseItem from './expense_item';

class Expenses extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchExpenses();
  }

  renderExpenseItems() {
    if(this.props.expenses && this.props.expenses.length > 0) {
      return this.props.expenses.map( (expense, idx) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          updateExpense={this.props.updateExpense}
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
      <div>
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
      </div>
    );
  }
}

export default withRouter(Expenses);
