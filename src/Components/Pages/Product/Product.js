import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSingleProduct} from "../../../redux/product/product.reducer";

const Product = (props) => {
    let productId = props.match.params.id;
    let product = props.product;
    useEffect(() => {
        props.getSingleProduct(productId);
    }, [])
    console.log('product', product, props)
    return <div className="container">
        <div className="row m-5">
            <div className="col-lg-6">
                <img src={product.image} className="w-75" alt=""/>
            </div>
            <div className="col-lg-6">
                <div className="row">
                    <h1 className="text-center">{product.title}</h1>
                </div>
                <div className="row">
                    <p className="description">
                        {product.description}
                    </p>
                </div>
                <div className="row price">
                    <b>{product.price}$</b>
                </div>
                <div className="row">
                    <button className="btn btn-primary">Add to card</button>
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = state => ({
    product: state.product.singleProduct
});

export default connect(mapStateToProps, {getSingleProduct})(Product);