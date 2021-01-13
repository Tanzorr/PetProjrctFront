import React from 'react';
import {NavLink} from 'react-router-dom';


const Header=()=>{
  return <div className="container">
    <div className="row">
      <nav className="navbar navbar-expand-sm bg-light navbar-light w-100">
        <ul className="navbar-nav w-100 justify-content-between align-content-center">
          <div>
            <div className="row ">
              <select className="selectpicker ml-2 " data-width="fit">
                <option
                  data-content='<span class="flag-icon flag-icon-us"></span>
                   English'>English
                </option>
                <option
                  data-content='<span class="flag-icon flag-icon-mx">
                  </span> Español'>Español
                </option>
              </select>
            </div>
            <div className="row">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/catalog">Catalog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>

            </div>
            <div className="row">
              <li className="nav-item active">
                <a className="nav-link" href="#">Brands</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Goods</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Discount</a>
              </li>

            </div>
          </div>
          <div className="logo pt-5">
                                Logo
          </div>

          <div className="align-content-center justify-content-center">
            <div className="row">
              <li className="nav-item">
                <NavLink className="nav-link " to='/login'>Login</NavLink>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <i className="bi bi-person-circle"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-suit-heart-fill"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bag-fill"></i>
                </a>
              </li>
              <li className="nav-item mt-1">

              </li>
            </div>
            <div className="row">
              <form className="form-inline  w-100" action="/action_page.php">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn" type="submit"><i className="bi bi-search"></i></button>
              </form>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  </div>;
};

export default Header;
