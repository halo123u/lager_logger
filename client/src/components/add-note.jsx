import React, { Component } from 'react';

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
						<button>Cancel</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddNote;