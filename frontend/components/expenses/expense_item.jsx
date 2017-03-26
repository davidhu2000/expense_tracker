import React from 'react';
const moment =require('moment');

class ExpenseItem extends React.Component {

  renderButtons() {
    if(this.props.removeExpense) {
      return (
        <td>
          <button onClick={ this.props.update }>Update</button>
          <button onClick={ () => this.props.removeExpense(this.props.expense.id)}>Delete</button>
        </td>
      );
    }
  }

  render() {

    return (
      <tr>
        <td>{moment(this.props.expense.expense_date).format('MM/DD/YYYY')}</td>
        <td>{this.props.expense.description}</td>
        <td>${this.props.expense.amount.toFixed(2)}</td>
        {this.renderButtons()}
      </tr>
    )
  }
}

export default ExpenseItem;
