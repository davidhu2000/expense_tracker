import React from 'react';
import moment from 'moment';

class ExpenseForm extends React.Component {
  constructor(props){
    super(props);

    if(props.expense.id) {
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
        [field]: e.target.value
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      amount: '',
      description: '',
      expense_date: ''
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.props.toggleForm();
  }

  render() {
    let buttonVal = this.props.buttonVal;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>{"Date"}</label>
        <input
          type='date'
          value={moment(this.state.expense_date).format('YYYY-MM-DD')}
          placeholder="MM/DD/YYYY"
          onChange={this.update('expense_date')} />

        <br />

        <label>{"Amount"}</label>
        <input
          type='number'
          min="0"
          step="0.01"
          value={this.state.amount}
          placeholder='0.00'
          onChange={this.update('amount')} />

        <br />

        <label>{"Description"}</label>
        <input
          type='text'
          value={this.state.description}
          placeholder='Write something...'
          onChange={this.update('description')} />

        <br />
        <input
          type="submit"
          value={buttonVal} />

      </form>
    )
  }
}

export default ExpenseForm;
