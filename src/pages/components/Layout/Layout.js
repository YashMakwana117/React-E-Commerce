// Layout.js
import React, { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import order360Image from "../../../assets/image/order360.jpg";
import Drawer from '@mui/material/Drawer';
import profile from '../../../assets/image/avatar.png'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useNavigate } from "react-router-dom";


const Layout = ({ children }) => {
    const [openCategoryDrawer,setOpenCategoryDrawer] = useState(false);
    const [openProfileDrawer,setOpenProfileDrawer] = useState(false);
    const [categoryData,setCategoryData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpenCategoryDrawer = () => setOpenCategoryDrawer(true);
    const handleCloseCategoryDrawer = () => setOpenCategoryDrawer(false);
    const openProfile = () => setOpenProfileDrawer(true);
    const closeProfile = () => setOpenProfileDrawer(false);

    useEffect(() => {
        const fetchCategoryData = async () => {
            try{
                const respons = await fetch('https://66a0dcd07053166bcabd259b.mockapi.io/homeData');
                const data = await respons.json();
                setCategoryData(data);
            }catch{
                console.log('error not fetching data from api category in drawer');
            }
        }
        fetchCategoryData();
    },[]);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const uniqueCategories = [...new Map(categoryData.map(item => [item.category, item])).values()];

    const handleCategory = (category) => {
      navigate(`/category/${encodeURIComponent(category)}`);
    }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles["navbar-left"]}>
          <img src={order360Image} alt="Order 360 Logo" className={styles.logo} />
          <a href="/Home" className={styles["nav-link"]}>Home</a>


          <div className={styles.dropdown}>
            <button className={styles.dropbtn} onClick={toggleDropdown}>Categories</button>
            {isOpen && (
              <div className={styles.dropdownContent} >
                {uniqueCategories.map((optionCategory) => (
                  <div key={optionCategory.id} className={styles.option} onClick={() => handleCategory(optionCategory.category)}>
                    <img src={optionCategory.categoryImg} alt={optionCategory.category} className={styles.icon} />
                    <div className={styles.text} >
                      <h3>{optionCategory.category}</h3>
                      <p>{optionCategory.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <a href="/" className={styles["nav-link"]}>Offers</a>
        </div>
        <div className={styles["navbar-right"]}>
          <div className={styles["search-container"]}>
            <FontAwesomeIcon icon={faSearch} className={styles["search-icon"]} />
            <input type="text" placeholder="Search..." className={styles.search} id="search" />
          </div>
          <a href="/" className={styles["nav-icon"]} id="heart">&#9825;</a>
          <a href="/" className={styles["nav-icon"]}>👤</a>
          <a href="/" className={styles["nav-icon"]}>🛒</a>
          <div className={styles["language-selector"]}><span>English</span></div>
        </div>
      </nav>
      <div className={styles.content}>
        {children}
      </div>
      <footer className={styles.footer}>
        <a href="/" className={styles["nav-icon"]}>
          <HomeOutlinedIcon/>
          <span>Home</span>
        </a>
        <a href="#home" className={styles["nav-icon"]} onClick={handleOpenCategoryDrawer}>
          <MenuOutlinedIcon/>
          <span>Categories</span>
        </a>
        <a href="/" className={styles["nav-icon"]}>
          <ShoppingCartOutlinedIcon/>
          <span>Cart</span>
        </a>
        <a href="/" className={styles["nav-icon"]}>
          <FavoriteBorderOutlinedIcon/>
          <span>Wishlist</span>
        </a>
        <a href="#Home" className={styles["nav-icon"]} onClick={openProfile}>
          <Person2OutlinedIcon/>
          <span>Profile</span>
        </a>
      </footer>
        <Drawer open={openCategoryDrawer} onClose={handleCloseCategoryDrawer}>
            <div className={styles.DrawerMain}>
                <h2>Categories</h2>
                <hr />
                <div className={styles.DrawerMainCateList}>
                    {uniqueCategories.map((cat,index) => (
                      <div className={styles.categoryLink} key={index} onClick={() => handleCategory(cat.category)}>{cat.category}</div>
                    ))}
                </div>
            </div>
                <button style={{color:'white',backgroundColor:'red',border:'none',borderRadius:'6px',width:'90px',height:'30px',marginTop:'30px',marginLeft:'10px'}} onClick={handleCloseCategoryDrawer}>Close</button>
        </Drawer>

        <Drawer open={openProfileDrawer} onClose={closeProfile}>
            <div className={styles.DrawerMainProfiles}>
                <div className={styles.profileHeader}>
                <div className={styles.profileImage}>
                    <img src={profile} alt="profile"/>
                </div>
                <h3 className={styles.profileName}>John Doe</h3>
                <p className={styles.profilePhone}>+919898989899</p>
                </div>
                <nav className={styles.profileNav}>
                <ul>
                    <li><button className={styles.navItem}><span className={styles.icon}>📊</span> Dashboard</button></li>
                    <li><button className={styles.navItem}><span className={styles.icon}>📜</span> Order History</button></li>
                    <li><button className={styles.navItem}><span className={styles.icon}>↩️</span> Return Orders</button></li>
                    <li><button className={styles.navItem}><span className={styles.icon}>ℹ️</span> Account Info</button></li>
                    <li><button className={styles.navItem}><span className={styles.icon}>🔑</span> Change Password</button></li>
                    <li><button className={styles.navItem}><span className={styles.icon}>📍</span> Address</button></li>
                    <li><button className={styles.navItem}><span className={styles.icon}>🚪</span> Logout</button></li>
                </ul>
                </nav>
            </div>
        </Drawer>

    </>
  );
};

export default Layout;
