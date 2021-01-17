import React from 'react';

const Login = () => {
    return <div className="container">
        <div className="row justify-content-center m-5">
            <form action="#" method="post" className="col-lg-4">
                <div className="row justify-content-center">
                    <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="Avatar"
                         width="100" className="avatar"/>
                </div>
                <div className="container">
                    <div className="form-group">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input className="form-control"
                               type="text" placeholder="Enter Username" name="uname" required/>
                    </div>
                    <div className="form-group">
                        <label><b>Password</b></label>
                        <input className="form-control"
                               type="password" placeholder="Enter Password" name="psw" required/>
                    </div>
                    <div className="form-group">
                        <button className="ptn btn-success" type="submit">Login</button>
                    </div>
                </div>
                <div className="container">
                    <button type="button"
                            className="cancelbtn btn btn-primary mr-3">Cancel
                    </button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    </div>;
};

export default Login;
