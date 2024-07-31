import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating, LinearProgress } from "@mui/material";
import styles from "./ProductDetailPage.module.css";
import Layout from "../Layout/Layout";

export default function BuyNowPage() {
  const [count, setCount] = useState(0);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [openDialog,setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await fetch(
          `https://66a0dcd07053166bcabd259b.mockapi.io/homeData/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      } catch {
        console.log("Error in fetching data from API in product detail page");
      } finally {
        setLoading(false);
      }
    };
    fetchProductById();
  }, [productId]);

  if (loading) {
    return <LinearProgress />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const totalRatings = product.reviews.length;
  const ratingDistribution = {
    5: product.reviews.filter((review) => review.rating === 5).length,
    4: product.reviews.filter((review) => review.rating === 4).length,
    3: product.reviews.filter((review) => review.rating === 3).length,
    2: product.reviews.filter((review) => review.rating === 2).length,
    1: product.reviews.filter((review) => review.rating === 1).length,
  };

  const maxRatings = Math.max(...Object.values(ratingDistribution));

  const ratingColors = {
    5: "#4caf50",
    4: "#8bc34a",
    3: "#cddc39",
    2: "#ffeb3b",
    1: "#f44336",
  };

  // const handleOpenDialog = () => setOpenDialog(true);
  // const handleCloseDialog = () => setOpenDialog(false);

  return (
    <Layout>
      <div className={styles.BuyNowPageMain}>
        <div className={styles.productDetailContainer}>
          <div className={styles.imageSection}>
            <img
              src={product.productImg}
              alt="product"
              className={styles.mainImage}
            />
            <div className={styles.thumbnailContainer}>
              <img
                src={product.productImg}
                alt="product"
                className={styles.thumbnail}
              />
            </div>
          </div>
          <div className={styles.detailsSection}>
            <h1 className={styles.productTitle}>{product.productName}</h1>
            <p className={styles.productPrice}>₹ {product.price}</p>
            {product.rating !== undefined && (
              <Rating
                name="read-only"
                value={product.rating}
                precision={0.5}
                readOnly
                size="small"
              />
            )}
            <div className={styles.quantityContainer}>
              <label>Quantity:</label>
              <div className={styles.quantitySelector}>
                <button onClick={handleIncrement}>+</button>
                <span>{count}</span>
                <button onClick={handleDecrement}>-</button>
              </div>
              <span className={styles.stockStatus}>
                {product.stockQuantity > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <div className={styles.actionButtons}>
              <button
                className={styles.addToCartButton}
                disabled={product.stockQuantity === 0}
              >
                Add to Cart
              </button>
              <button className={styles.favoriteButton}>Favorite</button>
            </div>
          </div>
        </div>
        <div className={styles.tabContainer}>
          <h2>Product Details</h2>
          <hr />
          <div className={styles.productInfo}>
            <img
              src={product.productImg}
              alt={product.productName}
              className={styles.productImage}
            />
            <div className={styles.infoSection}>
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Price:</strong> ₹{product.price}
              </p>
              <p>
                <strong>Rating:</strong> {product.rating} / 5
              </p>
              <p>
                <strong>Stock Quantity:</strong> {product.stockQuantity}
              </p>
            </div>
          </div>
          <hr />
          <div className={styles.highlights}>
            <h3>Highlights</h3>
            <ul>
              {product.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div className={styles.features}>
            <h3>Features</h3>
            {product.features.map((feature, index) => (
              <div key={index}>
                <h4>{feature.name}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <hr />
          <div className={styles.ratingsContainer}>
            <h2>Ratings & Reviews</h2>
            <div className={styles.summary}>
              <div className={styles.ratingValue}>
                <span className={styles.averageRating}>{product.rating}</span>
                <Rating
                  name="read-only"
                  value={product.rating}
                  precision={0.5}
                  readOnly
                  size="large"
                />
                <div>
                  {totalRatings} Ratings & {product.reviews.length} Reviews
                </div>
              </div>
              <button className={styles.rateProductBtn} >Rate Product</button>
            </div>
            <div className={styles.ratingDistribution}>
              {[5, 4, 3, 2, 1].map((star, index) => (
                <div key={index} className={styles.ratingRow}>
                  <span>{star}★</span>
                  <LinearProgress
                    variant="determinate"
                    value={(ratingDistribution[star] / maxRatings) * 100}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      margin: "0 10px",
                      flexGrow: 1,
                      backgroundColor: "#e0e0e0",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: ratingColors[star],
                      },
                    }}
                  />
                  <span>{ratingDistribution[star]}</span>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className={styles.reviews}>
            <h3>Reviews</h3>
            {product.reviews.map((review, index) => (
              <div key={index} className={styles.review}>
                <p>
                  <strong>{review.username}</strong>
                </p>
                <p>Rating: {review.rating} / 5</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
