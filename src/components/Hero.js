// src/components/Hero.js
import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const Hero = () => {
  useEffect(() => {
    // Initialize or reinitialize Owl Carousel
    const $ = window.jQuery;
    if ($ && $('.hero__slider').length > 0) {
      $('.hero__slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav: true,
        navText: ['<span class="arrow_left"></span>', '<span class="arrow_right"></span>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
      });
    }
  }, []); // Runs only when the component is mounted

  return (
    <section className="hero">
      <div className="hero__slider owl-carousel">
        <div className="hero__items set-bg" style={{ backgroundImage: 'url(img/hero/hero-1.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-8">
                <div className="hero__text">
                  <h6>Summer Collection</h6>
                  <h2>Fall - Winter Collections 2030</h2>
                  <p>
                    A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to
                    exceptional quality.
                  </p>
                  <a href="#" className="primary-btn">
                    Shop now <span className="arrow_right"></span>
                  </a>
                  <div className="hero__social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__items set-bg" style={{ backgroundImage: 'url(img/hero/hero-2.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-7 col-md-8">
                <div className="hero__text">
                  <h6>Summer Collection</h6>
                  <h2>Fall - Winter Collections 2030</h2>
                  <p>
                    A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to
                    exceptional quality.
                  </p>
                  <a href="#" className="primary-btn">
                    Shop now <span className="arrow_right"></span>
                  </a>
                  <div className="hero__social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
