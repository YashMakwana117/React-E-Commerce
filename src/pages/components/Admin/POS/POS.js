import React, { useEffect, useState } from "react";
import styles from "./POS.module.css";
import Topbar from "../TopBar/TopBar";
import Rating from "@mui/material/Rating";
import LinearProgress from '@mui/material/LinearProgress';
import Drawer from '@mui/material/Drawer';
import Slide from '@mui/material/Slide';
import animation from '../../../../assets/image/walking.gif';
import Modal from '@mui/material/Modal';

export default function POS() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [selectCatagory,setSelectCatagory] = useState('');
  const [selectBrand,setSelectBrand] = useState('');
  const [searchProdutc,setSearchProduct] = useState('');
  const [openDrawer,setOpenDrawer] = useState(false);
  const [openModal,setOpenModal] = useState(false);
  const [modalProduct,setModalProduct] = useState(null);

  useEffect(() => {
    const fetchPOSData = async () => {
      try {
        const response = await fetch(
          "https://669f6799b132e2c136fdb7e8.mockapi.io/pos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsondata = await response.json();
        setData(jsondata);
      } catch (error) {
        console.error("Error fetching POS data:", error);
      }finally{
        setLoading(false);
      }
    };
    fetchPOSData();
  }, []);

  const filteredProduct = data.filter((product) => {
    const matchCatregory = selectCatagory === '' || product.category === selectCatagory;
    const matchBrand = selectBrand === '' || product.brand === selectBrand;
    const matchSearchProd = product.productName.toLowerCase().includes(searchProdutc.toLowerCase());
    return matchCatregory && matchBrand && matchSearchProd;
  });

  const handleFilterProduct = (e) => {
    setSelectCatagory(e.target.value);
  }

  const handleFilterBrand = (e) => {
    setSelectBrand(e.target.value);
  }

  const handleFilterSearch = (e) => {
    setSearchProduct(e.target.value);
  }

  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);
  const handleOpenModal = (pro) => {
        setModalProduct(pro);
        setOpenModal(true);
    };
  const handleCloseModal = () => {
        setModalProduct(null);
        setOpenModal(false)
    };

  return (
    <>
      <Topbar />
      <div className={styles.posContainer}>
        <div className={styles.posDrawerComponent}>
            <h2>Dashboard/POS</h2>
            <button onClick={handleOpenDrawer}>OrderSummary</button>
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search Here..."
            style={{ width: 390 }}
            value={searchProdutc}
            onChange={handleFilterSearch}
          />
          
          <select className={styles.posSelect} value={selectCatagory} onChange={handleFilterProduct}>
            <option value=''>Select Category</option>
            { [...new Set(data.map(cat => cat.category))] // Use Set to get unique categories
                .map((category, index) => (
                <option key={index} value={category}>{category}</option>
                ))
            }
          </select>
          <select className={styles.posSelect} value={selectBrand} onChange={handleFilterBrand}>
            <option value=''>Select Brand</option>
            { [...new Set(data.map(bd => bd.brand))]
                .map((brand,index) => (
                    <option key={index} value={brand}>{brand}</option>
                ))
            }
            
          </select>
        </div>
        { loading && <LinearProgress/> }
        <div className={styles.direction}>
          {filteredProduct.map((product) => (
            <div key={product.id} className={styles.productCard} onClick={() => handleOpenModal(product)}>
              <img src={product.imageURLs} alt={product.name} />
              <div className={styles.productDetails}>
                <h3>{product.productName}</h3>
                <Rating
                  name="product-rating"
                  value={product.rating}
                  readOnly
                />
                <p>₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* ----------------------------------------------------- */}
      <Drawer anchor="right" open={openDrawer} onClose={handleCloseDrawer}>
        <Slide direction="left" in={openDrawer}>
      <div className={styles.orderSummary}>
          <div className={styles.orderContent}>
            <div className={styles.customerType}>
              <select className={styles.walkingcostmer}>
                <option>Walking Customer</option>
              </select>
            </div>
            <div className={styles.boxIcon}>
              <img src={animation} alt="walking" />
            </div>
            <div className={styles.orderDetails}>
              <div className={styles.orderItem}>
                <span>SubTotal</span>
                <span>₹0.00</span>
              </div>
              <div className={styles.orderItem}>
                <span>Tax</span>
                <span>₹0.00</span>
              </div>
              <div className={styles.orderItem}>
                <span>Discount</span>
                <span>₹0.00</span>
              </div>
              <div className={styles.orderItem}>
                <span>Total</span>
                <span>₹0.00</span>
              </div>
                <button onClick={handleCloseDrawer}>Close</button>
            </div>
          </div>
        </div>
        </Slide>
      </Drawer>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="product-modal-title"
        aria-describedby="product-modal-description"
        >
        <div className={styles.modalContent}>
            {modalProduct && (
            <>
                <div className={styles.modalImageContainer}>
                <img src={modalProduct.imageURLs} alt={modalProduct.productName} className={styles.modalMainImage} />
                <div className={styles.modalThumbnail}>
                    <img src={modalProduct.imageURLs} alt={modalProduct.productName} />
                </div>
                </div>
                <div className={styles.modalProductDetails}>
                <h2 id="product-modal-title" style={{color:'black'}}>{modalProduct.productName}</h2>
                <p className={styles.modalPrice}>₹{modalProduct.price}</p>
                <Rating
                    name="product-rating"
                    value={modalProduct.rating}
                    readOnly
                />
                <div className={styles.modalQuantity}>
                    <span>Quantity:</span>
                    <button className={styles.quantityButton}>-</button>
                    <span>1</span>
                    <button className={styles.quantityButton}>+</button>
                    <span className={styles.stockStatus}>Stock Out</span>
                </div>
                <button className={styles.addToCartButton}>Add to Cart</button>
                </div>
                <button onClick={handleCloseModal} className={styles.closeButton}>×</button>
            </>
            )}
        </div>
        </Modal>
    </>
  );
}
