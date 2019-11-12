import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export class Time extends Component {
    
    render() {

        let styles = {
            display: 'inline'
        }
        

        return (

            <div className="box box-shadow">
                <Link tag={Link} to="/">Back</Link>
                <h2>Enter Time: </h2>
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


