import React, { Component } from 'react';
import axios from 'axios';
import { Redirect , Link } from 'react-router-dom';
import Note from '../symbols/note_icon.svg';

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
            this.setState({
                noteData: res.data.note,
                dataLoaded: true,
            })
        })
    }

    render () {
        return (
            (this.state.dataLoaded) ?
            <div className="main-container">
                <div id='recent-activity'>
                    <h1>View Note</h1>
                    <img src={Note} className='icon'/>
                    <Link to={`/edit-note/${this.props.match.params.note_id}`}>Edit</Link>
                </div>
                <div className='box'>
                    <div className='left-text'>
                        <p className="">
                            {this.state.noteData.main_info || ''}<br/>
                            {this.state.noteData.sec_info}<br/>
                        </p>
                    </div>
                    <div className='right-text'>
                        <p className="">
                            {this.state.noteData.time_info}<br/>
                            {this.state.noteData.date_info}<br/>
                        </p>
                    </div>
                </div>


                <div className='box note'>
                    <p>{this.state.noteData.content} </p>
                </div>
                <div className='buttons'>
                    <Link to={`/list-note`}><button>Delete</button></Link>
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
