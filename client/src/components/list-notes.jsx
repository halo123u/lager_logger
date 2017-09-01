import React, { Component } from 'react';
import axios from 'axios';
import { Redirect , Link } from 'react-router-dom';

class ViewNote extends Component {
    constructor() {
        super();
        this.state = {
            noteData:null,
            dataLoaded:false,
            fireRedirect:false,
        }
    }

    componentDidMount() {
        let note_id= this.props.match.params.note_id;
        axios.get(`/notes/${note_id}`)
        .then(res => {
        console.log(res.data.note);
            this.setState({
                noteData: res.data.note,
                dataLoaded: true,
            })
        })
    }

    render () {
        return (
            (this.state.dataLoaded) ?
            <div>
                <h1>View Note</h1>
                    <Link to={`/edit-note/${this.props.match.params.note_id}`}>Edit</Link>
                    <div className='box note'>
                        <h2>{this.state.noteData.date_info} </h2>
                        <h2>{this.state.noteData.date_info} </h2>
                    </div>
                    <div className='box note'>
                        <h2>{this.state.noteData.content} </h2>
                    </div>
                    <div className='buttons'>
                        <button type='submit'>Back</button>
                    </div>
            </div>
            :<h1>Loading...</h1>
        );
    }
}

export default ViewNote;
