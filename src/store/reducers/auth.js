import {
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  SET_ALERT,
  CLEAR_ALERT,
  SET_LOADING,
  SHOW_VERIFICATION_NOTICE,
  CLEAR_LOADING,
} from "../actions/types";
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  showVerificationNotice: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SHOW_VERIFICATION_NOTICE:
      return {
        ...state,
        showVerificationNotice: true,
      };
    default:
      return state;
  }
};
