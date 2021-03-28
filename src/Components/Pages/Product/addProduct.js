import React, {useState, useEffect} from "react";
import {Field, reduxForm} from 'redux-form'


import {connect} from 'react-redux';
import {addProductSingle} from "../../../redux/product/product.reducer";

import {NavLink} from "react-router-dom";
import Api from "../../../api/Api";

const addProduct = (props) => {
    const {handleSubmit, pristine, reset, submitting, addProductSingle} = props
    let [image, setImage] = useState("");
    let [uploadFile, setUploadFile] = useState(null);


    const Submit = (values) => {
        console.log('submit Values', values);
        values.image = image
        if (uploadFile) {
            Api.uploadFile(uploadFile);
        }
        addProductSingle(values);
        props.history.push('/dashboardProd')

    }

    return <div className="container text-center">
        <div className="row">
            <NavLink className="nav-link btn-lg btn-primary m-5 " to="/dashboardProd">Dashboard</NavLink>
        </div>
        <div>
            <form onSubmit={handleSubmit(Submit)} className="container">
                <div className="form-group">
                    <label htmlFor="uname"><b>Title</b></label>
                    <Field name='title' component='input' type="text" placeholder="First Name"
                           className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="price"><b>Price</b></label>
                    <Field name='price' component='input' type="number" placeholder="Product Price"
                           className="form-control"/>
                </div>

                <div className="form-group">
                    <input id='upload_file' name="File"
                           onChange={(e) => {
                               let files = e.target.files || e.dataTransfer.files;
                               if (!files.length) {
                                   //console.log('no files', e.target.files);
                                   console.log('no files');
                               }

                               let formData = new FormData();
                               formData.append('File', files[0], files[0].name);
                               formData.append('Product', files);

                               setImage(files[0].name)
                               setUploadFile(formData);

                           }} type='file'/>
                </div>

                <div className="form-group">
                    <label htmlFor="category"><b>Category</b></label>
                    <Field name='category' component='input' type="text" placeholder="Product Category"
                           className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="description"><b>Description</b></label>
                    <Field name='description' component='textarea'
                           cols="30" rows="10" type="text" placeholder="Product description" className="form-control"/>
                </div>
                <div className="form-group">
                    <button className="ptn btn-success btn-lg">Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default connect(null, {addProductSingle})(reduxForm({
    form: 'addProduct'
})(addProduct));