import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESET,
} from "../actions/loginActions";

const initialState = {
  loading: false,
  login: "",
  errorMessage: "",
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        ...state,
        loading: true,
      });

    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        login: action.payload,
        loading: false,
      });

    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        ...state,
        loading: false,
        errorMessage: action.payload.message,
      });

    case RESET:
      return Object.assign({}, state, {
        ...initialState,
      });

    default:
      return state;
  }
}