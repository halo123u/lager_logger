import React, { Component } from 'react';
import axios from 'axios';
import { Redirect , Link } from 'react-router-dom';
import Note from '../symbols/note_icon.svg'

class AddNote extends Component {
    constructor() {
        super();
        this.state = {
            relationship_id: false,
            note_type: '',
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
    	let type= "EMP";//this.props.note_type;
    	let relationship_id= "22" //this.props.rel_id;
    	let emp_id= 21 //this.props.user_id;

        axios.post(`/notes/type/${type}`,{
        		relationship_id,
        	})
            .then(res => {
                this.setState({
                    noteData: res.data.note,
                    dataLoaded: true,
                    relationship_id:relationship_id,
                    employee_id:emp_id,
                    date_info:Date.now(),
                    note_type: type,
                })
            }
        )
    }
    clearState(){
    	this.setState({
    		content:"",
    	})
    }

    handleSubmit(e, relationship_id, note_type, content, date_info, employee_id) {
        e.preventDefault();
		axios.post(`/notes`, {
			relationship_id,
			note_type,
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
			<div>
				<h1>Create Note <img src={Note}/></h1>
                <form onSubmit={(e) => this.handleSubmit(
	                e,
					this.state.relationship_id,
					this.state.note_type,
					this.state.content,
					this.state.date_info,
					this.state.employee_id
	                )}>
					<div className='box note'>
						<textarea placeholder='text area content'
						name="content" onChange={this.handleInputChange}>
						</textarea>
					</div>
					<div className='buttons'>
						<button type='submit'>OK</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddNote;
