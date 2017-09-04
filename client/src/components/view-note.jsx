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
                <div className='right'>
                   <Link to={`/edit-note/${this.props.match.params.note_id}`}>Edit</Link>
                </div>
                <div className='box '>
                    <div className='left'>
                        <p>
                            {this.state.noteData.date_info || ''}<br/>
                            {this.state.noteData.date_info}<br/>
                            {this.state.noteData.date_info}<br/>
                        </p>
                    </div>
                </div>


                <div className='box note'>
                    <p>{this.state.noteData.content} </p>
                </div>
                <div className='buttons'>
                    <Link to={`/list-note`}><button>Cancel</button></Link>
                </div>
            </div>
            :<h1>Loading...</h1>
        );
    }
}

export default ViewNote;
