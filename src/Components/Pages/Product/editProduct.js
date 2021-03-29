import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getSingleProduct, editProductSingle} from "../../../redux/product/product.reducer";
import {NavLink} from "react-router-dom";

import Form from "./Form/Form";


const editProduct = ({...props, product, getSingleProduct, editProductSingle}) => {

    let productId = props.match.params.id;
    let [prod, setProduct] = useState({})


    useEffect(() => {
        getSingleProduct(productId);
        setProduct(product);
        console.log('Product Edt ', product)
    }, [productId]);

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setProduct({...prod, [name]: value})
    }


    return <div className="container text-center">
        <div className="row">
            <NavLink className="nav-link btn-lg btn-primary m-5 " to="/dashboardProd">Dashboard</NavLink>
        </div>

        <Form initialValues={product}/>

    </div>
}

const mapStateToProps = (state) => {
    return {product: state.product.singleProduct}
};

export default connect(mapStateToProps, {getSingleProduct, editProductSingle})(editProduct);