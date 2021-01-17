import React, {useEffect} from 'react';
import ProductItem from '../../Comon/ProductItem';
import Select from "../../Comon/Select";
import {connect} from 'react-redux';
import {getAllProduct} from "../../../redux/product/product.reducer";


const Catalog =({getAllProduct, products})=>{
  useEffect(()=>{
    getAllProduct()
  },[])

console.log('products', products)
  let productList=[];
  if (products && products.length) {
    productList = products.map((e, i) => {
      return <div className="col-lg-4">
        <ProductItem key={i} product={e}/>
      </div>;
    });
  }else {
    productList = `<h1> Have no Product</h1> `;
  }
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

const mapStateToProps = state =>({
  products:state.product.products
});

export default  connect(mapStateToProps,{getAllProduct})(Catalog);
