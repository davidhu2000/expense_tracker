/* globals jest */

jest.mock('../actions/session_actions');
const SessionActions = require('../actions/session_actions');

import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import TestUtils from 'react-addons-test-utils';
import SessionForm from '../components/session_form';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';

const user = {
  username: 'testUser',
  password: 'password'
};

const reducer = (oldState, action) => ({ session: { currentUser: null } });
const store = createStore(reducer, applyMiddleware(thunk));

describe('Session Form', () => {
  let formNode;

  beforeEach(() => {
    SessionActions.login = jest.fn(user => dispatch => {}),
    SessionActions.signup = jest.fn(user => dispatch => {})
  });

  describe('sign up user', () => {
    beforeEach(() => {

      const root = (
        <Provider store={store}>
          <SessionForm router={ { location: {pathname: '/signup'} } }/>
        </Provider>
      );

      formNode = document.createElement('div');
      ReactDOM.render(root, formNode);
    });

    it('renders 3 input fields', () => {
      const inputNodes = formNode.querySelectorAll('input');

      expect(inputNodes).toHaveLength(4);
    });

    it('triggers the sign up action when submitted', () => {
      const form = formNode.querySelector('form');
      TestUtils.Simulate.submit(form);

      expect(SessionActions.signup).toBeCalled();
    });
  });

  describe('login user', () => {
    beforeEach(() => {
      const root = (
        <Provider store={store}>
          <SessionForm router={ { location: { pathname: '/login'}} }/>
        </Provider>
      );

      formNode = document.createElement('div');
      ReactDOM.render(root, formNode);
    });

    it('renders 2 input fields', () => {
      const inputNodes = formNode.querySelectorAll('input');

      expect(inputNodes).toHaveLength(3);
    });

    it('triggers the login action when submitted', () => {
      const form = formNode.querySelector('form');
      TestUtils.Simulate.submit(form);

      expect(SessionActions.login).toBeCalled();
    });
  });
});
