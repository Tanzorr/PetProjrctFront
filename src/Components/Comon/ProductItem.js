import React from 'react';
import {NavLink} from 'react-router-dom';
import './comon.module.css'

const ProductItem = ({product}) => {
    console.log('product', product);
    return <div className="product_item mb-5">
            <NavLink to={`/product/${product.id}`}>
                <div className="row">
                    <img className="img-rounded w-100 item_img"
                         src={product.image}
                         alt=""/>
                </div>
                <div className="row ">
                    <h5 className='text-center pl-5 pr-5'>{product.title}</h5>
                </div>
            </NavLink>
            <div className="row">
                <div className="w-100 text-center">
                    <b className="price "><h2>{product.price}грн</h2></b>
                </div>
            </div>
            <div className="row justify-content-center ">
                <button className="btn btn-primary">Add to card</button>
            </div>
        </div>;

};


export default ProductItem;
