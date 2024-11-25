import React, {useContext} from "react";
import { ProductContext } from '../contexts/ProductContext';
//import "./ProductSection.css"; // Add appropriate CSS imports

const products = [
  {
    id: 1,
    name: "Piqué Biker Jacket",
    price: "$67.24",
    image: "img/product/product-1.jpg",
    label: "New",
    rating: 0,
    colors: ["pc-1", "pc-2", "pc-3"],
    category: "new-arrivals",
  },
  {
    id: 2,
    name: "Diagonal Textured Cap",
    price: "$60.9",
    image: "img/product/product-4.jpg",
    rating: 0,
    colors: ["pc-10", "pc-11", "pc-12"],
    category: "hot-sales",
  },
  {
    id: 3,
    name: "Multi-pocket Chest Bag",
    price: "$43.48",
    image: "img/product/product-3.jpg",
    label: "Sale",
    rating: 4,
    colors: ["pc-7", "pc-8", "pc-9"],
    category: "new-arrivals",
  },
  {
    id: 4,
    name: "Multi-pocket Chest Bag",
    price: "$43.48",
    image: "img/product/product-2.jpg",
    label: "Sale",
    rating: 4,
    colors: ["pc-7", "pc-8", "pc-9"],
    category: "hot-sales",
  },
  {
    id: 5,
    name: "Multi-pocket Chest Bag",
    price: "$43.48",
    image: "img/product/product-5.jpg",
    label: "Sale",
    rating: 4,
    colors: ["pc-7", "pc-8", "pc-9"],
    category: "new-arrivals",
  },
  // Add more products as needed
];

const ProductSection = () => {

  const categories = [
    { name: "Best Sellers", filter: "*" },
    { name: "New Arrivals", filter: ".new-arrivals" },
    { name: "Hot Sales", filter: ".hot-sales" },
  ];

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="filter__controls">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={index === 0 ? "active" : ""}
                  data-filter={category.filter}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row product__filter">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductItem = ({ product }) => {
  const { name, price, image, label, rating, colors, category } = product;

  return (
    <div className={`col-lg-3 col-md-6 col-sm-6 mix ${category}`}>
      <div className="product__item">
        <div
          className="product__item__pic set-bg"
          style={{ backgroundImage: `url(${image})` }}
        >
          {label && <span className="label">{label}</span>}
          <ul className="product__hover">
            <li>
              <a href="#">
                <img src="img/icon/heart.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/icon/compare.png" alt="" /> <span>Compare</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/icon/search.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="product__item__text">
          <h6>{name}</h6>
          <a href="#" className="add-cart">
            + Add To Cart
          </a>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={index < rating ? "fa fa-star" : "fa fa-star-o"}
              ></i>
            ))}
          </div>
          <h5>{price}</h5>
          <div className="product__color__select">
            {colors.map((color) => (
              <label key={color} htmlFor={color}>
                <input type="radio" id={color} />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
