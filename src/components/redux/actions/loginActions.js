import axios from "axios";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const RESET = "RESET";

export function loginFunction(username, password) {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
        dispatch({ type: LOGIN_SUCCESS, payload:{username, password, token: "2498149219jfsawkdkw2942"} });
        /* dispatch({ type: LOGIN_FAILURE, payload: error, error: true }) */
  };
}

export function resetFunction() {
  return (dispatch) => {
    dispatch({ type: RESET });
  };
}