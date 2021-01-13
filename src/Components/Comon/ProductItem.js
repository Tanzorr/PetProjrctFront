import React from 'react';
import {NavLink} from 'react-router-dom';
import './comon.module.css'

const ProductItem = ({price}) => {
    return <div className="product_item mb-5">
        <NavLink to="/product">
            <div className="row">
                <img className="img-rounded w-100 "
                     src="https://cdn.shopify.com/s/files/1/0247/2928/8759/products/DSCF1159_720x.jpg?v=1586085100"
                     alt=""/>
            </div>
            <div className="row ">
                <h5 className='text-center pl-5 pr-5'>Рюкзак-переноска для тварин
                    (жовтий з дірочками)</h5>
            </div>
        </NavLink>
        <div className="row">
            <div className="w-100 text-center">
                <b className="price "><h2>{price}грн</h2></b>
            </div>
        </div>
        <div className="row justify-content-center ">
            <button className="btn btn-primary">Add to card</button>
        </div>
    </div>;
};


export default ProductItem;
