import React, { useState, useEffect } from "react";
import "./login.scss";
import lynx from "../../img/lynx-logo.png";
import { connect } from "react-redux";
import { loginFunction, resetFunction } from "../redux/actions/loginActions";
import { FormattedMessage } from "react-intl";

const Login = (props) => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    error: false,
    errorMessage: "",
  });

  const changeValues = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const { username, password } = login;
  const { loading, errorMessage, loginFunction, resetFunction } = props;
  const { token } = props.login;

  const submitLogin = (e) => {
    e.preventDefault();
    if (username.length < 4) {
      setLogin({
        ...login,
        error: true,
        errorMessage: (
          <FormattedMessage
            id="login.error.length.username"
            defaultMessage="User should have at least 4 characters"
          />
        ),
      });
      return;
    }
    if (password.length < 4) {
      setLogin({
        ...login,
        error: true,
        errorMessage: (
          <FormattedMessage
            id="login.error.length.password"
            defaultMessage="Password should have at least 4 characters"
          />
        ),
      });
      return;
    }
    setLogin({
      username:
        username.indexOf("@") > 0
          ? username.substring(0, username.indexOf("@")).toLowerCase()
          : username.toLowerCase(),
      password: password,
      error: false,
      errorMessage: "",
    });
    if (!loading && errorMessage === "") loginFunction(username, password);
  };

  useEffect(() => {
    if (token !== undefined && token !== "") {
      localStorage.setItem("token", token);
      window.location.href = "/";
    } else {
      localStorage.clear();
    }
  }, [token]);

  useEffect(() => {
    if (errorMessage !== "") {
      setError();
      localStorage.clear();
      resetFunction();
    }
  }, [errorMessage]);

  const setError = () => {
    setLogin({
      ...login,
      error: true,
      errorMessage:
        errorMessage.indexOf("404") > 0 ||
        errorMessage === "Cannot read property 'status' of undefined" ? (
          <FormattedMessage
            id="login.error.network"
            defaultMessage="Error de conexión"
          />
        ) : errorMessage.indexOf("401") > 0 ? (
          <FormattedMessage
            id="login.error.credentials"
            defaultMessage="Usuario o contraseña incorrectos"
          />
        ) : (
          errorMessage
        ),
    });
  };

  return (
    <div id="login">
      <img src={lynx} alt="lynx logo" />
      <form onSubmit={submitLogin}>
                  
        <input
          id="username"
          name="username"
          value={username}
          onChange={changeValues}
          required
        />
        <label className={login.username !== "" ? "top_label" : ""}>
          <FormattedMessage id="login.username" defaultMessage="User" />
        </label>
                  
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={changeValues}
        />
        <label className={login.username !== "" ? "top_label" : ""}>
          <FormattedMessage id="login.password" defaultMessage="Password" />
        </label>
        <p
          style={{
            visibility: login.error ? "visible" : "hidden",
          }}
        >
          {login.errorMessage}           
        </p>
        <button type="submit">
                      
          {loading ? (
            <div id="loading_spinner"></div>
          ) : (
            <FormattedMessage id="login.login" defaultMessage="Login" />
          )}
                       
        </button>
                
      </form>
            
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.loginReducer.login,
    loading: state.loginReducer.loading,
    errorMessage: state.loginReducer.errorMessage,
  };
};

const mapActionsToProps = { loginFunction, resetFunction };

export default connect(mapStateToProps, mapActionsToProps)(Login);
