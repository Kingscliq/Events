import { SIGN_UP, SIGN_OUT, SIGN_IN } from "./types";
import client from "../../api/api-client";
// import { AiOutlineConsoleSql } from "react-icons/ai";

export const signUp = (data) => async (dispatch) => {
  try {
    console.log(data);
    const res = await client.post(
      "https://confirmaxion-api.herokuapp.com/users/register",
      data
    );
    console.log("registration Successful");
    console.log(res.data);
    dispatch({ type: SIGN_UP, payload: res.data.data });
  } catch (err) {
    console.log(err.response);
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};
