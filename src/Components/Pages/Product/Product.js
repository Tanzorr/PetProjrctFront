import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSingleProduct, getInCategoriesProducts} from "../../../redux/product/product.reducer";
import CarouselP from "../../Carusel/CarouselP";

const Product = ({...props, product, products, getSingleProduct, getInCategoriesProducts}) => {
    let productId = props.match.params.id;

    useEffect(() => {
        getSingleProduct(productId);

    }, [productId])
    useEffect(() => {
        if (product.category) {
            getInCategoriesProducts(product.category)
        }
    }, [product])


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
        <div className="row">
            <CarouselP items={products}/>
        </div>
    </div>
}

const mapStateToProps = state => ({
    product: state.product.singleProduct,
    products: state.product.products,
});

export default connect(mapStateToProps, {getSingleProduct, getInCategoriesProducts})(Product);