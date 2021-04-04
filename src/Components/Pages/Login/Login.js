import React from 'react';
import Api from "../../../api/Api";
import {Field, reduxForm} from 'redux-form'

const Login = ({handleSubmit, history}) => {

    let save = (value) => {
        Api.loginUser.getJwtToken({
            email: value.email,
            password: value.password
        });
        history.push('/dashboardUser')
    }

    return <form className="container" onSubmit={handleSubmit(save)}>
        <div className="row justify-content-center m-5">

            <div className="row justify-content-center">
                <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="Avatar"
                     width="100" className="avatar"/>
            </div>
            <div className="container">
                <div className="form-group">
                    <label htmlFor="email"><b>Email</b></label>
                    <Field className="form-control" component='input'
                           type="email" placeholder="Enter Username" name="email" required/>
                </div>
                <div className="form-group">
                    <label><b>Password</b></label>
                    <Field className="form-control" component='input'
                           type="password" placeholder="Enter Password" name="password" required/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success" type="submit">Login
                    </button>
                </div>
            </div>
            <div className="container">
                <button type="button"
                        className="cancelbtn btn btn-primary mr-3">Cancel
                </button>
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </div>
    </form>;
};

export default reduxForm({
    form: 'Login',
    enableReinitialize: true
})(Login);
