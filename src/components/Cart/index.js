import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';

import './index.css';

const Cart = ({ cartItems = [], isUserLoggedIn }) => {
  return (
    <><Navbar />
    <div className="cart-container">
      <h2>Your Shopping Bag</h2>
      {!isUserLoggedIn ? (
        <p>
          You need to sign in to see your cart items.{' '}
          <Link to="/signin">
            <span className="sign-in-link">Sign in</span>
          </Link>
        </p>
      ) : cartItems.length === 0 ? (
        <p>Your shopping bag is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Cart;