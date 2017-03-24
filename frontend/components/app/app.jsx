import React from 'react';

import Navbar from '../navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._redirectUnlessLoggedIn();
  }

  componentDidUpdate() {
    this._redirectUnlessLoggedIn();
  }

  _redirectUnlessLoggedIn() {
    if(!this.props.loggedIn) {
      this.props.router.replace('/login');
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        { this.props.children }
      </div>
    )
  }
}

export default App;
