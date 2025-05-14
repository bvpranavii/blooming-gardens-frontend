import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">
          <h1>🌸 Blooming Gardens</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#bouquets">Bouquets</a></li>
            <li><a href="#cart">Cart</a></li>
            <li><a href="#shop-now">Shop Now</a></li>
          </ul>
        </nav>
      </header>

      {/* Caption */}
      <section id="home" className="home">
        <p className="shop-caption">Blooming moments, delivered with love 🌼🌿</p>
      </section>

      {/* Bouquets Section */}
      <section id="bouquets" className="bouquets">
        <h2>Explore Our Beautiful Bouquets</h2>
        <ProductList />
      </section>

      {/* Cart Section */}
      <section id="cart" className="cart">
        <h2>Your Shopping Cart</h2>
        {/* Cart details will be shown here */}
      </section>

      {/* Shop Now Section */}
      <section id="shop-now" className="shop-now">
        <h2>Shop Now & Get Free Shipping!</h2>
        <button className="shop-now-btn">Start Shopping</button>
      </section>
    </div>
  );
}

export default App;
