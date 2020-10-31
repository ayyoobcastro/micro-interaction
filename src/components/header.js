import React from 'react';
import './header.scss';

function header() {
    return (
        <div>
            <header>
                <article>
                    <a href="./index.html" className="logo">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.38 24.89">
                            <defs>

                            </defs>
                            <title>dtale-logo</title>
                            <path className="cls-1"
                                d="M130.41,44.3h10.53a26.46,26.46,0,0,1,3.39,0,11.85,11.85,0,0,1,9.94,12v.81a11.86,11.86,0,0,1-9.94,12l-.26,0a29.54,29.54,0,0,1-3.13,0H130.41V44.3Zm9.26,9.39v5.93h3.4c2.53-.72,2.57-4.72-.12-5.93Z"
                                transform="translate(-130.41 -44.26)" />
                            <polygon className="cls-1"
                                points="24.05 0.07 44.33 0.07 44.33 8.79 38.84 8.79 38.84 24.84 29.73 24.84 29.73 8.79 24.05 8.79 24.05 0.07" />
                            <polygon className="cls-1"
                                points="58.4 24.84 55.96 17.91 51.04 17.91 53.16 9.97 49.72 0.19 40.03 24.84 58.4 24.84" />
                            <polygon className="cls-1" points="69.04 24.84 59.14 24.77 50.28 0.12 59.07 0.12 69.04 24.84" />
                            <polygon className="cls-1"
                                points="69.87 0.05 78.87 0.05 78.87 16.74 88.29 16.74 88.29 24.84 78.87 24.84 75.76 24.84 69.87 24.84 69.87 0.05" />
                            <polygon className="cls-1"
                                points="89.26 0.19 110.38 0.19 110.38 8.22 98.4 8.22 98.4 9.19 110.38 9.19 110.38 15.84 98.4 15.84 98.4 16.81 110.38 16.81 110.38 24.77 89.26 24.77 89.26 0.19" />
                        </svg>
                    </a>
                    <div className="menu">
                        <ul className="menu__row">

                            <li className="menu__row__list has-submenu">
                                <a href="google.com" className="menu__row__list__link"> Collections </a>
                                <div className="submenu">
                                    <div className="submenu__menu">
                                        <ul className="submenu__menu__ul">
                                            <li className="submenu__menu__ul__li chair_li active_li">
                                                <a href="./collections-chairs.html" className="submenu__menu__ul__li__link">Chairs</a>
                                            </li>
                                            <li className="submenu__menu__ul__li tables_li">
                                                <a href="./collections-tables.html" className="submenu__menu__ul__li__link">Tables</a>
                                            </li>
                                            <li className="submenu__menu__ul__li consoles_li">
                                                <a href="./collections-consoles.html" className="submenu__menu__ul__li__link">Consoles</a>
                                            </li>
                                        </ul>
                                        <div className="submenu__menu__products">
                                            <div className="submenu__menu__products__items">

                                                <div className="active_item chair_item submenu__menu__products__items__item">
                                                    <a href="./collection-chair-detail-Adron.html">
                                                        <div className="product__block">
                                                            <figure>
                                                                <img src="./static/jpeg/products/Chairs/Armchairs/Adron/pic1.jpg" alt="" />
                                                                <img src="./static/jpeg/products/Chairs/Armchairs/Adron/pic3-hover.jpg" alt="" />
                                                            </figure>
                                                            <span>Adron / Armchair</span>
                                                        </div>
                                                    </a>
                                                    <a href="./collection-chair-detail-Adrian.html">
                                                        <div className="product__block">
                                                            <figure>
                                                                <img src="./static/jpeg/products/Chairs/Dining/Adrian/pic1.jpg" alt="" />
                                                                <img src="./static/jpeg/products/Chairs/Dining/Adrian/pic2-hover.jpg" alt="" />
                                                            </figure>
                                                            <span>Adrian / Dining</span>
                                                        </div>
                                                    </a>
                                                    <a href="./collection-chair-detail-artdeco.html">
                                                        <div className="product__block">
                                                            <figure>
                                                                <img src="./static/jpeg/products/Chairs/Armchairs/Art Deco/pic1.jpg" alt="" />
                                                                <img src="./static/jpeg/products/Chairs/Armchairs/Art Deco/pic2-hover.jpg" alt="" />
                                                            </figure>
                                                            <span>Art Deco / Armchair</span>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="submenu__menu__products__items__item tables_item">
                                                    <a href="./collection-table-detail-loua.html">
                                                        <div className="product__block">
                                                            <figure>
                                                                <img src="./static/jpeg/products/Tables/Loua/web/pic1.jpg" alt="" />
                                                                <img src="./static/jpeg/products/Tables/Loua/web/pic2-hover.jpg" alt="" />
                                                            </figure>
                                                            <span>Loua / Loua</span>
                                                        </div>
                                                    </a>
                                                    <a href="./collection-table-detail-perkins.html">
                                                        <div className="product__block">
                                                            <figure>
                                                                <img src="./static/jpeg/products/Tables/Perkins/Web/pic1.jpg" alt="" />
                                                                <img src="./static/jpeg/products/Tables/Perkins/Web/pic3-hover.jpg" alt="" />
                                                            </figure>
                                                            <span>Perkins / Perkins</span>
                                                        </div>
                                                    </a>
                                                    <a href="./collection-table-detail-soren.html">
                                                        <div className="product__block">
                                                            <figure>
                                                                <img src="./static/jpeg/products/Tables/Soren/Web/pic1.jpg" alt="" />
                                                                <img src="./static/jpeg/products/Tables/Soren/Web/pic3-hover.jpg" alt="" />
                                                            </figure>
                                                            <span>Soren / Soren</span>
                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="submenu__menu__products__items__item consoles_item">
                                                    <a href="./collection-consoles-detail-airi.html">
                                                        <div className="product__block">
                                                            <figure>
                                                                <img src="./static/jpeg/products/Consoles/Airi/Web/pic1.jpg" alt="" />
                                                                <img src="./static/jpeg/products/Consoles/Airi/Web/pic2-hover.jpg" alt="" />
                                                            </figure>
                                                            <span>Airi / Airi</span>
                                                        </div>
                                                    </a>
                                                    <a href="./collection-consoles-detail-calder.html">
                                                        <div className="product__block">
                                                            <figure>
                                                                <img src="./static/jpeg/products/Consoles/Calder/Web/pic1.jpg" alt="" />
                                                                <img src="./static/jpeg/products/Consoles/Calder/Web/pic3-hover.jpg" alt="" />
                                                            </figure>
                                                            <span>Calder / Calder</span>
                                                        </div>
                                                    </a>
                                                    <a href="./collection-consoles-detail-mozemo.html">
                                                        <div className="product__block">
                                                            <figure>
                                                                <img src="./static/jpeg/products/Consoles/Mozemo/Web/pic1.jpg" alt="" />
                                                                <img src="./static/jpeg/products/Consoles/Mozemo/Web/pic2-hover.jpg" alt="" />
                                                            </figure>
                                                            <span>Mozemo / Mozemo</span>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="menu__row__list">
                                <a className="menu__row__list__link" href="https://google.com/who-we-are.html"> Who we are </a>
                            </li>
                            <li className="menu__row__list">
                                <a className="menu__row__list__link" href="https://google.com/how-we-work.html"> How we work </a>
                            </li>
                            <li className="menu__row__list">
                                <a className="menu__row__list__link" href="https://google.com/warranty.html"> Warranty </a>
                            </li>
                            <li className="menu__row__list">
                                <a className="menu__row__list__link" href="https://google.com/news.html"> News </a>
                            </li>
                            <li className="menu__row__list last-child">
                                <a className="menu__row__list__link" href="https://google.com/showrooms.html"> Showrooms </a>
                            </li>
                            <li className="menu__row__list desktop-hide">
                                <a href="https://youtube.com" className="menu__row__list__link booking_form"> Book an appointment </a>
                            </li>
                            <div className="nav-contact desktop-hide">
                                <div className="phone__icon">
                                    <a href="https://fb.com">


                                    </a>

                                    <a href="https://wa.me/+919947104710">


                                    </a>
                                    <a href="https://wa.me/+919947104710">+91 99471 04710</a>
                                </div>
                                <a href="tel:mail@dtaledecor.com">mail@dtaledecor.com</a>
                            </div>
                        </ul>
                        <button className="ctaBtn btn--yellow booking_form">Book an appointment</button>
                        <button className="ham-btn">
                            <span></span>
                        </button>
                    </div>
                </article>
            </header >
        </div >
    )
}

export default header;
