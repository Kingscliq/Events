import { SIGN_IN, SIGN_OUT } from "./types";
import client from "../api/api-client";
// import { AiOutlineConsoleSql } from "react-icons/ai";

export const signIn = (data) => async (dispatch) => {
  try {
    console.log(data);
    const res = await client.post(
      "https://confirmaxion-api.herokuapp.com/users/register",
      data
    );
    await console.log("registration Successful");
    await console.log(res.data);
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
