import React from 'react';


const  Input = (props)=>{
    return<div className="form-group">
        <label><b>Categry</b></label>
        <input className="form-control" onChange={(e) => {
            setCategory(e.currentTarget.value)
        }}
               type="text" placeholder="Enter products category" name="categry" required/>
    </div>;
}


export default Input;