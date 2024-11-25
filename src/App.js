import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Preloader from './components/Preloader';
import Header from './components/Header';
import OffcanvasMenu from './components/OffcanvasMenu';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal ';


import Shop from './components/Shop';
import ShopDetail from './components/ShopDetail';
import ShoppingCart from './components/ShoppingCart';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import CheckOut from './components/CheckOut';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import ProductComponent from './components/ProductComponent';
import Hero from './components/Hero';




class App extends React.Component {
  render() {
    return (
      <Router>
        <Preloader />
        <OffcanvasMenu />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop-details" element={<ShopDetail />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/blog" element={<BlogDetail />} />
          <Route path="/blog-details" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <SearchModal />
      </Router>
    );
  }
}

export default App;
