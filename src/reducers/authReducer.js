import {
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
  RESET_SERVER_ERROR,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userInfo: null,
  registrationSuccess: null,
  registrationFailed: null,
  regSuccessMsg: "",
  regFailedMsg: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userInfo: action.payload };
    case SIGN_UP:
      return { ...state, registrationSuccess: true, userInfo: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: null, userInfo: null };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        regSuccessMsg: action.payload,
        registrationSuccess: true,
      };
    case REGISTRATION_FAILED:
      return {
        ...state,
        regFailedMsg: action.payload,
        registrationFailed: true,
      };
    case RESET_SERVER_ERROR:
      return {
        ...state,
        regFailedMsg: null,
        regSuccessMsg: null,
        registrationSuccess: false,
        registrationFailed: false,
      };
    default:
      return state;
  }
};
