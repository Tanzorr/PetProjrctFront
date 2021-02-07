import React from 'react';
import {NavLink} from 'react-router-dom';

const AdminAsade =()=>{
    return <ul>
                <li><NavLink to="/dashboardProd">Products</NavLink></li>
                <li><NavLink to="/dashboardUser">Users</NavLink></li>
            </ul>
}

export default AdminAsade;