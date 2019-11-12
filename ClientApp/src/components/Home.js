import React, { Component } from 'react';
import './Home.css';
import ReactDOM from 'react-dom'
import {Link } from 'react-router-dom';


export class Home extends Component {
  static displayName = Home.name;
  
  ButtonPress = () => {
    console.log("here");
    

  }






  render() {
    return (
      <div className="box box-shadow">
        <h2>Enter your City: </h2>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div className="input-group-append">
          <Link tag={Link} className="text-dark" to="/time">Home</Link>
          </div>
        </div>
      </div>
    );
  }
}








