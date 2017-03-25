import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.loggedIn) {
      return (
        <div>
          <h3>Hello { this.props.currentUser.username }</h3>
          <button onClick={this.props.logout}>
            Logout
          </button>
          <br />
          <Link to='/expenses'>Expenses</Link>
          <br />
          <Link to='/reports'>Reports</Link>

          <hr />
        </div>
      );
    } else {
      return <div></div>
    }

  }
}

export default Navbar;
