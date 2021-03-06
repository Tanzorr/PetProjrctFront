import React, {useEffect} from "react";
import AdminAsade from "./AdminAsade";
import UsersTable from "./usersTable";
import Api from "../../../api/Api";



const DashboardProduct = (props) => {
    useEffect(() => {
        setTimeout(()=>{
            if (Api.is_Longin.getJwtToken() === false) {
                alert("not login");
                props.history.push('/')
            }
        },1000)

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
                <UsersTable/>
            </div>
        </div>
    </div>


};

export default DashboardProduct;