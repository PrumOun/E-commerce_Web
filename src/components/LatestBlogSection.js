import React from 'react';

const LatestBlogSection = () => {
    const blogs = [
      {
        date: "16 February 2020",
        title: "What Curling Irons Are The Best Ones",
        img: "img/blog/blog-1.jpg",
      },
      {
        date: "21 February 2020",
        title: "Eternity Bands Do Last Forever",
        img: "img/blog/blog-2.jpg",
      },
      {
        date: "28 February 2020",
        title: "The Health Benefits Of Sunglasses",
        img: "img/blog/blog-3.jpg",
      },
    ];
  
    return (
      <section className="latest spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Latest News</span>
                <h2>Fashion New Trends</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs.map((blog, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog__item">
                  <div
                    className="blog__item__pic set-bg"
                    style={{ backgroundImage: `url(${blog.img})` }}
                  ></div>
                  <div className="blog__item__text">
                    <span>
                      <img src="img/icon/calendar.png" alt="Calendar" /> {blog.date}
                    </span>
                    <h5>{blog.title}</h5>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default LatestBlogSection;
  