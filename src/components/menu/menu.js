import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { changeScreenFunction } from "../redux/actions/homeActions";
import "./menu.scss";

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
  class Menu extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div id="menu">
          <h2>MAINTENANCE</h2>
          <h2>MONTHLY SALES FORECAST</h2>
          <h2>PLANNING</h2>
          <h2>PAYMENTS</h2>
          <h2>REPORTING</h2>
          <h2>PRF</h2>
        </div>
      );
    }
  }
);
