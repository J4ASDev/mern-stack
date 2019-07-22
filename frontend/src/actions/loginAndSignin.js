import { LOGIN_AND_SIGNIN, LOGIN_AND_SIGNIN_FAILED, LOGOUT } from '../actionTypes';
import Fetch from '../libs/Fetch';

export const loginAndSignin = (data, actionType) => {
  return async dispatch => {
    try {
      const request = await Fetch.post(`/auth/${actionType}`, data);

      const status = await request.status;
      const result = await request.json();

      if(status >= 400) {
        const { message } = result;
        return dispatch({
          type: LOGIN_AND_SIGNIN_FAILED,
          payload: { message }
        });
      };

      const { _id, username } = result;

      localStorage.setItem('id', _id);
      localStorage.setItem('username', username);

      return dispatch({
        type: LOGIN_AND_SIGNIN,
        payload: { _id, username }
      });
    } catch(err) {
      return dispatch({ type: LOGIN_AND_SIGNIN_FAILED });
    }
  }
};

export const logOut = history => {
  return async dispatch => {
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    history.replace('/auth');

    return dispatch({ type: LOGOUT })
  }
}
