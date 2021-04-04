import React, {useEffect} from "react";
import AdminAsade from "./AdminAsade";
import ReadOnlyTable from "./readOnlyTable";
import Api from "../../../api/Api";
import {connect} from 'react-redux';
import {getUsers} from '../../../redux/user/user.reducer';



const DashboardProduct = ({history,  getUsers, users}) => {
    useEffect(()=>{
        getUsers();
    },[]);
    useEffect(() => {
        setTimeout(()=>{
            if (Api.is_Longin.getJwtToken() === false) {
                alert("not login");
                history.push('/')
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
                <ReadOnlyTable items={users}/>
            </div>
        </div>
    </div>
};


const mapStateToProps = state =>({
    users:state.user.users
});


export default connect(mapStateToProps,{getUsers})(DashboardProduct);