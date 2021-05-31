import { SIGN_IN, SIGN_OUT } from "./types";

const INITIAL_STATE = {
  isSignedIn: null,
  userInfo: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userInfo: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: null, userInfo: null };
    default:
      return state;
  }
};
