import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(
    res => dispatch(receiveUser(res)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(
    res => dispatch(receiveUser(null)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(
    res => dispatch(receiveUser(res)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);
