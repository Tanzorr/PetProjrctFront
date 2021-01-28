import React from "react";


const Input = ({type, name, required}) => {
    return <div>
        <div className="form-group">
            <label htmlFor="uname"><b>Username</b></label>
            <input className="form-control"
                   type="text" placeholder="Enter Username" name="uname" required/>
        </div>
    </div>
}