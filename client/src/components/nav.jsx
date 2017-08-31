import React, { Component } from 'react';
import Menu from '../symbols/Hamburger.png';
import Search from '../symbols/Search.png';
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
			<div id='menu'>
				<img src={X} onClick={this.toggleMenu} />
				<Link to='/dash' onClick={this.toggleMenu}>Dashboard</Link>
				<Link to='/accounts' onClick={this.toggleMenu}>Accounts</Link>
				<Link to='/events' onClick={this.toggleMenu}>Calendar</Link>
				<Link to='/' onClick={this.toggleMenu}>Inventory</Link>
				<Link to='/' onClick={this.toggleMenu}>Admin</Link>
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