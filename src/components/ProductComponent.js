import React, { useEffect, useState } from "react";

const ProductComponent = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('men'); // To track the active filter

    // Fetch products from Fake Store API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err));
    }, []);

    // Function to handle filter changes
    const handleFilterChange = (category) => {
        setFilter(category);
    };

    return (
        <section className="product spad">
            <div className="container">
                {/* Filter Controls */}
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="filter__controls">
                            <li
                                className={filter === 'men' ? "active" : ""}
                                onClick={() => handleFilterChange('men')}
                            >
                                Men
                            </li>

                            <li
                                className={filter === 'women' ? "active" : ""}
                                onClick={() => handleFilterChange('women')}
                            >
                                Women
                            </li>
                            <li
                                className={filter === 'jewelery' ? "active" : ""}
                                onClick={() => handleFilterChange('jewelery')}
                            >
                                Jewelry
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Products Display */}
                <div className="row product__filter">
                    {products
                        .filter(product => {
                            if (filter === 'men') return product.category === 'men\'s clothing' ;
                            if (filter === 'women') return product.category === 'women\'s clothing';
                            if (filter === 'jewelery') return product.category === 'jewelery';
                            return false;
                        })
                        .map(product => (
                            <div className="col-lg-3 col-md-6 col-sm-6 mix" key={product.id}>
                                <div className="product__item">
                                    <div className="product__item__pic">
                                        <img src={product.image} alt={product.title} />
                                        <span className="label">Sale</span>
                                        <ul className="product__hover">
                                            <li><a href="#"><img src="img/icon/heart.png" alt="" /></a></li>
                                            <li><a href="#"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                                            <li><a href="#"><img src="img/icon/search.png" alt="" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6>{product.title}</h6>
                                        <a href="#" className="add-cart">+ Add To Cart</a>
                                        <div className="rating">
                                            {[...Array(5)].map((_, i) => (
                                                <i
                                                    key={i}
                                                    className={`fa ${i < Math.round(product.rating?.rate || 0) ? 'fa-star filled' : 'fa-star-o'}`}
                                                ></i>
                                            ))}
                                        </div>
                                        <h5>${product.price.toFixed(2)}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default ProductComponent;
