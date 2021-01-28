import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Baner from '../../Baner/Baner';
import CarouselP from '../../Carusel/CarouselP';
import {getAllProduct} from '../../../redux/product/product.reducer';

const Home = ({getAllProduct, products}) => {
    useEffect(() => {
        getAllProduct('products');
    }, [])

    return <div>
        <Baner/>
        <CarouselP items= {products}/>
    </div>;
};

const mapStateToProps = state => ({
    products:state.product.products,
});

export default connect(mapStateToProps, {getAllProduct})(Home);
