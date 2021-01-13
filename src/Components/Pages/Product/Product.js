import React  from 'react';



const Product =()=>{
    return <div className="container">
                <div className="row m-5">
                    <div className="col-lg-6">
                        <img src="https://ezoo.com.ua/image/cache/1c/y//ec50df8c-eb7a-11e0-898a-f46d04651b05-400x400.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <h1 className="text-center">Product Title</h1>
                        </div>
                        <div className="row">
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel mi sollicitudin mi cursus hendrerit. Praesent fermentum ornare felis. Vestibulum condimentum dignissim sapien, ac ultrices ante tempor id. Vivamus accumsan bibendum lobortis. Nunc varius pretium convallis. In vitae lobortis turpis. Integer eu nibh laoreet odio sagittis mattis et non lacus. Etiam ac placerat tellus. Etiam varius lacus id ullamcorper egestas. Nulla facilisi. Vestibulum interdum sit amet arcu ac pharetra. Suspendisse ipsum neque, vulputate non mollis in, laoreet id quam. Donec vel libero metus. Praesent tempus tempus felis, ut tincidunt nisl porttitor sit amet. Vestibulum accumsan cursus sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            </p>
                        </div>
                        <div className="row price">
                            <b>300$</b>
                        </div>
                            <div className="row">
                                <button className="btn btn-primary">Add to card</button>
                            </div>
                    </div>
                </div>
           </div>
}

export default Product;