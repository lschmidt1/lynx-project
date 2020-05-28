import React, { Component } from 'react';
import './profile.scss'
import { Redirect } from "react-router-dom"
import Login from '../login/login';


export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
    this.logOut = this.logOut.bind(this);

  }
  logOut() {
    localStorage.clear();
    window.location.href = "/";
  }
  
  render() {    
    return (
      <div id="profile">
        <div>
          
        </div>
        <div>
          <span>
            <h1>Miranda Barcala</h1>
            <h2>Consultor</h2>
          </span>
          <div>
            <button>
              ES
            </button>
            <button onClick={() => this.logOut()}>
              LOG OUT
            </button>
          </div>
        </div>
        
      </div>
    )
  }
}
