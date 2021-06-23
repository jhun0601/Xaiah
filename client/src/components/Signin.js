import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {showErrorMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading'

const Signin = () => {

    const[formData, setFormData] = useState({
        email:'',
        password:'',
        errorMsg:false,
        loading:false,
        redirectDashboard: false
    })

    const { email, password, errorMsg, loading, redirectDashboard} = formData;
    /******  
        event handlers
     ******/
    const handleChange = (e) => {
        // console.log(e);
        setFormData({
            ...formData, 
            [e.target.name] : e.target.value,
            errorMsg:'',
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //validation
        
    }
    const showSignInForm = () => (
        <form className="signin-form" onSubmit={handleSubmit} noValidate>
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
            <div className="form-group text-center mt-3">
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </div>
            <p className="text-center text-white mt-2">
                Dont have an account? <Link to="/signin">Register here.</Link>
            </p>

        </form>
    );

    return (
        <div className="signin-container">
            <div className="row px-3 vh-100">
                <div className="col-md-5 mx-auto align-self-center">
                    {errorMsg && showErrorMsg(errorMsg)}
                    {loading && <div className="text-center pb-3">{showLoading()}</div>}
                    {showSignInForm()}
                </div>
            </div>
        </div>
    )
}

export default Signin;