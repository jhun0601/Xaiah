import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import { Link } from 'react-router-dom';
import {showErrorMsg, showSuccessMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading';
import './css/Signup.css';
import { signup } from '../api/auth';

const Signup = () => {
    const[formData, setFormData] = useState({
        username:'jb',
        email:'jb@g.com',
        password:'abc123',
        password2:'abc123',
        successMsg:false,
        errorMsg:false,
        loading:false
    })
    const {username, email, password, password2, successMsg, errorMsg, loading} = formData;

    /******  
        event handlers
     ******/
    const handleChange = (e) => {
        // console.log(e);
        setFormData({
            ...formData, 
            [e.target.name] : e.target.value,
            successMsg:'',
            errorMsg:'',
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //validation
        if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)) {
            setFormData({
                ...formData,
                errorMsg: "All fields are required"
            })
        } else if(!isEmail(email)) {
            setFormData({
                ...formData,
                errorMsg: "Invalid Email"
            })
        } else if(!equals(password, password2)) {
            setFormData({
                ...formData,
                errorMsg: "Passwords do not match"
            })
        } else {
            // setFormData({
            //     ...formData, 
            //     successMsg: 'Sign up successfully'
            // })

            const {username, email , password} = formData;
            const data = {username, email, password}
            setFormData({...formData, loading:true});

            signup(data)
                .then(response => {
                    console.log(response);
                }).catch(err => {
                    console.log('error: ', err.message);
                });
        }
    }
    const showSignUpForm = () => (
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group mb-2" >
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-user"></i></span>
                    <input name="username" value={username} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group mb-2" >
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-envelope"></i></span>
                    <input name="email" value={email} type="email" className="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="addon-wrapping" onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group mb-2" >
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-lock"></i></span>
                    <input name="password" value={password} type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" onChange={handleChange}/>
                </div>
            </div>
            <div className="form-group mb-2" >
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-lock"></i></span>
                    <input name="password2" value={password2} type="password" className="form-control" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="addon-wrapping" onChange={handleChange}/>
                </div>
            </div>
            
            <div className="form-group text-center mt-3">
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </div>
            <p className="text-center text-white mt-2">
                Have an account? <Link to="/signin">Log In</Link>
            </p>

        </form>
    );

    return (
        <div className="signup-container">
            <div className="row px-3 vh-100">
                <div className="col-md-5 mx-auto align-self-center">
                    {successMsg && showSuccessMsg(successMsg)}
                    {errorMsg && showErrorMsg(errorMsg)}
                    {loading && <div className="text-center pb-3">{showLoading()}</div>}
                    {showSignUpForm()}
                    {/* <p style={{color:'white'}}>{JSON.stringify(formData)}</p> */}
                </div>
            </div>
        </div>
    )
}

export default Signup;