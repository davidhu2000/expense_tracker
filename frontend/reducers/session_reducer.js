import { merge } from 'lodash';
import {
  RECEIVE_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from "../actions/session_actions.js";

let _defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, _defaultState, {
        currentUser: action.user
      });
    case RECEIVE_ERRORS:
      return merge({}, _defaultState, {
        errors: action.errors
      });
    case CLEAR_ERRORS:
      return merge({}, {
        currentUser: state.user,
        errors: []
      });
    default:
      return state;
  }
};

export default sessionReducer;
