import React, {useState, useEffect} from "react";

import {connect} from 'react-redux';
import {addProductSingle} from "../../../redux/product/product.reducer";

import {NavLink} from "react-router-dom";
import Api from "../../../api/Api";

const addProduct = ({...props, addProductSingle}) => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let [image, setImage] = useState("");
    let [category, setCategory] = useState("");
    let [description, setDescription] = useState("");
    let [uploadFile, setUploadFile]= useState(null);

    return <div className="container text-center">
        <div className="row">
            <NavLink className="nav-link btn-lg btn-primary m-5 " to="/dashboardProd">Dashboard</NavLink>
        </div>
        <div>
            <div className="container">
                <div className="form-group">
                    <label htmlFor="uname"><b>Title</b></label>
                    <input className="form-control"
                           type="text" onChange={(e) => {
                        setTitle(e.currentTarget.value)
                    }} placeholder="product Title" name="title" required/>
                </div>
                <div className="form-group">
                    <label><b>Price</b></label>
                    <input className="form-control" onChange={(e) => {
                        setPrice(e.currentTarget.value)
                    }}
                           type="text" placeholder="Enter Price" name="price" required/>
                </div>
                <div className="form-group">
                    <input id='upload_file' name="File"
                           onChange={(e)=>{
                               let files = e.target.files || e.dataTransfer.files;
                               if (!files.length)
                               {
                                   //console.log('no files', e.target.files);
                                   console.log('no files');
                               }

                               let formData = new FormData();
                               formData.append('File',files[0], files[0].name);
                               formData.append('Product', files);

                               setImage(files[0].name)
                               setUploadFile(formData);

                           }}
                           type="file" name='image'/>
                </div>
                <div className="form-group">
                    <label><b>Categry</b></label>
                    <input className="form-control" onChange={(e) => {
                        setCategory(e.currentTarget.value)
                    }}
                           type="text" placeholder="Enter products category" name="categry" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="" cols="30" rows="10"
                              onChange={(e) => {
                                  setDescription(e.currentTarget.value)
                              }}
                              className="form-control" required ></textarea>
                </div>
                <div className="form-group">
                    <button className="ptn btn-success btn-lg"
                            onClick={() => {
                                addProductSingle({
                                    title,
                                    price,
                                    description,
                                    image,
                                    category,
                                });
                                if(uploadFile){
                                    Api.uploadFile(uploadFile);
                                }

                                props.history.push('/dashboardProd')
                            }}
                    >Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default connect(null, {addProductSingle})(addProduct);