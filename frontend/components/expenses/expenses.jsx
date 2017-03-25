import React from 'react';
import { withRouter } from 'react-router';

import ExpenseForm from './expense_form';
import ExpenseList from './expense_list';

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

  render() {

    return (
      <div>
        <button onClick={this.toggleForm}>Create Expense</button>
        { this.renderForm() }
        <ExpenseList expenses={this.props.expenses} />
      </div>
    );
  }
}

export default withRouter(Expenses);
