import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { changeScreenFunction } from "../redux/actions/homeActions";
import "./header.scss";

const mapStateToProps = (state) => {
  return {
    screen: state.homeReducer.screen,
  };
};

const mapActionsToProps = {
  changeScreenFunction,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(
  class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.logout = this.logout.bind(this);
    }

    logout() {
      localStorage.clear();
      window.location.href = "/";
    }

    render() {
      return (
        <div id="wrapper">
          <div className="leftContainer">
            <h1>LYNX LOGO</h1>
            <h1>LATEST NEWS tICKER</h1>
          </div>
          <div className="rightContainer">
            <button>MY PROFILE</button>
            <button onClick={() => this.logout()}>LOGOUT</button>
          </div>
        </div>
      );
    }
  }
);
