import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app.jsx';

import SessionForm from './session_form';

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

           </Route>

           <Route path='/login' component={ SessionForm } />
           <Route path='/signup' component={ SessionForm } />

         </Route>

       </Router>
    </Provider>
  );

};

export default Root;
