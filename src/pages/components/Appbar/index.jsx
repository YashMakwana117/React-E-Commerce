import React, { useState } from 'react';
import './index.css';
import order360Image from '../../../assets/image/order360.jpg';  // Corrected relative path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Index() {
  const [showClose, setShowClose] = useState(false);

  const handleInputChange = (e) => {
    setShowClose(e.target.value.length > 0);
  };

  const handleCloseClick = () => {
    document.getElementById('search').value = '';
    setShowClose(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={order360Image} alt="Order 360 Logo" id="logo" />
          <a href="#home" className="nav-link">Home</a>
          <div className="dropdown">
            <button className="dropbtn">Categories</button>
            <div className="dropdown-content">
              <a href="#category1">Category 1</a>
              <a href="#category2">Category 2</a>
              <a href="#category3">Category 3</a>
            </div>
          </div>
          <a href="#offers" className="nav-link">Offers</a>
        </div>
        <div className="navbar-right">
          <div className="search-container" >
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search"
              id="search"
              onChange={handleInputChange}
            />
            {showClose && (
              <FontAwesomeIcon
                icon={faTimes}
                className="close-icon"
                id="close"
                onClick={handleCloseClick}
              />
            )}
          </div>
          <a href="#favorites" className="nav-icon" id='heart'>&#9825;</a>
          <a href="#profile" className="nav-icon">👤</a>
          <a href="#cart" className="nav-icon">🛒</a>
          <div className="language-selector">
            <span>English</span>
          </div>
        </div>
      </nav>
    </>
  );
}
