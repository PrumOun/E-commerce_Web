import React from "react";

const BannerSection = () => {
  const banners = [
    {
      id: 1,
      imgSrc: "img/banner/banner-1.jpg",
      title: "Clothing Collections 2030",
      link: "#",
      className: "",
    },
    {
      id: 2,
      imgSrc: "img/banner/banner-2.jpg",
      title: "Accessories",
      link: "#",
      className: "banner__item--middle",
    },
    {
      id: 3,
      imgSrc: "img/banner/banner-3.jpg",
      title: "Shoes Spring 2030",
      link: "#",
      className: "banner__item--last",
    },
  ];

  return (
    <section className="banner spad">
      <div className="container">
        <div className="row">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`col-lg-${banner.id === 2 ? "5" : "7"} ${
                banner.id === 1 ? "offset-lg-4" : ""
              }`}
            >
              <div className={`banner__item ${banner.className}`}>
                <div className="banner__item__pic">
                  <img src={banner.imgSrc} alt={banner.title} />
                </div>
                <div className="banner__item__text">
                  <h2>{banner.title}</h2>
                  <a href={banner.link}>Shop now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
