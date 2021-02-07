import React, {useEffect} from "react";
import AdminAsade from "./AdminAsade";
import ProductTable from "./productsTable";
import Api from "../../../api/Api";
import {Redirect} from "react-router";


const DashboardProduct = (props) => {
    useEffect(() => {
        if (Api.is_Longin.getJwtToken() === false) {
            alert("not login");
            props.history.push('/')
        }
    }, []);
    return <div className="container">
        <div className="row">
            <h2>Hello Admin</h2>
        </div>
        <div className="row">
            <div className="col-lg-2">
                <AdminAsade/>
            </div>
            <div className="col-lg-10">
                <ProductTable/>
            </div>
        </div>
    </div>


};

export default DashboardProduct;