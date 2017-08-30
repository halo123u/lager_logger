import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddNote extends Component {
	render () {
		return (
			<div>
				<h1>Add Note</h1>
				<form>
					<div className='box note'>
						<textarea placeholder='text area content'>	
						</textarea>
					</div>
					<div className='buttons'>
						<button type='submit'>OK</button>
						<Link to='/buyer'><button>Cancel</button></Link>
					</div>
				</form>
			</div>
		);
	}
}

export default AddNote;