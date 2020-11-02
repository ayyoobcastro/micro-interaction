import React from 'react';
import './loadscreen.scss';

import Slider from "react-slick";

function Loadscreen() {

    const homeImageSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 545,
                settings: "unslick"
            }
        ]
    };


    return (
        <div className="loadScreen">
            <article>
                <div className="contentInner">
                    <div className="home-slider">
                        <div className="container">
                            <article>
                                <div className="home-image-slider">
                                    <Slider {...homeImageSlider}>
                                        <div>
                                            <img src="http://dtaledecor.com/static/jpeg/home-gallery/g1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img src="http://dtaledecor.com/static/jpeg/home-gallery/g2.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img src="http://dtaledecor.com/static/jpeg/home-gallery/g3.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img src="http://dtaledecor.com/static/jpeg/home-gallery/g4.jpg" alt="" />
                                        </div>
                                        <div>
                                            <img src="http://dtaledecor.com/static/jpeg/home-gallery/g5.jpg" alt="" />
                                        </div>
                                    </Slider>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Loadscreen;