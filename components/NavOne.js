'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function NavOne() {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        const mobileMenu = () => {
            const mainNavToggler = document.querySelector(".menu-toggler");
            const mainNav = document.querySelector(".main-navigation");

            if (mainNavToggler && mainNav) {
                mainNavToggler.addEventListener("click", () => {
                    mainNav.style.display = mainNav.style.display !== "block" ? "block" : "none";
                });
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        mobileMenu(); // Call it after ensuring the elements exist in the DOM

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const searchButton = () => {
            const searchToggle = document.querySelector(".search-toggle");
            const searchPopup = document.querySelector(".search-popup");
            const searchClose = document.querySelector(".cancel");
            const searchOverlay = document.querySelector(".search-overlay");

            if (searchToggle && searchPopup && searchClose && searchOverlay) {
                searchToggle.addEventListener("click", () => {
                    searchPopup.classList.add('active');
                });

                searchClose.addEventListener("click", () => {
                    searchPopup.classList.remove('active');
                });

                searchOverlay.addEventListener("click", () => {
                    searchPopup.classList.remove('active');
                });
            }
        };

        searchButton(); // Call it after ensuring the elements exist in the DOM
    }, []);

    return (
        <header className="site-header site-header__header-one ">
            <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container clearfix">
                    <div className="logo-box clearfix">
                        <Link href="/" className="navbar-brand">
                            <img src="/logo_black_500x500.png" className="main-logo" width="100" alt="IJEPEM" /> <h1>IJEPEM</h1>
                        </Link>
                        <div className="header__social">
                            <Link href="/indexes/"><i className="fas fa-book"></i></Link>
                            <Link href="/history/"><i className="fas fa-history"></i></Link>
                        </div>
                        <button className="menu-toggler">
                            <span className="kipso-icon-menu"></span>
                        </button>
                    </div>
                    <div className="main-navigation">
                        <ul className=" navigation-box">
                            <li>
                                <Link href="/">Homepage</Link>
                            </li>
                            <li>
                                <a href="https://dergipark.org.tr/en/pub/ijepem/archive">Volumes</a>
                            </li>
                            <li>
                                <Link href="/editorial-team/">Editorial Team</Link>
                            </li>
                            <li>
                                <Link href="/aim-and-scope/">Aim and Scope</Link>
                            </li>
                            <li>
                                <Link href="/contact/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="site-header__decor">
                <div className="site-header__decor-row">
                    <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-1"></div>
                    </div>
                    <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-2"></div>
                    </div>
                    <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-3"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavOne;
