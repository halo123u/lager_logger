import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class AddEmpl extends Component {
    constructor(){
        super();
        this.state= {
            currentPage:'/',
            redirect: false,
            user_type:'',
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: '',
            phone:''

        }
    }
    componentWillMount() {
        if(!this.props.auth){
            this.setState({
                redirect: true
            });
        }else if(this.props.user.user_type === 'employee'){
            this.setState({
                redirect: true,
                currentPage: '/accounts'
            });
        }
    }
    handleInputChange = (e) => {
		const name = e.target.name;
        const value = e.target.value;
        console.log(value);
		this.setState({
			[name] : value,
		})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('/employees',{
            user_type: this.state.user_type,
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
            key: 'najsndonasjd'
        }).then(res=>{
            this.setState({
                redirect:true,
                currentPage: '/admin-dash'
            })
        }).catch(err=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                {this.state.redirect? <Redirect to={`${this.state.currentPage}`} />: null}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Account Type
                        <select name='user_type' required onChange={this.handleInputChange}>
                                        <option hidden>Select Option</option>
                                        <option value='admin'>Admin</option>
                                        <option value='employee'>Employee</option>
                        </select>
                    </label>
                    <label>
                        Username
                        <input name="username" type="text" 
                               maxLength="25" 
                               placeholder="Username"
                               onChange={this.handleInputChange}
                               value={this.state.username}
                               required />
                    </label>
                    <label>
                        Password
                        <input name="password" type="password" 
                               maxLength="20" 
                               placeholder="Password"
                               onChange={this.handleInputChange}
                               value={this.state.password} 
                               required/>
                    </label>
                    <label>
                        First Name
                        <input name="first_name" type="text" 
                               maxLength="30" 
                               placeholder="First Name"
                               onChange={this.handleInputChange}
                               value={this.state.first_name} 
                               required/>
                    </label>
                    <label>
                        Last Name
                        <input name="last_name" type="text" 
                               maxLength="30" 
                               placeholder="Last Name"
                               onChange={this.handleInputChange}
                               value={this.state.last_name} 
                               required/>
                    </label>
                    <label>
                        Email
                        <input name="email" type="email" 
                               maxLength="50" 
                               placeholder="Email"
                               onChange={this.handleInputChange}
                               value={this.state.email} 
                               required/>
                    </label>
                    <label>
                        First Name
                        <input name="phone" type="phone" 
                               maxLength="15" 
                               placeholder="(XXX)-XXX-XXXX"
                               onChange={this.handleInputChange}
                               value={this.state.phone} 
                               required/>
                    </label>
                    <button>Create Account</button>
                </form>
            </div>
        )
    }
}

export default AddEmpl;