import React, { useEffect, useState } from 'react'
import styles from './ProductDetailPage.module.css';
import Layout from '../Layout/Layout';
import { Rating, LinearProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function BuyNowPage() {

  const [count,setCount] = useState(0);
  const { productId } = useParams();
  const [product,setProduct] = useState([]);
  const [loading,setLoading] = useState(true);

  const handleIncremen = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    if(count > 0) setCount(count -1);
  }

  useEffect(() => {
    const fetchProductById = async() => {
      try{
        const response = await fetch(`https://66a0dcd07053166bcabd259b.mockapi.io/homeData/${productId}`);
        const data = await response.json();
        setProduct(data);
      }catch{
        console.log('error in fetching data from api in product deatil page');
      }finally{
        setLoading(false);
      }
    };
    fetchProductById();
  },[productId]);

  return (
    <>
        <Layout>
        <div className={styles.BuyNowPageMain}>
          { loading && <LinearProgress/> }
            <h4>{product.category}</h4>
          <div className={styles.productDetailContainer}>
            <div className={styles.imageSection}>
              <img src={product.productImg} alt="product" className={styles.mainImage} />
              <div className={styles.thumbnailContainer}>
                <img src={product.productImg} alt="product" className={styles.thumbnail} />
              </div>
            </div>
            <div className={styles.detailsSection}>
              <h1 className={styles.productTitle}>{product.productName}</h1>
              <p className={styles.productPrice}>₹ {product.price}</p>
              {product.rating !== undefined && (
                <Rating name="read-only" value={product.rating} precision={0.5} readOnly size="small" />
              )}
              <div className={styles.quantityContainer}>
                <label>Quantity:</label>
                <div className={styles.quantitySelector}>
                  <button onClick={handleIncremen}>+</button>
                  <span>{count}</span>
                  <button onClick={handleDecrement}>-</button>
                </div>
                <span className={styles.stockStatus}>Stock Out</span>
              </div>
              <div className={styles.actionButtons}>
                <button className={styles.addToCartButton} disabled>Add to Cart</button>
                <button className={styles.favoriteButton}>Favorite</button>
              </div>
            </div>
          </div>
          <div className={styles.tabContainer}>
              <h2>Product Details</h2>
            <hr/>
            <div className={styles.tabContainerbtn}>
              
            </div>
          </div>
        </div>
    </Layout>
    </>
  )
}
