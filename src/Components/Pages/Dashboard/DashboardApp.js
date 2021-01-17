import React from "react";
import AdminAsade from "./AdminAsade";
import AdminTable from "./AdminTable";


const Dashboard = () => {

    return <div className="container">
        <div className="row">
            <h2>Hello Admin</h2>
        </div>
        <div className="row">
            <div className="col-lg-2">
               <AdminAsade/>
            </div>
            <div className="col-lg-10">
               <AdminTable/>
            </div>
        </div>
    </div>


};

export default Dashboard;