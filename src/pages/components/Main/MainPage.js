import React, { useEffect, useRef, useState } from 'react';
import Layout from '../Layout/Layout';
import styles from './MainPage.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import test1 from '../../../assets/image/11.png';
import test2 from '../../../assets/image/12.png';
import test3 from '../../../assets/image/13.png';
import chips from '../../../assets/image/chips.jpg';
import gro from '../../../assets/image/super.jpg';
import tasty from '../../../assets/image/tasty.png';
import { Rating } from '@mui/material';
import brandImage from '../../../assets/image/dabur.png';


export default function MainPage() {
  const [categoryDataMain, setCategoryDataMain] = useState([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch('https://66a0dcd07053166bcabd259b.mockapi.io/homeData');
        const data = await response.json();
        setCategoryDataMain(data);
      } catch (error) {
        console.log('Error fetching data from API:', error);
      }
    };

    fetchCategoryData();
  }, []);

  const sliderRef = useRef(null);
  // const sliderBrand = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.MainPage}>
      <Layout>
        <div className={styles.MainPageMain}>
          <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            dynamicHeight={true}
            className={styles.carouselMain}
          >
            <div className={styles.testMain}>
              <img src={test1} alt='test1' />
            </div>
            <div>
              <img src={test2} alt='test2' />
            </div>
            <div>
              <img src={test3} alt='test3' />
            </div>
          </Carousel>

          <div className={styles.MainPageCategories}>
            <div className={styles.MainPageCategoriesHeader}>
              <h2 style={{ color: 'black' }}>Browse by Category</h2>
              <div className={styles.MainPagebtn}>
                <button onClick={() => scroll('left')} className={styles.navButton}>&lt;</button>
                <button onClick={() => scroll('right')} className={styles.navButton}>&gt;</button>
              </div>
            </div>
            <div className={styles.MainPageCategoriesDiv}>
              <div className={styles.categoriesContainer} ref={sliderRef}>
                {categoryDataMain.map((category) => (
                  <div key={category.id} className={styles.categoryItem}>
                    <img src={category.categoryImg} alt={category.category} />
                    <p>{category.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
            
          <div className={styles.belowCategoryImgMain}>
              <img src={chips} alt='chips' />
              <img src={gro} alt='chips' />
              <img src={tasty} alt='chips' />
          </div>
          
          <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            dynamicHeight={true}
            className={styles.carousel}
          >
            <div className={styles.bannerImg}>
              <img src={test1} alt='test1' />
            </div>
          </Carousel>
          
          <div className={styles.MostPopulerMain}>
              <div className={styles.MostPopulerMainHeader}>
                  <h2 style={{color:'black'}}>Most Populer</h2>
                  <button className={styles.MostPopulerMainHeaderBtn}>Show More</button>
              </div>
              <div className={styles.ProductGrid}>
               {categoryDataMain.slice(0,8).map((item) => (
                  <div className={styles.ProductItem}>
                    <img src={item.productImg} alt="Jasmine Soap" />
                    <h3>{item.productName}</h3>
                    <Rating name="read-only" value={item.rating} readOnly size="small" />
                    <p className={styles.Price}>₹{item.price}</p>
                  </div>
               ))}
              </div>
          </div>
          
          <div className={styles.MostPopulerMainBrand}>
            <div className={styles.MostPopulerMainBrandHeader}>
              <h2 style={{ color: 'black' }}>Popular Brands</h2>
              <div className={styles.MainPagebtn}>
                <button onClick={() => scroll('left')} className={styles.navButton}>&lt;</button>
                <button onClick={() => scroll('right')} className={styles.navButton}>&gt;</button>
              </div>
            </div>
            <div ref={sliderRef} className={styles.brandGrid}>
              {categoryDataMain.map((bd) => (
                <div key={bd.id} className={styles.brandItem}>
                  <img src={brandImage} alt='brand' className={styles.brandLogo} />
                  <p className={styles.brandName}>{bd.brand}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </Layout>
    </div>
  );
}
