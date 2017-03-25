import React from 'react';
import { withRouter } from 'react-router';

import ExpenseItem from './expense_item';
import ExpenseForm from './expense_form';

class Expenses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      expense: null
    }

    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchExpenses();
  }

  toggleForm(expense) {
    if(expense) {
      this.setState({
        showForm: !this.state.showForm,
        expense
      });
    } else {
      this.setState({
        showForm: !this.state.showForm
      })
    }
  }

  renderForm() {
    if(this.state.showForm) {
      let action;
      let buttonVal;
      if(this.state.expense.id) {
        action = this.props.updateExpense;
        buttonVal = 'update';
      } else {
        action = this.props.createExpense;
        buttonVal = 'create';
      }
      return (
        <ExpenseForm
          {...this.state}
          action={action}
          buttonVal={buttonVal}
          toggleForm={this.toggleForm}/>
      );
    }
  }

  renderExpenseItems() {
    if(this.props.expenses && this.props.expenses.length > 0) {
      return this.props.expenses.map( (expense, idx) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          update={() => this.toggleForm(expense)}
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
        <button onClick={this.toggleForm}>Create Expense</button>
        { this.renderForm() }
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
