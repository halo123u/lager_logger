import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
class AdminDashboard extends Component {
    constructor(){
        super();
        this.state ={
            redirect :false
        }
    }

    componentWillMount(){
        if(!this.props.auth){
            this.setState({
                redirect :true
            });
        }
    }
    render(){
        return(
        <div>
            {this.state.redirect? <Redirect to='/'/>: null}
            <h1>this is the admin account page</h1>
            <Link to='/add-emp'>Add employee</Link>
        </div>)
    }
}
export default AdminDashboard;