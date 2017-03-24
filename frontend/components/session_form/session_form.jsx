import React from 'react';
import { withRouter, Link } from 'react-router'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      admin: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this); 
  }

  componentDidMount() {
    this._redirectLoggedIn();
  }

  componentDidUpdate() {
    this._redirectLoggedIn();
  }

  _redirectLoggedIn() {
    if(this.props.loggedIn) {
      this.props.router.replace('/app');
    }
  }

  renderErrors() {
    return (
      <div>
        <ul>
          {this.props.errors.map( (error, idx) => <li key={idx}>{error}</li> ) }
        </ul>
      </div>
    );
  }

  update(field) {
    return e => {

      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

      this.setState({
        [field]: value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let action;

    if(this.props.router.location.pathname === '/signup') {
      action = this.props.signup;
    } else {
      action = this.props.login;
    }

    action(this.state);
  }

  renderAdminCheckbox() {
    if(this.props.router.location.pathname === '/signup') {
      return (
        <div>
          <input
            type="checkbox"
            checked={this.state.admin}
            onChange={this.update('admin')} /> Sign up as admin?
        </div>
      );
    }
  }

  render() {

    let buttonVal = this.props.router.location.pathname.slice(1);
    let title = buttonVal[0].toUpperCase() + buttonVal.slice(1);

    let link = buttonVal === 'signup' ? 'login' : 'signup';

    return (
      <div>
        <h1>{ title }</h1>
        { this.renderErrors() }
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.username}
            placeholder="Username"
            onChange={this.update('username')} />

          <input
            type='password'
            value={this.state.password}
            placeholder='Password'
            onChange={this.update('password')} />

          { this.renderAdminCheckbox() }

          <input
            type="submit"
            value={buttonVal} />

          <Link to={`${link}`}>{link} here</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
