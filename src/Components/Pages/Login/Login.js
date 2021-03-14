import React, {useState} from 'react';
import Api from "../../../api/Api";
import  { Redirect } from 'react-router-dom'

const Login = (props) => {
    let [email, setEmail]= useState("");
    let [password, setPassword]= useState("");


    return <div className="container">
        <div className="row justify-content-center m-5">

                <div className="row justify-content-center">
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="Avatar"
                         width="100" className="avatar"/>
                </div>
                <div className="container">
                    <div className="form-group">
                        <label htmlFor="email"><b>Emaul</b></label>
                        <input className="form-control" onChange={(e)=>{setEmail(e.target.value)}}
                               type="email" placeholder="Enter Username" name="email" required/>
                    </div>
                    <div className="form-group">
                        <label><b>Password</b></label>
                        <input className="form-control" onChange={(e)=>{setPassword(e.target.value)}}
                               type="password" placeholder="Enter Password" name="psw" required/>
                    </div>
                    <div className="form-group">
                        <button onClick={
                            ()=>{
                                Api.loginUser.getJwtToken({
                                    email,
                                    password
                                });
                                props.history.push('/dashboardUser')

                            }
                        } className="btn btn-success" type="submit">Login</button>
                    </div>
                </div>
                <div className="container">
                    <button type="button"
                            className="cancelbtn btn btn-primary mr-3">Cancel
                    </button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>

        </div>
    </div>;
};

export default Login;
