import React from 'react';

class WeeklyReportItem extends React.Component {

  render() {
    let [year, week] = this.props.dateKey.split('.');
    if(week.toString().length === 1) {
      week *= 10;
    }

    return (
      <tr>
        <td>{year}</td>
        <td>{week}</td>
        <td>${this.props.totalExpense.toFixed(2)}</td>
      </tr>
    )
  }
}

export default WeeklyReportItem;
