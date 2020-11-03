import React, { useEffect } from 'react';
import './home.scss';

import HomeBanner from './home-banner.jpg';
import hStore from './h-store.jpg';

import g1 from './g1.jpg';
import g2 from './g2.jpg';
import g3 from './g3.jpg';
import g4 from './g4.jpg';
import g5 from './g5.jpg';

import imgProduct1 from './imgProduct1.jpg';
import imgProduct2 from './imgProduct2.jpg';
import imgProduct3 from './imgProduct3.jpg';
import imgProduct4 from './imgProduct4.jpg';
import imgProduct5 from './imgProduct5.jpg';
import imgProduct6 from './imgProduct6.jpg';
import imgProduct7 from './imgProduct7.jpg';
import imgProduct8 from './imgProduct8.jpg';
import imgProduct9 from './imgProduct9.jpg';
import imgProduct10 from './imgProduct10.jpg';
import imgProduct11 from './imgProduct11.jpg';
import imgProduct12 from './imgProduct12.jpg';

import servicePic2 from './h-directC@2x.jpg';
import servicePic1 from './h-serA@2x.jpg';

import playBtn from './play2.svg';


import LocomotiveScroll from 'locomotive-scroll';
import { Parallax } from 'react-scroll-parallax';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function Home() {

    const homeImageSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 545,
                settings: "unslick"
            }
        ]
    };

    const productSlider = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        // fade: true,
        cssEase: 'linear',
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 545,
                settings: "unslick"
            }
        ]
    };

    useEffect(() => {
        const myContent = new LocomotiveScroll({
            el: document.querySelector('[data-scroll]'),
        });
        console.log(myContent);



    })

    return (
        <div>
            <div className="home-banner">
                <div className="banner-slider">
                    <div>
                        <Parallax className="banner-parallax" y={[-20, 20]} tagOuter="figure">
                            <img src={HomeBanner} alt="" />
                        </Parallax>
                    </div>
                </div>
                <div className="banner-text">
                    <div className="container">
                        <article>
                            <h1 className="heading heading__big ">Artistic designs customized to your taste & style</h1>
                            <a href="#home-intro" className="btn-3">Explore Now</a>
                        </article>
                    </div>
                </div>
            </div>



            <section id="home-intro" className="home-introduction">
                <div className="container">
                    <article>
                        <div className="flex">
                            <div className="col__half">
                                <aside>
                                    <h2 data-scroll className="heading heading__big heading___italics">Two Decades Of Design Excellence</h2>
                                    <p className="color__grey">
                                        Established in 2000, DTALE DECOR Pvt. Ltd. is one of India’s foremost
                                        design-led, interior fit-out brands, with over 10 lakh SFT of luxury interior
                                        spaces executed for high-end hospitality and residential spaces. Our roster of
                                        clients include hospitality majors like The Sheraton, Novotel, Dunes, Samroha, Saptha Hospitality,
                                        Holiday Group, Ananta Living, Gokulam Hotels & Resorts
                                        and Corporates, high profile individuals and celebrities.
                </p>
                                    <p className="color__grey">
                                        Our folio of contract assignments also includes high-end contract grade
                                        furniture involving over 10,000 unique pieces using over 200,000 CFT in wood
                                        and work with special materials like stainless steel, wrought iron, bronze, leather, wicker, and jute.
                                        Our philosophy of design craft, inspires both passion
                                        and attention for detail across scale and span of our engagements, from
                                        integrated projects worth 25 crores to single artefact worth 1 lakh rupees.
                </p>
                                    <a href="./who-we-are.html" className="btn--more">
                                        Read more
                </a>
                                </aside>
                            </div>
                            <div className="col__half">
                                <aside>
                                    <div className="image image__shadow--right">
                                        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                                            <img src={hStore} alt="" />
                                        </Parallax>
                                        <div className="play-video">
                                            <img src={playBtn} alt="" />
                                            <span className="play-video__text">WATCH VIDEO</span>
                                        </div>

                                    </div>
                                </aside>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="curated-products">
                <div className="container">
                    <article>
                        <aside>
                            <h4 className="mini__heading">CURATED products</h4>
                        </aside>
                        <div className="product-slider">
                            <Slider {...productSlider} >
                                <div className="product_slider_item">
                                    <a href="./collection-chair-detail-Kwan.html">
                                        <div className="product__block">
                                            <figure>
                                                <Parallax className="custom-class" y={[-5, 5]} tagOuter="figure">
                                                    <img src={imgProduct1} alt="" />
                                                    <img src={imgProduct2} alt="" />
                                                </Parallax>
                                            </figure>
                                            <span>Kwan / Armchair</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="product_slider_item">
                                    <a href="./collection-chair-detail-Adrian.html">
                                        <div className="product__block">
                                            <figure>
                                                <img src={imgProduct3} alt="" />
                                                <img src={imgProduct4} alt="" />
                                            </figure>
                                            <span>Adrian / Dining</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="product_slider_item">
                                    <a href="./collection-consoles-detail-airi.html">
                                        <div className="product__block">
                                            <figure>
                                                <img src={imgProduct5} alt="" />
                                                <img src={imgProduct6} alt="" />
                                            </figure>
                                            <span>Airi / Consoles</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="product_slider_item">
                                    <a href="./collection-consoles-detail-calder.html">
                                        <div className="product__block">
                                            <figure>
                                                <img src={imgProduct7} alt="" />
                                                <img src={imgProduct8} alt="" />
                                            </figure>
                                            <span>Calder / Consoles</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="product_slider_item">
                                    <a href="./collection-consoles-detail-mozemo.html">
                                        <div className="product__block">
                                            <figure>
                                                <img src={imgProduct9} alt="" />
                                                <img src={imgProduct10} alt="" />
                                            </figure>
                                            <span>Mozemo / Consoles</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="product_slider_item">
                                    <a href="./collection-table-detail-loua.html">
                                        <div className="product__block">
                                            <figure>
                                                <img src={imgProduct11} alt="" />
                                                <img src={imgProduct12} alt="" />
                                            </figure>
                                            <span>Loua / Tables </span>
                                        </div>
                                    </a>
                                </div>
                            </Slider>
                        </div>
                    </article>
                </div>
            </section>


            <div className="home-slider">
                <div className="container">
                    <article>
                        <div className="home-image-slider">
                            <Slider {...homeImageSlider}>
                                <div>
                                    <img src={g1} alt="" />
                                </div>
                                <div>
                                    <img src={g2} alt="" />
                                </div>
                                <div>
                                    <img src={g3} alt="" />
                                </div>
                                <div>
                                    <img src={g4} alt="" />
                                </div>
                                <div>
                                    <img src={g5} alt="" />
                                </div>
                            </Slider>
                        </div>
                    </article>
                </div>
            </div>


            <section className="home-showroom">
                <div className="container">
                    <article>
                        <h4 className="mini__heading">Plan your Visit</h4>
                        <h2 className="heading heading__medium">
                            We invite you to walk-into our store whenever you have time, to experience, shop, sit and relax, have a cup
                            of tea and discuss your design ideas with us.
          </h2>
                        <div className="flex">
                            <aside>
                                <div className="image image__shadow--left--2">
                                    <a href="./showrooms.html" className="store_image">
                                        <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
                                            <img src="h-Kochi.jpg" alt="" />
                                        </Parallax>

                                        <div className="store_content">
                                            <div className="store_content-item">
                                                <h3>Kochi</h3>
                                                <span className="btn-3">Explore</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </aside>
                            <aside>
                                <div className="image image__shadow--right--2">
                                    <a href="./showrooms.html" className="store_image">
                                        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                                            <img src="h-Thrissur.jpg" alt="" />
                                        </Parallax>

                                        <div className="store_content">
                                            <div className="store_content-item">
                                                <h3>Thrissur</h3>
                                                <span className="btn-3">Explore</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </aside>
                        </div>
                    </article>
                </div>
            </section>



            <section className="services">
                <div className="container">
                    <article>
                        <h5>SERVICES / CUSTOMIZATION</h5>
                    </article>
                </div>

                <div>
                    <div className="services-blocks">
                        <div className="block-1">
                            <aside>
                                <div className="img">
                                    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                                        <img src={servicePic2} alt="" />
                                    </Parallax>

                                </div>
                            </aside>
                            <aside></aside>
                        </div>
                        <div className="block-2">
                            <div className="container">
                                <article>
                                    <aside></aside>
                                    <aside>
                                        <h2 className="heading heading__medium">Services to <br /> Architects & Designers</h2>
                                        <p>
                                            At Dtale, we love to work side-by-side with renowned architects and designers
                                            with whom the company has established solid and enduring ties. The vast
                                            know-how regarding materials, furnishing solution, finishes, and more than
                                            anything the feel of the space is shared with designers who would like to
                                            collaborate with us and the assortment of services that we offer. It includes…
                  </p>
                                        <ul className="list-points">
                                            <li>Custom made furniture and seating for hospitality & residential projects.</li>
                                            <li>On-site accurate measurements for easy installation in under a week.</li>
                                            <li>High-quality, custom made wardrobes/ cabinetry with German hardware.</li>
                                        </ul>
                                    </aside>
                                </article>
                            </div>
                        </div>
                    </div>

                    <div className="services-blocks">
                        <div className="block-1">
                            <aside>
                                <div className="img">
                                    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                                        <img src={servicePic1} alt="" />
                                    </Parallax>
                                </div>
                            </aside>
                            <aside></aside>
                        </div>
                        <div className="block-2">
                            <div className="container">
                                <article>
                                    <aside></aside>
                                    <aside>
                                        <h2 className="heading heading__medium">For Direct Clients</h2>
                                        <ul className="list-points">
                                            <li>Design solutions for the entire apartment with drawings and layouts.</li>
                                            <li>Consultancy on all soft furnishings, upholstery, and drapery.</li>
                                            <li>Expert advice on the colour scheme and wall finishes.</li>
                                        </ul>
                                    </aside>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="latest-news">
                <div className="container">
                    <article>
                        <h2>Latest News</h2>
                        <div className="flex">

                            <a href="google.com" className="news_block">
                                <figure>
                                    <div>
                                        <img src="latest-news/IIID-2019.jpg" alt="" />
                                    </div>
                                    <figcaption>
                                        <span>
                                            IIID India congratulates Mr. Sreejith Pathangalil and other awardees for 2019
                                            IIID Awards
                  </span>
                                    </figcaption>
                                </figure>
                            </a>
                            <a href="google.com" className="news_block">
                                <figure>
                                    <div>
                                        <img src="latest-news/Screenshot 2020-09-22 at 4.28.03 PM@2x.jpg" alt="" />
                                    </div>
                                    <figcaption>
                                        <span>
                                            'Dtale Decor' has made it once again' - IIID Awards 2019
                  </span>
                                    </figcaption>
                                </figure>
                            </a>
                            <a href="https://elledecor.in/article/dtale-decor-spruces-an-exquisite-villa-in-kerala-that-impresses-with-its-fashionable-and-fabulous-style/?utm_campaign=later-linkinbio-elledecorindia&utm_content=later-10250786&utm_medium=social&utm_source=instagram"
                                className="news_block">
                                <figure>
                                    <div>
                                        <img src="latest-news/DtaleKannurDay220505.jpg" alt="" />
                                    </div>
                                    <figcaption>
                                        <span>
                                            Dtale Decor spruces an exquisite villa in Kerala that impresses with its fashionable and fabulous
                                            style - ELLE DECOR
                  </span>
                                    </figcaption>
                                </figure>
                            </a>

                        </div>
                    </article>
                </div>
            </section>



            <div className="cta-banner" >
                <div className="container">
                    <article>
                        <h2>Want to discover the perfect interior design for your home? Tell us about your space</h2>
                        <button className="btn-2 booking_form">Book a meeting</button>
                    </article>
                </div>
            </div>


        </div>
    )
}

export default Home;