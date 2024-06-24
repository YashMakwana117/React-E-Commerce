import React, { useState } from 'react';
import img from '../../../assets/image/11.png';
import health from '../../../assets/image/health.png';
import ayurvedicMedicine from '../../../assets/image/ayurvedic.png'; // Add your image paths here
import ayurvedicKadha from '../../../assets/image/ayurvedic.png'; // Add your image paths here
import tablet from '../../../assets/image/tablet.png'; // Add your image paths here
import digestiveAids from '../../../assets/image/digestive.png'; // Add your image paths here
import hairOil from '../../../assets/image/hairoil.png'; // Add your image paths here
import chips from '../../../assets/image/chips.png';
import roll from '../../../assets/image/roll.png';
import dabur from '../../../assets/image/dabur.png';
import './MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid, faStar } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

export default function MainPage() {
    const [isHovered, setIsHovered] = useState(false);

    const [favorites, setFavorites] = useState({
        'GK Fabric RollOn 8ml': false,
        'Odonil Blocks Fruit Blast Mix 50g': false,
        'GMEN Oil Clear Facewash - 50g': false,
        'Baby Lips Pink Lolita': false
    });

    // Function to toggle favorite status of a product
    const toggleFavorite = (productName) => {
        setFavorites(prevFavorites => ({
            ...prevFavorites,
            [productName]: !prevFavorites[productName]
        }));
    };

    return (
        <>
            <div className="banner-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className="banner-content">
                    <div className="grocery-items">
                        <img src={img} alt="Indian Groceries" />
                    </div>
                </div>
                {isHovered && (
                    <div className="banner-controls">
                        <button className="control-btn" id="btnleft"><FontAwesomeIcon icon={faAngleLeft} id='faiconl' /></button>
                        <button className="control-btn" id="btnright"><FontAwesomeIcon icon={faAngleRight} id='faiconr' /></button>
                    </div>
                )}
            </div>
            <div className='container'>
                <div className='cont'>
                    <h1>Browse by Categories</h1>
                    <div className='btn-container'>
                        <button className="btn" id="countleft"><FontAwesomeIcon icon={faAngleLeft} id='faiconl' /></button>
                        <button className="btn" id="countright"><FontAwesomeIcon icon={faAngleRight} id='faiconr' /></button>
                    </div>
                </div>
                <div className="categories">
                    <div className="category-item">
                        <img src={health} alt="Health Care" className="category-image" />
                        <div className="category-text">
                            <a href='#' id='aa'>Health Care</a>
                        </div>
                    </div>
                    <div className="category-item">
                        <img src={ayurvedicMedicine} alt="Ayurvedic Medicine" className="category-image" />
                        <div className="category-text">
                            <a href='#' id='aa'>Ayurvedic Medicine</a>
                        </div>
                    </div>
                    <div className="category-item">
                        <img src={ayurvedicKadha} alt="Ayurvedic Kadha" className="category-image" />
                        <div className="category-text">
                            <a href='#' id='aa'>Ayurvedic Kadha</a>
                        </div>
                    </div>
                    <div className="category-item">
                        <img src={tablet} alt="Tablet" className="category-image" />
                        <div className="category-text">
                            <a href='#' id='aa'>Tablet</a>
                        </div>
                    </div>
                    <div className="category-item">
                        <img src={digestiveAids} alt="Digestive Aids" className="category-image" />
                        <div className="category-text">
                            <a href='#' id='aa'>Digestive Aids</a>
                        </div>
                    </div>
                    <div className="category-item">
                        <img src={hairOil} alt="Hair Oil" className="category-image" />
                        <div className="category-text">
                            <a href='#' id='aa'>Hair Oil</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='thimg'>
                <div className='cat-item'>
                    <img src={chips} alt='Chips Image' className='chips'></img>
                </div>
                <div className='cat-item'>
                    <img src={chips} alt='Chips Image' className='chips'></img>
                </div>
                <div className='cat-item'>
                    <img src={chips} alt='Chips Image' className='chips'></img>
                </div>
            </div>
            <div className="banner-container">
                <div className="banner-content">
                    <div className="grocery-items">
                        <img src={img} alt="Indian Groceries" />
                    </div>
                </div>
            </div>
            <div className='popular'>
                <h1 id='mostPopular'>Most Popular</h1>
                <div className='btn-show'>
                    <button className="show" id="showmore">show more</button>
                </div>
            </div>


            <div className="product-grid">
                <div className="product-card">
                    <img src={roll} alt="GK Fabric RollOn 8ml" />
                    <div className="product-details">
                        <div className="favorite-icon" onClick={() => toggleFavorite('GK Fabric RollOn 8ml')}>
                            <FontAwesomeIcon icon={favorites['GK Fabric RollOn 8ml'] ? faHeartSolid : faHeart} className="fav-icon" />
                        </div>
                        <h3>GK Fabric RollOn 8ml M80P4 CL</h3>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p>₹80.00</p>
                    </div>
                </div>
                <div className="product-card">
                    <img src={roll} alt="Odonil Blocks Fruit Blast Mix 50g" />
                    <div className="product-details">
                        <div className="favorite-icon" onClick={() => toggleFavorite('Odonil Blocks Fruit Blast Mix 50g')}>
                            <FontAwesomeIcon icon={favorites['Odonil Blocks Fruit Blast Mix 50g'] ? faHeartSolid : faHeart} className="fav-icon" />
                        </div>
                        <h3>Odonil Blocks Fruit Blast Mix 50g</h3>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p>₹130.00</p>
                    </div>
                </div>
                <div className="product-card">
                    <img src={roll} alt="GMEN Oil Clear Facewash 50g" />
                    <div className="product-details">
                        <div className="favorite-icon" onClick={() => toggleFavorite('GMEN Oil Clear Facewash - 50g')}>
                            <FontAwesomeIcon icon={favorites['GMEN Oil Clear Facewash - 50g'] ? faHeartSolid : faHeart} className="fav-icon" />
                        </div>
                        <h3>GMEN Oil Clear Facewash - 50g</h3>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p>₹119.00</p>
                    </div>
                </div>
                <div className="product-card">
                    <img src={roll} alt="Baby Lips Pink Lolita" />
                    <div className="product-details">
                        <div className="favorite-icon" onClick={() => toggleFavorite('Baby Lips Pink Lolita')}>
                            <FontAwesomeIcon icon={favorites['Baby Lips Pink Lolita'] ? faHeartSolid : faHeart} className="fav-icon" />
                        </div>
                        <h3>Baby Lips Pink Lolita</h3>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p>₹175.00</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='cont'>
                    <h1 id='brands'>Popular Brands</h1>
                    <div className='brands-container'>
                        <button className="brands" id="bleft"><FontAwesomeIcon icon={faAngleLeft} id='faiconl' /></button>
                        <button className="brands" id="bight"><FontAwesomeIcon icon={faAngleRight} id='faiconr' /></button>
                    </div>
                </div>
            </div>

            <div className="App">
                <div className="brand-grid">
                    <div className="brand-item"><img src={dabur} alt="Dabur" /><a href='#' id='brandlogo'>Dabur</a></div>
                    <div className="brand-item"><img src={dabur} alt="Odonil" /><a href='#' id='brandlogo'>Odonil</a></div>
                    <div className="brand-item"><img src={dabur} alt="Loreal" /><a href='#' id='brandlogo'>Loreal</a></div>
                    <div className="brand-item"><img src={dabur} alt="Odopic" /><a href='#' id='brandlogo'>Odopic</a></div>
                    <div className="brand-item"><img src={dabur} alt="Dazzl" /><a href='#' id='brandlogo'>Dazzl</a></div>
                    {/* <div className="brand-item"><img src="odomos.png" alt="Odomos" /><span>Odomos</span></div> */}
                </div>
                <Footer/>
            </div>

        </>
    );
}
