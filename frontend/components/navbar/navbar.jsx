import React from 'react';

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
          <hr />
        </div>
      );
    } else {
      return <div></div>
    }

  }
}

export default Navbar;
