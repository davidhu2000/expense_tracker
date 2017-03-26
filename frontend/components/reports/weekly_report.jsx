import React from 'react';
import moment from 'moment';
import { values } from 'lodash';
import WeeklyReportItem from './weekly_report_item';

class WeeklyReport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weekTotals: {}
    }
  }

  componentDidMount() {
    this.createReport();
  }

  createReport() {
    let weekTotals = {};

    values(this.props.expenses).forEach( expense => {

      let date = moment(expense.expense_date).format("MMDDYYYY")
      let weekNumber = moment(date, "MMDDYYYY").isoWeek();
      let year = moment(date, 'MMDDYYYY').year();

      let key = year + weekNumber / 100;

      if(weekTotals[key]) {
        weekTotals[key] += expense.amount;
      } else {
        weekTotals[key] = expense.amount;
      }
    });

    this.setState({ weekTotals });
  }

  renderReport() {
    return Object.keys(this.state.weekTotals).sort().reverse().map( dateKey => {
      return (
        <WeeklyReportItem
          key={dateKey}
          dateKey={dateKey}
          totalExpense={this.state.weekTotals[dateKey]} />
      );
    })
  }

  render() {

    return (
      <div>
        <h3>Weekly Report</h3>
        <table>
          <tbody>
            <tr>
              <th>Year</th>
              <th>Week Number</th>
              <th>Total Expense</th>
            </tr>
            {this.renderReport()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default WeeklyReport;
