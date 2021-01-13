import React from 'react';


const Footer=()=>{
  return <div className="container">
    <div className="row">
      <nav className="navbar navbar-expand-sm bg-light navbar-light w-100">
        <ul className="navbar-nav w-100 justify-content-between">
          <div className="row">
            <li className="nav-item">
              <a className="nav-link" href="">Map</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Brand</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Discount</a>
            </li>
          </div>
          <div className="row">
            <li className="nav-item"><a className="nav-link" href="">
              <i className="bi bi-facebook"></i></a>
            </li>
            <li className="nav-item" ><a className="nav-link" href="">
              <i className="bi bi-instagram"></i></a></li>
            <li className="nav-item"><a className="nav-link" href="">
              <i className="bi bi-play-btn-fill"></i></a></li>
          </div>
        </ul>
      </nav>
    </div>
  </div>;
};

export default Footer;
