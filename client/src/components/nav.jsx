import React, { Component } from 'react';
import Menu from '../symbols/hamburger_icon.svg';
import Search from '../symbols/search.svg';
import X from '../symbols/X.svg';
import { Link } from 'react-router-dom';


class Nav extends Component {
	constructor() {
		super();
		this.state = {
			showMenu: false,
		}
		this.menu = this.menu.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	menu() {
		return (
 			<div id='menu-container'>
				<div id='menu'>
				<Link to='/dash' onClick={this.toggleMenu}>Dashboard</Link>
				<Link to='/accounts' onClick={this.toggleMenu}>Accounts</Link>
				<Link to='/events' onClick={this.toggleMenu}>Calendar</Link>
				<Link to='/change-password' onClick={this.toggleMenu}>Change Pass</Link>
				<Link to='/' onClick={this.toggleMenu}>Inventory</Link>
				<a onClick={this.toggleMenu} id='close'>Close</a>
				</div>
				<div onClick={this.toggleMenu} id='menu-side'>
				</div>
			</div>
		)
	}

	toggleMenu() {
		this.setState({
			showMenu : !this.state.showMenu,
		});
	}

	render () {
		return (
			<nav>
				<img src={Menu} onClick={this.toggleMenu}/>
				<img src={Search} />
				{this.state.showMenu ? this.menu() : ''}
			</nav>
		)
	}
}


export default Nav;
