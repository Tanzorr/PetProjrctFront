import React,{useEffect} from 'react';
import Tdrow from "./Tdrow";
import {connect} from 'react-redux';
import {getAllProduct} from "../../../redux/product/product.reducer";
import {NavLink} from "react-router-dom";

const AdminTable=({getAllProduct, products})=>{
    useEffect(()=>{
        getAllProduct()
    },[]);
        let productList=[];
    if (products.length){
         productList = products.map((e, i)=>{
            return <Tdrow key={i} product={e}/>
        });
    }else{
        productList = '<tr>Have no Products</tr>';
    }

    return <div>
        <NavLink to={`/addProduct`}className="btn btn-primary m-5">Add Product</NavLink>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Title</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {productList}
            </tbody>
        </table>
    </div>
}

const mapStateToProps = state =>({
    products:state.product.products
});

export default connect(mapStateToProps,{getAllProduct})(AdminTable);