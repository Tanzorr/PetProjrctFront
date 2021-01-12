import React from 'react'


const ProductItem = ()=>{
    return<div className='container'>
        <div className="row">
            <img className="img-rounded w-100 p-5 " src="https://cdn.shopify.com/s/files/1/0247/2928/8759/products/DSCF1159_720x.jpg?v=1586085100" alt=""/>
        </div>
        <div className="row ">
            <h5 className='text-center'>Рюкзак-переноска для тварин (жовтий з дірочками)</h5>
        </div>
        <div className="row">
            <div className="w-100 text-center">
                1,250 грн
            </div>
        </div>
    </div>
}

export default ProductItem;