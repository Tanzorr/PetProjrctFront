import React from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {delProduct} from '../../../redux/product/product.reducer';

const TdURow = ({user}) => {
    return <tr>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.roles}</td>

    </tr>

}

export default TdURow;