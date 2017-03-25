import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app';

import SessionForm from './session_form';
import Expenses from './expenses';
import Reports from './reports';

const Root = ({ store }) => {

  const _redirect = (nextState, replace) => {
    if(window.currentUser) {
      replace('/app');
    } else {
      replace('/login');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/'>
          <IndexRoute onEnter={ _redirect } />

          <Route path='/app' component={ App }>
            <IndexRoute component={ Expenses } />
            <Route path='/expenses' component={ Expenses } />
            <Route path='/reports' component={ Reports } />
          </Route>

          <Route path='/login' component={ SessionForm } />
          <Route path='/signup' component={ SessionForm } />

        </Route>

      </Router>
    </Provider>
  );

};

export default Root;
