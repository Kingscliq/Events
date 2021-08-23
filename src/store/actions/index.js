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
import { setAlert } from '../../App';

export const register = data => async dispatch => {
  dispatch({ type: SET_LOADING });
  try {
    const res = await client.post('users/register', data);
    console.log('Registration Successful');
    console.log(res.data);
    localStorage.setItem('token', JSON.stringify(res.data.token));
    localStorage.setItem('user', JSON.stringify(res.data.message));
    localStorage.setItem('isAuthenticated', true);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: JSON.parse(localStorage.getItem('user')),
    });
    dispatch({ SET_USER, payload: JSON.parse(localStorage.getItem('user')) });
    setAlert('Registration SuccessFul', 'Redirecting...', 'success');
    // dispatch({ type: SHOW_VERIFICATION_NOTICE });
    // dispatch(setAlert('Registration Successful', 'alert-success'));
    // dispatch(setTimeout(clearAlert(), 5000));
  } catch (err) {
    console.log(err.response);
    // console.log(err.response.data.errors[0]);

    //console.log(msg);
    dispatch(setAlert('alert-danger'));
    setAlert('Registration Failed', err.response.data.errors[0], 'danger');
    dispatch({ type: CLEAR_LOADING });
  }
};

export const signIn = data => async dispatch => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await client.post('/users/login', data);
    if (res.data.success) {
      console.log(res.data);
      localStorage.setItem('token', JSON.stringify(res.data.token));
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('isAuthenticated', true);
      console.log(res.data);
      dispatch({ type: CLEAR_LOADING });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: JSON.parse(localStorage.getItem('user')),
      });
      dispatch({ SET_USER, payload: JSON.parse(localStorage.getItem('user')) });
      setAlert('Authenticated', 'Redirecting...', 'success');
    }
  } catch (error) {
    if (error.response) {
      const msg = await error.response.data.message;
      const type = 'danger';
      dispatch({ type: LOGIN_FAIL });

      localStorage.clear();
      setAlert('Login Failed!', msg, 'danger');
    }
  } finally {
    dispatch({ type: CLEAR_LOADING });
  }
};

// ============================= SIGN OUT FUNCTION =====================
// export const signOut = () => {
//   return {
//     type: SIGN_OUT,
//   };
// };
