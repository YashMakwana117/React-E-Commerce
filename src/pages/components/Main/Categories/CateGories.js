import React, { useEffect, useState } from 'react';
import styles from './CateGories.module.css';
import Layout from '../../Layout/Layout';
import { Rating } from '@mui/material'; // Import MUI Rating component
import { useNavigate, useParams } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import Drawer from '@mui/material/Drawer';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';


export default function CateGories() {

    const {category} = useParams();
    const [categoryWiseData,setCategoryWiseData] = useState([]);
    const [selectedPrice,setSelectedPrice] = useState(1000);
    const [selectBrand,setSelectBrand] = useState('');
    const [openDrawer,setOpenDrawer] = useState(false);
    const navigate = useNavigate();

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

    const handleChangePrice = (e,newValue) => {
        setSelectedPrice(newValue);
    };

    // const filterRangeData = categoryWiseData.filter(prod => prod.price <= selectedPrice);

    const handleChangeBrand = (e) => {
        const brand = e.target.value;
        setSelectBrand((prevSelectedBrands) => 
            prevSelectedBrands.includes(brand)
                ? prevSelectedBrands.filter((b) => b !== brand)
                : [...prevSelectedBrands, brand]
        );
    }

    const filterDataWithBrand = categoryWiseData.filter((bd) => {
        const matchRange = bd.price <= selectedPrice;
        const matchBrand = selectBrand.length === 0 || selectBrand.includes(bd.brand);
        return matchRange && matchBrand;
    });

    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);

    const handleProductDiv = (product) => {
      navigate(`/productDetail/${product.id}`);
    }

  return (
    <div className={styles.CategoryPage}>
      <Layout>
        <div className={styles.CategoryPageMain}>
          <h1>{category ? category : 'Category'}</h1>
          <h2 style={{color:'black'}} className={styles.hideHeading}>Explore All Products <span>({categoryWiseData.length} Products Found)</span></h2>
          
            <div className={styles.dispFilterIcon}>
                <h2 style={{color:'black'}}>Explore All Products <span>({categoryWiseData.length} Products Found)</span></h2>
                <button className={styles.iconBox} onClick={handleOpenDrawer}>
                    <FilterAltOutlinedIcon style={{fontSize:'40px',color:'#f23d13'}}/>
                </button>
            </div>


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
                <Slider
                value={selectedPrice}
                min={40}
                max={1000}
                onChange={handleChangePrice}
                aria-labelledby="input-slider"
                valueLabelDisplay="auto"
                />
                <div className={styles.priceRange}>
                  <span>0</span>
                  <span>{selectedPrice}</span>
                </div>
              </div>

              <div className={styles.brandFilter}>
                <h3>Brand</h3>
                {uniqueBrands.map((brand, index) => (
                    <ul key={index}>
                        <li><input type="checkbox" value={brand} checked={selectBrand.includes(brand)} onChange={handleChangeBrand} />{brand}</li>
                    </ul>
                ))}
              </div>
            </div>

            <div className={styles.productsGrid}>
                {filterDataWithBrand.map((card, index) => (
                <div key={index} className={styles.productCard} onClick={(e) => handleProductDiv(card)}>
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

      <Drawer open={openDrawer} onClose={handleCloseDrawer}>

        <div className={styles.filterSectionDrawer}>
            <h2 style={{color:'black'}}>Choose the option to Filter the Product</h2>
            <hr/>
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
                <Slider
                value={selectedPrice}
                min={40}
                max={1000}
                onChange={handleChangePrice}
                aria-labelledby="input-slider"
                valueLabelDisplay="auto"
                />
                <div className={styles.priceRange}>
                  <span>0</span>
                  <span>{selectedPrice}</span>
                </div>
              </div>

              <div className={styles.brandFilter}>
                <h3>Brand</h3>
                {uniqueBrands.map((brand, index) => (
                    <ul key={index}>
                        <li><input type="checkbox" value={brand} checked={selectBrand.includes(brand)} onChange={handleChangeBrand} />{brand}</li>
                    </ul>
                ))}
              </div>
              <button style={{color:'white',backgroundColor:'red',border:'none',borderRadius:'6px',width:'90px',height:'30px'}} onClick={handleCloseDrawer}>Close</button>
            </div>        
      </Drawer>




    </div>
  );
}
