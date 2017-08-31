import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state= {
            username : '',
            password : ''

        }
    }
    handleInputChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        },()=>{
            console.log(this.state.username);
            console.log(this.state.password);
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('/auth/login', {
            username : this.state.username,
            password: this.state.password
        }).then(res =>{
            this.props.handleLogin(res.data);
        });
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input name="username" value={this.state.username} onChange={this.handleInputChange}/>
                    <label>Password</label>
                    <input name="password" value={this.state.password} onChange={this.handleInputChange}/>
                    <button >Login</button>
                </form>
            </div>
        )
    }
}
export default Login;