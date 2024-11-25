// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7">
              <div className="header__top__left">
                <p>Free shipping, 30-day return or refund guarantee.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-5">
              <div className="header__top__right">
                <div className="header__top__links">
                  <a href="#">Sign in</a>
                  <a href="#">FAQs</a>
                </div>
                <div className="header__top__hover">
                  <span>Usd <i className="arrow_carrot-down"></i></span>
                  <ul>
                    <li>USD</li>
                    <li>EUR</li>
                    <li>USD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="header__logo"> 
              <Link to="/"><img src="img/logo.png" alt="" /></Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <nav className="header__menu mobile-menu">
              <ul>
                <li className={isActive("/") ? "active" : ""}>
                  <Link to="/">Home</Link>
                </li>
                <li className={isActive("/shop") ? "active" : ""}>
                  <Link to="/shop">Shop</Link>
                </li>
                <li className={location.pathname.includes("page") ? "active" : ""}>
                  <Link to="#">Pages</Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/shop-details">Shop Details</Link>
                    </li>
                    <li>
                      <Link to="/shopping-cart">Shopping Cart</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Check Out</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li className={isActive("/blog") ? "active" : ""}>
                  <Link to="/blog">Blog</Link>
                </li>
                <li className={isActive("/contact") ? "active" : ""}>
                  <Link to="/contact">Contacts</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="header__nav__option">
              <a href="#" className="search-switch"><img src="img/icon/search.png" alt="" /></a>
              <a href="#"><img src="img/icon/heart.png" alt="" /></a>
              <a href="#"><img src="img/icon/cart.png" alt="" /> <span>0</span></a>
              <div className="price">$0.00</div>
            </div>
          </div>
        </div>
        <div className="canvas__open"><i className="fa fa-bars"></i></div>
      </div>
    </header>
  );
};

export default Header;
