import {
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  SET_ALERT,
  CLEAR_ALERT,
} from "./types";

import AuthService from "../../services/auth.service";

// Register Actions
export const register = formData => dispatch => {
  try {
    const res = await AuthService.register(formData);

    dispatch({ type: REGISTER_SUCCESS });
    dispatch({
      type: SET_ALERT,
      payload: res.data.msg,
    });
    // REMOVE ALERT AFTER 5 SECS
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT, payload: id });
    }, 5000);
  } catch (error) {
    dispatch({ type: REGISTER_FAIL });
    dispatch({
      type: SET_ALERT,
      payload: error.response.msg,
    });
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT, payload: id });
    }, 5000);
  }
};

// Login Actions
export const login = formData => dispatch => {
  try {
    const res = await AuthService.login(formData);
    dispatch({ type: LOGIN_SUCCESS, payload: { user: res.data } });
    dispatch({ type: SET_ALERT, payload: "Login SuccessFul" });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
    dispatch({ type: SET_ALERT, payload: error.response.msg });
  }
};

// Logout Action
export const logout = () => dispatch => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
