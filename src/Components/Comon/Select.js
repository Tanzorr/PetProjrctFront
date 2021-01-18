import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Option from "./Option";

import {getInCategoriesProducts, getAllProduct} from "../../redux/product/product.reducer";

const Select = ({title, options, getInCategoriesProducts}) => {
    let [value, setValue] = useState('');

    if (!options) {
        options = [];
    }
    const optionsList = options.map((e, i) => {
        return <Option key={i} value={e}/>
    });
    let change = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        if (value) {
            if (value === "no params") {
                getAllProduct()
            } else {
                getInCategoriesProducts(value)
            }
        }
    }, [value])

    return <div>
        <form action="">
            <div className="form-group">
                <label htmlFor="select option">{title}</label>
                <select onChange={change} className="form-control" name="select" id="select">
                    <Option key={-1} value="no params"/>
                    {optionsList}
                </select>
            </div>
        </form>
    </div>
}

export default connect(null, {getInCategoriesProducts, getAllProduct})(Select);
