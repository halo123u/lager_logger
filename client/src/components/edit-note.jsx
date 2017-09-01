import React, { Component } from 'react';
import axios from 'axios';
import { Redirect , Link } from 'react-router-dom';

class EditNote extends Component {
    constructor() {
        super();
        this.state = {
            note_id:null,
            content: '',
            date_info: null,
            employee_id:null,
            noteData:null,
            dataLoaded:false,
            fireRedirect:false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.clearState=  this.clearState.bind(this);
    }

    componentDidMount() {
    	let note_id= this.props.match.params.note_id;

        axios.get(`/notes/${note_id}`)
        .then(res => {
            this.setState({
                note_id: res.data.note.note_id,
                content: res.data.note.content,
                date_info: Date.now(),
                employee_id:res.data.note.employee_id,
                noteData: res.data.note,
                dataLoaded: true,
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    clearState(){
    	this.setState({
    		content:"",
    	})
    }

    handleSubmit(e, note_id, content, date_info, employee_id) {
        e.preventDefault();
        console.log(note_id, content, date_info, employee_id);
		axios.put(`/notes/${note_id}`, {
            note_id,
			content,
			date_info,
			employee_id
		}).then((newNote)=>{
				this.clearState();
				this.setState({
			  	    fireRedirect:true,
			})
		}).catch(err => {
			console.log(err);
		})
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

	render () {
		return (
			(this.state.dataLoaded) ?
            <div>
				<h1>Edit Note</h1>
                <form onSubmit={(e) => this.handleSubmit(
	                e,
                    this.state.note_id,
                    this.state.content,
					this.state.date_info,
					this.state.employee_id
	                )}>
					<div className='box note'>
						<textarea placeholder='text area content'
						name="content" value={this.state.content}   onChange={this.handleInputChange}>
						</textarea>
					</div>
					<div className='buttons'>
                        <button type='submit'>OK</button>
                        <Link to={`/view-note/${this.props.match.params.note_id}`}><button>Cancel</button></Link>
					</div>
				</form>
			</div>
            :<h1>Loading...</h1>
		);
	}
}

export default EditNote;
