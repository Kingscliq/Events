import { SET_ALERT, CLEAR_ALERT } from "./types";
import {v4 as uuid } from 'uuid'


// set Alert action creators
export const setAlert = (msg, type) => (dispatch) =>{
  const id = uuid()
  dispatch({
  type: SET_ALERT,
  payload: {msg, type, id}
})};

// remove alert action creators
export const clearAlert = (dispatch) => {
  dispatch({
  type: CLEAR_ALERT,
})};
