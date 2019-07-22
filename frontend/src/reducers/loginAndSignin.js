import { LOGIN_AND_SIGNIN, LOGIN_AND_SIGNIN_FAILED, LOGOUT } from '../actionTypes';

const initialState = {
  username: localStorage.getItem('username') || null,
  userId: localStorage.getItem('id') || null,
  message: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AND_SIGNIN: {
      const { _id, username } = action.payload;

      return {
        ...state,
        message: null,
        userId: _id,
        username,
      }
    };

    case LOGIN_AND_SIGNIN_FAILED: {
      const { message } = action.payload;
      return { ...state, message }
    };

    case LOGOUT: {
      return {
        id: null,
        username: null,
        message: null
      }
    }

    default:
      return state;
  }
}
