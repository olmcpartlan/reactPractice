import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export class Time extends Component {

	render() {

		let styles = {
			display: 'inline'
		}


		return (
			<div>
			<Link to="/"><button className="btn btn-primary">Home</button></Link>
			<div className="row">
				<div className="col">
					<div className="box box-shadow">
						
						<h2>Enter Time: </h2>
						<div className="input-group mb-3 boxItem">
							<div className="form-group row">
								<div className="col-10">
									<p>From:</p>
									<input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input" />
									<p>To:</p>
									<input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input" />
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col">
					<div className="box box-shadow">
						<h2>Enter Time</h2>
						<div className="input-group mb-3">
							<div className="form-group row">
								<div className="col-10">
									<p>From:</p>
									<input className="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input" />

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		);

	}
}


