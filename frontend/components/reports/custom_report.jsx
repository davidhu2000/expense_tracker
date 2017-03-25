import React from 'react';

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

    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>Custom Report</div>

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
            value={this.state.startDate}
            onChange={this.update("endDate")} />
        </span>

        <br />
        <br />

        <table>
          <tbody>
            
          </tbody>
        </table>
      </div>

    )
  }
}

export default CustomReport;
