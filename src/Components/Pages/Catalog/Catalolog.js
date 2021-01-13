import React from 'react';
import ProductItem from '../../Comon/ProductItem';
import Select from "../../Comon/Select";

const products = ['200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200'];
const productList = products.map((e, i)=>{
  return <div className="col-lg-4">
            <ProductItem key={i} price={e} />
         </div>;
});

const Catalog =()=>{
  return <div className="container">
    <div className="row">
      <h1 className="text-center">Catalog</h1>
    </div>
    <div className="row">
      <div className="col-lg-2">
        <Select/>
      </div>
      <div className="col-lg-10">
        <div className="row">
          {productList}
        </div>
      </div>
    </div>
  </div>;
};

export default Catalog;
