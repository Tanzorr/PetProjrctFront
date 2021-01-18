import React, {useEffect} from 'react';
import ProductItem from '../../Comon/ProductItem';
import Select from "../../Comon/Select";
import {connect} from 'react-redux';
import {getAllProduct, getAllCategories, getInCategoriesProducts} from "../../../redux/product/product.reducer";


const Catalog =({...props, getAllProduct, getAllCategories,getInCategoriesProducts, products, categories})=>{
  useEffect(()=>{
    getAllProduct();
    getAllCategories();
  },[])

console.log('products', products);
console.log('categories', props);
  let productList=[];
  if (products && products.length) {
    productList = products.map((e, i) => {
      return <div className="col-lg-3">
        <ProductItem key={i} product={e}/>
      </div>;
    });
  }else {
    productList = `<h1> Have no Product</h1> `;
  }

  if(!categories){
    categories=[]
  }

  const select1= ['no parameters', 'title', 'price','data'];
  let titleSelect1 ='By parameters';
  let titleSelect2 ='Categories';

  return <div className="container">
    <div className="row">
      <h1 className="text-center">Catalog</h1>
    </div>
    <div className="row">
      <div className="col-lg-2">
        <Select key={1} title={titleSelect1} options={select1} getInCategory={getInCategoriesProducts}/>
        <Select key={2} title={titleSelect2} options={categories}  getInCategory={getInCategoriesProducts}/>
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
  products:state.product.products,
  categories: state.product.categories,
});

export default  connect(mapStateToProps,{getAllProduct, getAllCategories, getInCategoriesProducts})(Catalog);
