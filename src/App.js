import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Pages/Login/Login';
import HomePage from './Components/Pages/Home/Home';
import Catalog from './Components/Pages/Catalog/Catalolog';
import Contact from './Components/Pages/Contact/Contact';
import Product from './Components/Pages/Product/Product';
import Api from "./api/Api";

import {getProducts} from "./redux/product/product.action";

const App = ()=>{
  Api.getAll('products');
  return <div>
    <Router>
      <Header/>
      <Route path='/' exact component={HomePage}/>
      <Route path='/catalog' exact component={Catalog}/>
      <Route path='/contact' exact component={Contact}/>
      <Route path='/login' component={Login}/>
      <Route path='/product/:id' component={Product}/>
      <Footer/>
    </Router>
  </div>;
};

const mapDispatchToProps = dispatch =>({
      getProducts: products =>dispatch(getProducts(products))
})
export default  connect(null,)(App);


