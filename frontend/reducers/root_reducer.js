import { combineReducers } from 'redux';
import expensesReducer from './expenses_reducer.js';
import sessionReducer from './session_reducer.js';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  session: sessionReducer,
});

export default rootReducer;
