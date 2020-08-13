import React from 'react';

const Footer = () => {

    function scrollTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__contact">
                                    <ul className="list-unstyled footer-widget__course-list">
                                        <li>
                                            <h2>Start</h2>
                                            <p>2018</p>
                                        </li>
                                        <li>
                                            <h2>Frequency</h2>
                                            <p>four times a year</p>
                                        </li>
                                        <li>
                                            <h2>Abbreviated key-title</h2>
                                            <p>Int. j. environ. pollut. environ. model.</p>
                                        </li>
                                        <li>

                                            <a href="/guide-for-authors" className="thm-btn">Guide for Authors</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__contact">
                                    <ul className="list-unstyled footer-widget__course-list">
                                        <li>
                                            <h2>e-ISSN</h2>
                                            <p>2618-6128</p>
                                        </li>
                                        <li>
                                            <h2>Website</h2>
                                            <p>https://ijepem.com</p>
                                        </li>
                                        <li>
                                            <h2>Publisher</h2>
                                            <p>Yasin Akın Ayturan</p>
                                        </li>
                                        <li>
                                            <a href="/ethics-statement" className="thm-btn"> Ethics and  Malpractice Statement</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__about">
                                    <h2 className="footer-widget__title">About</h2>
                                    <p className="footer-widget__text">International Journal of Environmental Pollution and Environmental Modelling is a peer reviewed quarterly journal since 2018
                                    </p>
                                    <div className="footer-widget__btn-block">
                                        <a href="/volumes" className="thm-btn">Volumes</a>
                                        <a href="/contact" className="thm-btn">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <p className="site-footer__copy">&copy; Copyright 2020 by <a target="_blank" href="https://sub.fyi/">Sub.fyi</a></p>
                        <div className="site-footer__social">

                            <div onClick={scrollTop} className="scroll-to-target site-footer__scroll-top"><i
                                className="kipso-icon-top-arrow"></i></div>


                            <a target="_blank" href="https://www.facebook.com/ijepem"><i className="fab fa-facebook-square"></i></a>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="search-popup">
                <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
                <div className="search-popup__inner">
                    <form action="#" className="search-popup__form">
                        <input type="text" name="search" placeholder="Type here to Search...."/>
                        <button type="submit"><i className="kipso-icon-magnifying-glass"></i></button>
                        <div className="cancel"><i className="fas fa-times-circle"></i></div>
                    </form>
                </div>
            </div>

        </div>


    );
}
export default Footer;