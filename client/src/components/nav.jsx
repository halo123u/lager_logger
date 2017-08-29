import React, { Component } from 'react';
import Menu from '../symbols/Hamburger.png';
import Search from '../symbols/Search.png';

class Nav extends Component {
	render () {
		return (
			<nav>
				<img src={Menu} />
				<img src={Search} />
			</nav>
		)
	}
}


export default Nav;