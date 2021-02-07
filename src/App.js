import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Pages/Login/Login';
import HomePage from './Components/Pages/Home/Home';
import Catalog from './Components/Pages/Catalog/Catalolog';
import Contact from './Components/Pages/Contact/Contact';
import Product from './Components/Pages/Product/Product';
import AddProduct from "./Components/Pages/Product/addProduct";
import EditProduct from "./Components/Pages/Product/editProduct";
import Register from "./Components/Pages/Register/Register";
import DashboardProduct from "./Components/Pages/Dashboard/DashboardProduct";
import DashboardUsers from "./Components/Pages/Dashboard/DashboardUsers";
import './App.css';

const App = ({is_Auth})=>{

  return <div>
    <Router>
      <Header/>
      <Route path='/' exact component={HomePage}/>
      <Route path='/catalog' exact component={Catalog}/>
      <Route path='/contact' exact component={Contact}/>
      <Route path='/login' component={Login}/>
      <Route path='/product/:id' component={Product}/>
      <Route path='/dashboardProd' component={DashboardProduct}/>
      <Route path='/dashboardUser' component={DashboardUsers}/>
      <Route path='/addProduct' component={AddProduct}/>
      <Route path='/editProduct/:id' component={EditProduct}/>
      <Route path='/register' component={Register}/>
      <Footer/>
    </Router>
  </div>;
};

export default  App;


