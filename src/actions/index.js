import {
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  RESET_SERVER_ERROR,
} from "./types";
import client from "../api/api-client";

// ++++++++++++++ REGISTRATION ACTION ++++++++++++++++=
export const signUp = (data) => async (dispatch) => {
  dispatch({ type: RESET_SERVER_ERROR });
  try {
    console.log(data);
    const res = await client.post("/users/register", data);
    if (res.data.success) {
      dispatch({ type: REGISTRATION_SUCCESS, payload: res.data.message });
    }
    await console.log(res.data);
    dispatch({ type: SIGN_UP, payload: res.data.data });
  } catch (err) {
    // console.log(err.response.status);
    if (err.response.data.errors[0].email) {
      dispatch({
        type: REGISTRATION_FAILED,
        payload: err.response.data.errors[0].email,
      });
    } else {
      dispatch({
        type: REGISTRATION_FAILED,
        payload: "Error Registering User, Try Again!",
      });
    }
  }
};

// ++++++++++++++ LOGIN ACTION ++++++++++++++++=
export const signIn = (data) => async (dispatch) => {
  try {
    const res = await client.post("/users/login", data);
    await console.log("Login Successful");
    await console.log(res.headers);
    dispatch({ type: SIGN_IN, payload: res.data.data });
  } catch (err) {
    console.log(err.response);
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
