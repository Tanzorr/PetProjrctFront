import React, {useEffect} from 'react';
import ProductItem from '../../Comon/ProductItem';
import {connect} from 'react-redux';
import {getAllProduct} from "../../../redux/product/product.reducer";
import AdminAsade from "./AdminAsade";
import ControlTable from "./controlTable";


const Catalog = ({getAllProduct, products}) => {
    useEffect(() => {
        getAllProduct();
    }, [])

    // let productList = [];
    // if (products && products.length) {
    //     productList = products.map((e, i) => {
    //         return <div className="col-lg-3">
    //             <ProductItem key={i} product={e}/>
    //         </div>;
    //     });
    // } else {
    //     productList = `<h1> Have no Product</h1> `;
    // }


    return <div className="container">
        <div className="row">
            <div className="col-lg-2">
                <AdminAsade/>
            </div>
            <div className="col-lg-10">
                <div className="row">
                    <ControlTable items={products}/>
                </div>
            </div>
        </div>
    </div>;
};

const mapStateToProps = state => ({
    products: state.product.products,
});

export default connect(mapStateToProps, {getAllProduct})(Catalog);
