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
import LinearProgress from '@mui/material/LinearProgress';
// import logo from '../../../assets/image/order360.jpg';
import { useNavigate } from 'react-router-dom';



export default function MainPage() {
  const [categoryDataMain, setCategoryDataMain] = useState([]);
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch('https://66a0dcd07053166bcabd259b.mockapi.io/homeData');
        const data = await response.json();
        setCategoryDataMain(data);
      } catch (error) {
        console.log('Error fetching data from API:', error);
      }finally{
        setLoading(false);
      }
    };

    fetchCategoryData();

    const intervalId = setInterval(() => {
      fetchCategoryData();
    },500000);

    return () => clearInterval(intervalId);

  }, []);

  const sliderRef = useRef(null);
  
  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  const handlePopulerProduct = () => {
    navigate('/populerProduct');
  }

  const uniqueCategories = [...new Map(categoryDataMain.map(item => [item.category, item])).values()];

  
  const highRatedCategories = categoryDataMain.filter(item => item.rating >= 4 && item.rating <= 5);
  const shuffledHighRatedCategories = highRatedCategories.sort(() => Math.random() - 0.5);
  
  const handleProductDiv = (product) => {
    navigate(`/productDetail/${product.id}`);
  }

  return (
    <div className={styles.MainPage}>

      <Layout>
        {loading && <LinearProgress/>}
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
                {uniqueCategories.map((category) => (
                  <div key={category.id} className={styles.categoryItem} onClick={() => handleCategoryClick(category.category)}>
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
                  <button className={styles.MostPopulerMainHeaderBtn} onClick={handlePopulerProduct}>Show More</button>
              </div>
              <div className={styles.ProductGrid}>
               {shuffledHighRatedCategories.slice(0,8).map((item) => (
                  <div className={styles.ProductItem} key={item.id} onClick={() => handleProductDiv(item)}>
                    <img src={item.productImg} alt="Jasmine Soap" />
                    <h3>{item.productName}</h3>
                    <Rating name="read-only" value={item.rating} readOnly size="small" />
                    <p className={styles.Price}>₹{item.price}</p>
                  </div>
               ))}
              </div>
          </div>
          
          <div className={styles.brandCarousel}>
            <h2 style={{color:'black'}}>Popular Brands</h2>
            <Carousel
                autoPlay={true}
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                centerMode={true}
                centerSlidePercentage={20}
                emulateTouch={true}
                showIndicators={false}
                swipeable={true}
              >
              {categoryDataMain.map((item, index) => (
                <div key={index} className={styles.brandItem}>  
                  <img src={brandImage} alt={item.brand} />
                  <p className={styles.brandName}>{item.brand}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        </Layout>


        {/* <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <img src={logo} alt="Order 360 Logo" />
            </div>
            <div className={styles.newsletter}>
              <h3>Subscribe to our newsletter</h3>
              <form className={styles.subscribeForm}>
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
            <nav className={styles.footerNav}>
              <ul>
                <li><a href="/support">Support</a></li>
                <li><a href="/legal">Legal</a></li>
              </ul>
            </nav>
            <div className={styles.contact}>
              <h3>Contact</h3>
              <p>Surat Gujarat</p>
              <p>9898989898</p>
            </div>
          </div>
          <hr/>
          <div className={styles.copyright}>
            <p>yash</p>
          </div>
          
        </footer> */}
    
    </div>
  );
}
