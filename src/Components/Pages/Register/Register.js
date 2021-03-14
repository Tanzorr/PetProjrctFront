import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginUser, registerUser} from "../../../redux/user/user.reducer";
import Errors, {chekPassword} from "../../../front_validator/index.";
import  { Redirect } from 'react-router-dom'

const Register = ({...props,registerUser}) => {

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password1, setPassword1] = useState('');
    let [password2, setPassword2] = useState('');


    return <div className="container">
        <div className="alert-danger">{Errors[0]}</div>
        <div className="row justify-content-center m-5">
            <div className="container">
                <div className="form-group">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input onChange={(e) => {
                        setName(e.currentTarget.value)
                    }} className="form-control"
                           type="text" placeholder="Enter Username" name="uname" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="uname"><b>Email</b></label>
                    <input className="form-control" onChange={(e) => {
                        setEmail(e.currentTarget.value)
                    }}
                           type="email" placeholder="Enter Email" name="uname" required/>
                </div>
                <div className="form-group">
                    <label><b>Password</b></label>
                    <input className="form-control" onChange={(e) => {
                        setPassword1(e.currentTarget.value)
                    }}
                           type="password" placeholder="Enter Password" name="psw" required/>
                </div>
                <div className="form-group">
                    <label><b>Password2</b></label>
                    <input className="form-control" onChange={(e) => {
                        setPassword2(e.currentTarget.value)
                    }}
                           type="password" placeholder="Enter Password" name="psw2" required/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success" onClick={() => {
                        chekPassword(password1, password2);
                        registerUser({
                            name,
                            email,
                            password: password1
                        });
                        setTimeout(()=>{
                            loginUser({email,password1})
                            props.history.push('/dashboardUser')
                        },2000)

                    }} type="submit">Register
                    </button>
                </div>
            </div>
        </div>
    </div>;

}

export default connect(null, {registerUser, loginUser })(Register);