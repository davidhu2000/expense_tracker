import React from 'react';


class ExpenseForm extends React.Component {
  constructor(props){
    super(props);

    if(props.expense) {
      this.state = props.expense;
    } else {
      this.state = {
        amount: '',
        description: '',
        expense_date: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this); 
  }

  update(field) {
    return e => {
      this.setState({
        [field]: value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render() {
    let buttonVal = this.props.buttonVal;


    return (
      <form onSubmit={this.handleSubmit}>
        <label>{"Date"}</label>
        <input
          type='text'
          value={expense.date}
          placeholder="YYYY-MM-DD"
          onChange={this.update('expense_date')} />

        <label>{"Amount"}</label>
        <input
          type='text'
          value={this.state.amount}
          placeholder='0.00'
          onChange={this.update('amount')} />

        <label>{"Amount"}</label>
        <input
          type='text'
          value={this.state.description}
          placeholder='Wrote something...'
          onChange={this.update('description')} />

        <input
          type="submit"
          value={buttonVal} />

      </form>
    )
  }
}

export default ExpenseItem;
