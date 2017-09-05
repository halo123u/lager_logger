import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom';
import RecentActivity from './recent-activity';

class Dashboard extends Component {
	constructor() {
		super();

		this.state = {
			redirect:false
		}
	}

	componentWillMount() {
		if(!this.props.auth){
            this.setState({
                redirect :true
            });
        }
	}
	render () {

		return (
			<main>
				{this.state.redirect? <Redirect to='/'/>: null}
				<h1>Dashboard</h1>
				<div className='box padded'>
					<p>Sales Review</p>
					<div id='dummy-img'></div>
				</div>

				<a href='/events'>
				<div className='box'>
					<h2>Upcoming</h2>
					<ul>
						<li><span>9/1/17</span>Electric Zoo</li>
						<li><span>10/1/17</span>Annual Montauk Surf Classic</li>
						<li><span>5/28/18</span>Race To Remember</li>
					</ul>
				</div>
				</a>
				<RecentActivity />
			</main>
		);
	}
}

export default Dashboard;