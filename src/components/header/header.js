import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../../img/icons/search.svg";
import { ReactComponent as Edit } from "../../img/icons/edit.svg";
import { ReactComponent as Favorite } from "../../img/icons/favorite.svg";

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
          <div className="header1">
            <div className="leftContainer">
              <button>LYNX LOGO</button>
              <h1 class="newsSlider">
                <span>
                  This is text - This is text - This is text - This is text -
                  This is text - This is text - This is text - This is text -
                  This is text - This is text - This is text - This is text
                </span>
              </h1>
            </div>
            <div className="rightContainer">
              <button>MY PROFILE</button>
              <button onClick={() => this.logout()}>LOGOUT</button>
            </div>
          </div>
          <div className="header2">
            <div className="accountContainer">
              <div className="row1">
                <h2>ACCOUNT: </h2>
                <h2>2611A 28282158292392 TARGET STORES</h2>
                <div className="infoButton">i</div>
              </div>
              <div className="row2">
                <div className="clickeableText">
                  <Edit></Edit>
                  <p>CHANGE ACCOUNT</p>
                </div>
                <div className="clickeableText">
                  <Search></Search>
                  <p>SEARCH ACCOUNTS</p>
                </div>
                <div className="clickeableText">
                  <Favorite></Favorite>
                  <p>MY FAVORITES</p>
                </div>
              </div>
            </div>
            <div className="yearContainer">
              <div className="row1">
                <h2>PLAN YEAR: </h2>
                <h2>2020</h2>
              </div>
              <div className="row2">
                <div className="clickeableText">
                  <Edit></Edit>
                  <p>CHANGE PLAN YEAR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);
