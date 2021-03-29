import React from 'react';
import Form from "./Form/Form";
import {NavLink} from "react-router-dom";

const addProduct = () => {
    return <div className="container text-center">
        <div className="row">
            <NavLink className="nav-link btn-lg btn-primary m-5 " to="/dashboardProd">Dashboard</NavLink>
        </div>
        <Form/>
    </div>
}

export default addProduct;