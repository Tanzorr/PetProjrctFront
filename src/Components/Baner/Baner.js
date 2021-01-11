import React from 'react'

const Banner =()=>{
    return <div className="container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ul className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://gtracer.com.ua/image/catalog/blog/news/news__2/begin__Owl%20robot.jpg" alt="Labric" width="1100" height="500"/>
                </div>
                <div className="carousel-item">
                    <img src="https://novye-multiki.ru/wp-content/uploads/2019/06/max-pchela-900x400.jpg" alt="Boy" width="1100" height="500"/>
                </div>
                <div className="carousel-item">
                    <img src="https://gtracer.com.ua/image/catalog/blog/articles/Articles%201/begin__Wicked%20Ball.jpg" alt="Boll" width="1100" height="500"/>
                </div>
            </div>

            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    </div>
}

export default Banner;
