import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser, registerUser} from "../../../redux/user/user.reducer";
import Errors, {chekPassword} from "../../../front_validator/index.";

import {Field, reduxForm} from 'redux-form'

const Register = ({...props, registerUser, handleSubmit}) => {

    let save = (value) => {
        chekPassword(value.password1, value.password2);
        registerUser({
            name: value.uname,
            email: value.email,
            password: value.password1
        });
        setTimeout(() => {
            loginUser({
                email: value.email,
                password: value.password1
            })
            props.history.push('/dashboardUser')
        }, 2000);
    }


    return <div className="container">
        <div className="alert-danger">{Errors[0]}</div>
        <div className="row justify-content-center m-5">
            <form className="container" onSubmit={handleSubmit(save)}>
                <div className="form-group">
                    <label htmlFor="uname"><b>Username</b></label>
                    <Field className="form-control"
                           component='input'
                           type="text" placeholder="Enter Username" name="uname" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="uname"><b>Email</b></label>
                    <Field className="form-control"
                           type="email" component='input' placeholder="Enter Email" name="email" required/>
                </div>
                <div className="form-group">
                    <label><b>Password</b></label>
                    <Field className="form-control" component='input'
                           type="password" placeholder="Enter Password" name="password1" required/>
                </div>
                <div className="form-group">
                    <label><b>Password2</b></label>
                    <Field className="form-control" component='input'
                           type="password" placeholder="Enter Password" name="password2" required/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success" type="submit">Register
                    </button>
                </div>
            </form>
        </div>
    </div>;

}

export default connect(null, {registerUser, loginUser})(reduxForm({
    form: 'Register',
    enableReinitialize: true
})(Register));