import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductItem from '../Comon/ProductItem';

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const products = ['200', '200', '200', '200', '200', '200', '200', '200'];
const productList = products.map((e,i)=>{
  return <ProductItem key={i} price={e} />;
});

const CarouselP = ()=>{
  return <div className="container text-center pb-5">

    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {productList}
    </Carousel>


  </div>;
};

export default CarouselP;

