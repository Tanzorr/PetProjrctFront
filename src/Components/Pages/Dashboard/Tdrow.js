import React from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {delProduct} from '../../../redux/product/product.reducer';

const TdRow = ({product, delProduct}) => {
    return <tr>
        <td>{product.title}</td>
        <td>
            <NavLink to={`/product/${product.id}`}className="btn btn-primary">View</NavLink>
        </td>
        <td>
            <NavLink to={`/editProduct/${product.id}`} className="btn btn-success">Edit</NavLink>
        </td>
        <td>
            <button onClick={()=>{delProduct(product.id)}} className="btn btn-danger">Delete</button>
        </td>
    </tr>

}

export default connect(null,{delProduct})(TdRow);