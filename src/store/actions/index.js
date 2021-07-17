import { REGISTER, SIGN_OUT, SIGN_IN } from "./types";
import client from "../../api/api-client";
// import { AiOutlineConsoleSql } from "react-icons/ai";
import { useHistory } from "react-router";

export const register = (data) => async (dispatch) => {
  const history = useHistory();
  try {
    console.log(data);
    const res = await client.post("users/register", data);
    console.log("Registration Successful");
    console.log(res.data);
    history.push("/verify-email");
    dispatch({ type: REGISTER, payload: res.data.data });
  } catch (err) {
    console.log(err.response);
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
export const signIn = async () => {
  try {
    const res = await client.post("/users/login");
    return {
      type: SIGN_IN,
      payload: res.data,
    };
  } catch (error) {}
};
