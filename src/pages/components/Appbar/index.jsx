import React, { useState } from "react";
import styles from "./index.module.css";
import order360Image from "../../../assets/image/order360.jpg"; // Corrected relative path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faHome, faList, faHeart, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import test from '../../../assets/image/Slider.png';

export default function Index() {
  const [showClose, setShowClose] = useState(false);

  const handleInputChange = (e) => {
    setShowClose(e.target.value.length > 0);
  };

  const handleCloseClick = () => {
    document.getElementById("search").value = "";
    setShowClose(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles["navbar-left"]}>
          <img
            src={order360Image}
            alt="Order 360 Logo"
            className={styles.logo}
          />
          <a href="#home" className={styles["nav-link"]}>
            Home
          </a>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Categories</button>
            <div className={styles["dropdown-content"]}>
              <a href="#category1">Category 1</a>
              <a href="#category2">Category 2</a>
              <a href="#category3">Category 3</a>
            </div>
          </div>
          <a href="#offers" className={styles["nav-link"]}>
            Offers
          </a>
        </div>
        <div className={styles["navbar-right"]}>
          <div className={styles["search-container"]}>
            <FontAwesomeIcon
              icon={faSearch}
              className={styles["search-icon"]}
            />
            <input
              type="text"
              placeholder="Search..."
              className={styles.search}
              id="search"
              onChange={handleInputChange}
            />
            {showClose && (
              <FontAwesomeIcon
                icon={faTimes}
                className={styles["close-icon"]}
                id="close"
                onClick={handleCloseClick}
              />
            )}
          </div>
          <a href="#favorites" className={styles["nav-icon"]} id="heart">
            &#9825;
          </a>
          <a href="#profile" className={styles["nav-icon"]}>
            👤
          </a>
          <a href="#cart" className={styles["nav-icon"]}>
            🛒
          </a>
          <div className={styles["language-selector"]}>
            <span>English</span>
          </div>
        </div>
      </nav>
      <div>
        <img src={test} alt="test"/>
      </div>
      <footer className={styles.footer}>
        <a href="#home" className={styles["nav-icon"]}>
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </a>
        <a href="#categories" className={styles["nav-icon"]}>
          <FontAwesomeIcon icon={faList} />
          <span>Categories</span>
        </a>
        <a href="#cart" className={styles["nav-icon"]}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Cart</span>
        </a>
        <a href="#wishlist" className={styles["nav-icon"]}>
          <FontAwesomeIcon icon={faHeart} />
          <span>Wishlist</span>
        </a>
        <a href="#profile" className={styles["nav-icon"]}>
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </a>
      </footer>
    </>
  );
}
