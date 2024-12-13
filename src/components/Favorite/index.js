import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';

import './index.css';

const Favorite = ({ favorites = [], isUserLoggedIn }) => {
  return (
    <><Navbar />
    <div className="favorite-container">
      <h2>Your Favorites</h2>
      {!isUserLoggedIn ? (
        <p>
          You need to sign in to see your favorite items.{' '}
          <Link to="/signin">
            <span className="sign-in-link">Sign in</span>
          </Link>
        </p>
      ) : favorites.length === 0 ? (
        <p>Your favorite list is empty.</p>
      ) : (
        <ul className="favorite-list">
          {favorites.map((item) => (
            <li key={item.id} className="favorite-item">
              <img src={item.imageUrl} alt={item.title} className="favorite-item-image" />
              <div className="favorite-item-details">
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

export default Favorite;