import React from 'react';

const categoriesSection = () => (
  <section className="hero">
    <div className="hero__slider owl-carousel">
      <div className="hero__items set-bg" style={{ backgroundImage: "url('img/hero/hero-1.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-7 col-md-8">
              <div className="hero__text">
                <h6>Summer Collection</h6>
                <h2>Fall - Winter Collections 2030</h2>
                <p>
                  A specialist label creating luxury essentials. Ethically crafted
                  with an unwavering commitment to exceptional quality.
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
      {/* Add more slides if needed */}
    </div>
  </section>
);

export default categoriesSection;

