import React,{useEffect, useState} from "react";
import {connect} from "react-redux";
import {getSingleProduct, editProductSingle} from "../../../redux/product/product.reducer";
import {NavLink} from "react-router-dom";

const editProduct = ({...props, product, getSingleProduct, editProductSingle}) => {

    let productId = props.match.params.id;
    let [prod , setProduct] = useState( {})

    useEffect(() => {
        getSingleProduct( productId);
        setProduct(product);
        }, [productId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setProduct({ ...prod, [name]: value })
    }
    useEffect(()=>{
        setProduct(product)
    },[product])

    return <div className="container text-center">
        <div className="row">
            <NavLink className="nav-link btn-lg btn-primary m-5 " to="/dashboard">Dashboard</NavLink>
        </div>
        <div>
            <div className="container">
                <div className="form-group">
                    <label htmlFor="uname"><b>Title</b></label>
                    <input className="form-control"
                           value={prod.name}
                            id="titles"
                           type="text" onChange={handleInputChange}
                           placeholder="product Title" name="name" required/>
                </div>
                <div className="form-group">
                    <label><b>Price</b></label>
                    <input className="form-control"
                           onChange={handleInputChange}
                           value={prod.price}
                           type="text" placeholder="Enter Price" name="price" required/>
                </div>
                <div className="form-group">
                    <label><b>Image</b></label>
                    <input className="form-control"
                           onChange={handleInputChange}
                           value={prod.img}
                           type="text" placeholder="Enter image url" name="price" required/>
                </div>
                <div className="form-group">
                    <label><b>Categry</b></label>
                    <input className="form-control"
                           onChange={handleInputChange}
                           value={prod.category}
                           type="text" placeholder="Enter products category" name="categry" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="" cols="30" rows="10"
                              value={prod.description}
                              onChange={handleInputChange}
                              className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <button className="ptn btn-success btn-lg"
                            onClick={()=>{
                                editProductSingle(productId,{
                                    prod});
                            }}
                    >Submit</button>
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return  { product: state.product.singleProduct}
};

export default connect(mapStateToProps, {getSingleProduct, editProductSingle})(editProduct);