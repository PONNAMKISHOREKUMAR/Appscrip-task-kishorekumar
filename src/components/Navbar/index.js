import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFavorite } from 'react-icons/gr';
import { FiSearch } from 'react-icons/fi';
import { IoBagRemoveOutline, IoPerson } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaBuyNLarge } from "react-icons/fa";
import './index.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-top">
        <Link to='/' className='website-link'>
        <FaBuyNLarge className='icon-logo' />
        </Link>
      </div>
      <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
        <li className="menu-item">
          <Link to="/">SHOP</Link>
        </li>
        <li className="menu-item">
          <Link to="/skills">SKILLS</Link>
        </li>
        <li className="menu-item">
          <Link to="/stories">STORIES</Link>
        </li>
        <li className="menu-item">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="menu-item">
          <Link to="/contact">CONTACT US</Link>
        </li>
      </ul>
      <div className="navbar-bottom">
        <ul className="header-icons-container">
          <li className="header-icon-list">
            <FiSearch className="icon"/>
          </li>
          <li className="header-icon-list">
            <Link to="/favorite">
              <GrFavorite className="icon" />
            </Link>
          </li>
          <li className="header-icon-list">
            <Link to="/cart">
              <IoBagRemoveOutline className="icon" />
            </Link>
          </li>
          <li className="header-icon-list">
            <Link to="/profile">
              <IoPerson className="icon" />
            </Link>
          </li>
          <select className="select-items">
            <option>Eng</option>
            <option>Tel</option>
            <option>Hin</option>
          </select>
        </ul>
        <GiHamburgerMenu className="hamburger-icon" onClick={toggleMenu} />
      </div>
      
    </nav>
  );
};

export default Navbar;