import React, { Component } from 'react';
import './Home.css';
import ReactDOM from 'react-dom'


export class Home extends Component {
  static displayName = Home.name;
  
  ButtonPress = () => {
    var newTime = new Time();
    console.log("here");
    newTime.funcCheck();

  }






  render() {
    return (
      <div className="box box-shadow">
        <h2>Enter your City: </h2>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => { this.ButtonPress() }}>Search</button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Time/>,
  document.getElementById('root')
);



class Time extends Component {
  funcCheck = () => {
    console.log("here1234");
    return (
      <div className="boxTwo box-shadow">
        <h2>Enter your City: </h2>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div className="input-group-append">
            {/* <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.ButtonPress()}>Search</button> */}
          </div>
        </div>
      </div>

    )




  }
  render() {

    let styles = {
      display: 'inline'
    }
    this.setState = {
      display: 'hidden'
    }

    return (

      <div className="boxTwo box-shadow" style={styles}>
        <h2>Enter your City: </h2>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div className="input-group-append">
            {/* <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.ButtonPress()}>Search</button> */}
          </div>
        </div>
      </div>
    );

  }
}




