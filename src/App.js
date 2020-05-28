import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* Timer for session timeout */
import IdleTimer from "react-idle-timer";
import Login from "./components/login/login";
import Components from "./components/routes";
import PrivateRoute from "./components/common/privateRoute";
import "./App.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: 15000,
      remaining: null,
      warning: 10000,
      idlePopup: false,
    };
    this.idleTimer = null;
    this.onAction = this._onAction.bind(this);
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this.setState({
      remaining: Math.floor(this.idleTimer.getRemainingTime() / 1000),
      warning: Math.floor(this.state.warning / 1000),
    });

    // set the DOM to update every 1 second in order to check idle time
    setInterval(() => {
      if (LoggedIn()) {
        switch (this.state.remaining) {
          case this.state.warning:
            this.setState({ idlePopup: true });
            break;
          case this.state.timeout:
            this.logout();
            this.setState({
              idlePopup: false,
            });
        }
        this.setState({
          remaining: Math.floor(this.idleTimer.getRemainingTime() / 1000),
        });
      }
    }, 1000);
  }

  logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  render() {
    return (
      <Router>
        <IdleTimer
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this.onActive}
          onAction={this.onAction}
          onIdle={this.onIdle}
          events={[
            "keydown",
            "wheel",
            "DOMMouseScroll",
            "mouseWheel",
            "mousedown",
            "touchstart",
            "touchmove",
            "MSPointerDown",
            "MSPointerMove",
            "visibilitychange",
          ]}
          debounce={250}
          timeout={this.state.timeout}
        />
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/" component={Components} authed={LoggedIn()} />
        </Switch>
        {this.state.idlePopup ? (
          <div className="popup" onclick="myFunction()">
            <span className="popuptext" id="myPopup">
              Warning! You will be logged out in: {this.state.remaining}
              <p>Are you still here?</p>
              <button onClick={() => this.idleTimer.reset()}>I'M HERE</button>
            </span>
          </div>
        ) : (
          ""
        )}
      </Router>
    );
  }

  _onAction(e) {
    this.setState({
      idlePopup: false,
    });
  }

  _onActive(e) {
    this.setState({
      idlePopup: false,
    });
  }

  _onIdle(e) {
    this.logout();
  }
}

function LoggedIn() {
  const loggedIn =
    localStorage.getItem("token") !== null &&
    localStorage.getItem("token") !== ""
      ? true
      : false;
  return loggedIn;
}
