import React, { Component } from 'react';
import axios from 'axios';
import { Redirect , Link } from 'react-router-dom';

class listInfo extends Component {
    constructor() {
        super();
        this.state = {
            listData:null,
            dataLoaded:false,
            fireRedirect:false,
        }
    }

    componentDidMount() {
        let account_id= this.props.match.params.account_id;
        axios.get(`/accounts/info/${account_id}`)
        .then(res => {
            console.log(res.data);
            this.setState({
                listData: res.data,
                dataLoaded: true,
            })
        })
    }

    render () {
        return (
           (this.state.dataLoaded) ?
                <div>
                    {this.state.listData.map(information => {
                       return <h1>{information.main_info}</h1>
                    })}
                </div>
                :<h1>Loading...</h1>
        )
    }
}

export default listInfo;
