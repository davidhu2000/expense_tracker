import React from 'react';
import ExpenseList from '../expenses/expense_list';
import moment from 'moment';
import { values } from 'lodash';

class CustomReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: '',
      endDate: ''
    }

  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  filterExpenses() {
    if(this.state.startDate.length > 0 && this.state.endDate.length > 0) {
      return values(this.props.expenses).filter( expense => (
        moment(expense.expense_date).isBetween(this.state.startDate, this.state.endDate)
      ));
    } else {
      return values(this.props.expenses);
    }
  }

  render() {

    return (
      <div>
        <h3>Custom Report</h3>

        <span>
          Start Date:
          <input
            type='date'
            value={this.state.startDate}
            onChange={this.update("startDate")} />
        </span>

        <span>
          End Date:
          <input
            type='date'
            value={this.state.endDate}
            onChange={this.update("endDate")} />
        </span>

        <br />
        <br />

        <ExpenseList expenses={this.filterExpenses()} />
      </div>

    )
  }
}

export default CustomReport;
