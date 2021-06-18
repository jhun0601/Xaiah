import React from 'react';
import './css/Signup.css';
// import { Switch, Route } from 'react-router-dom';

const Signup = () => {
    const showSignUpForm = () => (
        <form className="signup-form">
            <div className="form-group mb-2" >
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-user"></i></span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
            </div>
            <div className="form-group mb-2" >
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-envelope"></i></span>
                    <input type="email" className="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="addon-wrapping" />
                </div>
            </div>
            <div className="form-group mb-2" >
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" />
                </div>
            </div>
            <div className="form-group mb-2" >
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping"><i className="fa fa-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="addon-wrapping" />
                </div>
            </div>
            
            <div className="form-group text-center mt-3">
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </div>
            <p className="text-center text-white mt-2">
                Have an account? <a href="">Log In</a>
            </p>

        </form>
    );

    return (
        <div className="signup-container">
            <div className="row px-3 vh-100">
                <div className="col-md-5 mx-auto align-self-center">
                    {showSignUpForm()}
                </div>
            </div>
        </div>
    )
}

export default Signup;