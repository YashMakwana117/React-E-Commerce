import React, { useEffect, useState } from 'react';
import styles from './CateGories.module.css';
import Layout from '../../Layout/Layout';
import { Rating } from '@mui/material'; // Import MUI Rating component
import productImg from '../../../../assets/image/roll.png'
import { useParams } from 'react-router-dom';

export default function CateGories() {

    const {category} = useParams();
    const [categoryWiseData,setCategoryWiseData] = useState([]);

    useEffect(() => {
        const fetchProductDataCategoryWise = async () => {
            try{
                const response = await fetch('https://66a0dcd07053166bcabd259b.mockapi.io/homeData');
                const data = await response.json();
                const filtterData = data.filter(item => item.category === decodeURIComponent(category));
                setCategoryWiseData(filtterData);
            }catch{
                console.log('error in category wise data fetching');
            }
        };
        fetchProductDataCategoryWise();
    },[category]);

    const uniqueBrands = [...new Set(categoryWiseData.map(item => item.brand))];

  return (
    <div className={styles.CategoryPage}>
      <Layout>
        <div className={styles.CategoryPageMain}>
          <h1>{category ? category : 'Category'}</h1>
          <h2 style={{color:'black'}}>Explore All Products <span>({categoryWiseData.length} Products Found)</span></h2>
          
          <div className={styles.mainContent}>
            <div className={styles.filterSection}>
              <div className={styles.sortBy}>
                <h3>Sort By</h3>
                <ul>
                  <li><input type="radio" name="sort" /> Newest</li>
                  <li><input type="radio" name="sort" /> Price Low To High</li>
                  <li><input type="radio" name="sort" /> Price High To Low</li>
                  <li><input type="radio" name="sort" /> Top Rated</li>
                </ul>
              </div>

              <div className={styles.priceFilter}>
                <h3>Price</h3>
                <input type="range" min="0" max="649" />
                <div className={styles.priceRange}>
                  <span>0</span>
                  <span>649</span>
                </div>
              </div>

              <div className={styles.brandFilter}>
                <h3>Brand</h3>
                {uniqueBrands.map((brand, index) => (
                    <ul key={index}>
                        <li><input type="checkbox" />{brand}</li>
                    </ul>
                ))}
              </div>
            </div>

            <div className={styles.productsGrid}>
                {categoryWiseData.map((card, index) => (
                <div key={index} className={styles.productCard}>
                    <img src={card.productImg} alt={card.productName} className={styles.productImage} />
                    <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{card.productName}</h3>
                    <div className={styles.ratingContainer}>
                        <Rating name="read-only" value={card.rating} readOnly size="small" />
                    </div>
                    <p className={styles.price}>₹{card.price}</p>
                    </div>
                </div>
                ))}
            </div>

          </div>
        </div>
      </Layout>
    </div>
  );
}
