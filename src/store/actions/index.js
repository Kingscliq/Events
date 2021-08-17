import client from '../../api/api-client';
import {
  REGISTER_SUCCESS,
  SET_ALERT,
  SET_LOADING,
  SHOW_VERIFICATION_NOTICE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_LOADING,
  SET_USER,
  CLEAR_USER,
} from './types';
import { setAlert, clearAlert } from './alert';

export const register = data => async dispatch => {
  dispatch({ type: SET_LOADING });
  try {
    const res = await client.post('users/register', data);
    console.log('Registration Successful');
    console.log(res.data);
    dispatch({ type: REGISTER_SUCCESS });
    dispatch({ type: SHOW_VERIFICATION_NOTICE });
    setAlert('Registration Successful', 'alert-success');
    setTimeout(clearAlert(), 5000);
  } catch (err) {
    dispatch({ type: CLEAR_LOADING });
    console.log(err.response);
    setAlert('Sorry! There was an error registering User', 'alert-danger');
  }
};

export const signIn = data => async dispatch => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await client.post('/users/login', data);
    if (res.data.success) {
      console.log(res.headers);
      localStorage.setItem('token', JSON.stringify(res.headers.authorization));
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('isAuthenticated', true);
      console.log(res.data);
      dispatch({ type: CLEAR_LOADING });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: JSON.parse(localStorage.getItem('user')),
      });
      dispatch({ SET_USER, payload: JSON.parse(localStorage.getItem('user')) });
    }
  } catch (error) {
    console.log(error.response);
    if (!error.response) {
      dispatch({ type: LOGIN_FAIL });
      const msg = 'Login Failed, Check your Internet connection';
      const type = 'alert-danger';
      setAlert(msg, type);
    } else {
      console.log(error.response.data.message);
      const msg = await error.response.data.message;
      const type = 'alert-danger';
      dispatch({ type: LOGIN_FAIL });
      // dispatch({ type: SET_ALERT, msg, type });
      setAlert(msg, type);
    }

    dispatch({ type: CLEAR_LOADING });
    localStorage.clear();
  }
};

// ============================= SIGN OUT FUNCTION =====================
// export const signOut = () => {
//   return {
//     type: SIGN_OUT,
//   };
// };
