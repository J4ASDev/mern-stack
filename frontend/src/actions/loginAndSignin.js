import { LOGIN_AND_SIGNIN, LOGIN_AND_SIGNIN_FAILED } from '../actionTypes';
import { createBrowserHistory } from 'history';
import { API } from '../config';

const history = createBrowserHistory();

export const loginAndSignin = (data, actionType) => {
  return async dispatch => {
    try {
      const request = await fetch(`${API.LOCAL}/auth/${actionType}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

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

      history.push('/');
      return dispatch({
        type: LOGIN_AND_SIGNIN,
        payload: { _id, username }
      });
    } catch(err) {
      console.error(err);
    }
  }
};
