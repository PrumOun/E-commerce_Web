import React from "react";

const HeroSection = () => {
  
  const heroItems = [
    {
      id: 1,
      bgImage: "./img/hero/hero-1.jpg",
      subtitle: "Summer Collection",
      title: "Fall - Winter Collections 2030",
      description:
        "A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.",
      link: "#",
    },
    {
      id: 2,
      bgImage: "./img/hero/hero-2.jpg",
      subtitle: "Summer Collection",
      title: "Fall - Winter Collections 2030",
      description:
        "A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.",
      link: "#",
    },
  ];

  return (
    <section className="hero">
      <div className="hero__slider owl-carousel">
        {heroItems.map((item) => (
          <div
            key={item.id}
            className="hero__items set-bg"
            style={{ backgroundImage: `url(${item.bgImage})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-8">
                  <div className="hero__text">
                    <h6>{item.subtitle}</h6>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <a href={item.link} className="primary-btn">
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
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
