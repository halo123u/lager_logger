import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class changePassword extends Component {
    constructor() {
        super();
        this.state = {
            newPassword: '',
            confirmPassword: '',
            employeeData: null,
            dataLoaded: false,
            fireRedirect:false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.renderUserPassword = this.renderUserPassword.bind(this);
    }

    componentDidMount() {
    	console.log(this.props.match.params.emp_id);
    	let emp_id=this.props.match.params.emp_id	;
        axios.get(`/employees/id/${emp_id}`)
            .then(res => {
                this.setState({
                    employeeData: res.data.employee,
                    dataLoaded: true,
                })
            }
        )
    }

    handleSubmit(e, id,newPassword, confirmPassword) {
        e.preventDefault();
        if ( newPassword!==confirmPassword){
          	alert("The confirm password doesn't match")
        }else{
			let updatePassword=true;
			let emp_id = 22;//this.state.employeeData.emp_id;
			axios.put(`/employees/${emp_id}`, {
				id,
				newPassword,
				updatePassword,
			}).then(()=>{
				this.setState({
				  	fireRedirect:true,
				})
			}).catch(err => {
				console.log(err);
			})
        }
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    renderUserPassword() {
      if (this.state.dataLoaded) {
        return (
          <div className="small-box">
	          	<h1>Change Password</h1>
	            <div className="">
	                <form onSubmit={(e) => this.handleSubmit(
		                e,
		                this.state.employeeData.emp_id,
		                this.state.newPassword,
		                this.state.confirmPassword,
		                )}>
						<label>
							New Password
							<input
								type='password'
								name='newPassword'
								value={this.state.newPassword}
								onChange={this.handleInputChange}
								placeholder=''
							required />
						</label>
						<br/>
						<label>
							Confirm password
							<input
								type='password'
								name='confirmPassword'
								value={this.state.confirmPassword}
								onChange={this.handleInputChange}
								placeholder=''
							required />
						</label>

						<div className='buttons'>
							<button type='submit'>OK</button>
							<button>Cancel</button>
						</div>
	                </form>
	            </div>
          </div>
        )
      }
    }

    render(){
        return(
            <div className="container">
				{this.renderUserPassword()}
				{this.state.fireRedirect
				? ""
				: ""}
            </div>
        )
    }
}

export default changePassword;
