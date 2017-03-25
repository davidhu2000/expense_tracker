import React from 'react';
import moment from 'moment';
import { values } from 'lodash';

import WeeklyReport from './weekly_report';
import CustomReport from './custom_report';

class Reports extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weeklyReport: false
    }
  }

  componentDidMount() {
    this.props.fetchExpenses();
    this.renderReport();
  }

  renderReport() {
    if(this.state.weeklyReport) {
      return (
        <WeeklyReport />
      )
    } else {
      return (
        <CustomReport />
      )
    }
  }

  toggleReport() {
    this.setState({
      weeklyReport: !this.state.weeklyReport
    })
  }

  render() {
    return (
      <div>
        <h1>Reports</h1>
        <button onClick={this.toggleReport.bind(this)}>
          {this.state.weeklyReport ? 'Custom Report' : 'Weekly Report'}
        </button>
        { this.renderReport() }
      </div>
    );
  }
}

export default Reports;
