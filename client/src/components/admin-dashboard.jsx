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
            <h1>Admin Page</h1>
            <div className='box'>
                <Link to='/add-emp'><button className='long'>Create New Employee</button></Link>
            </div>
        </div>)
    }
}
export default AdminDashboard;