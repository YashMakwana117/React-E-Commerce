import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import styles from './MostPopulerProduct.module.css';
import { Rating,LinearProgress,Pagination } from '@mui/material';



export default function MostPopulerProduct() {

    const [mostPopulerProduct,setMostPopulerProduct] = useState([]);
    const [loading,setLoading] = useState(true);
    const [page,setPage] = useState(1);
    const productPerPage = 10;


    useEffect(() => {
        const fetchMostPopulerProduct = async() => {
            try{
                const response = await fetch('https://66a0dcd07053166bcabd259b.mockapi.io/homeData');
                const data = await response.json();
                setMostPopulerProduct(data);
            }catch{
                console.lod('error the data was not fetching from api in most populer product');
            }finally{
                setLoading(false);
            }
        };
        fetchMostPopulerProduct();
    },[]);

    const getPopulerProduct = mostPopulerProduct.filter(item => item.rating > 4);

    const indexOfLastProduct = page * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = getPopulerProduct.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPage = Math.ceil(getPopulerProduct.length / productPerPage);

    const handlePageChange = (e,newPage) => {
        setPage(newPage);
    }


  return (
    <div className={styles.MostPopulerProduct}>
        <Layout>
            <div className={styles.MostPopulerProductMain}>
                <div className={styles.MostPopulerProductMainHeader}>
                    <h1>Most Populer <span>({getPopulerProduct.length} product found)</span></h1>
                </div>
                {loading && <LinearProgress/> } 
                <div className={styles.productsGrid}>
                    {currentProducts.map((card, index) => (
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
                <div className={styles.pagination}>
                    <Pagination
                        count={totalPage}
                        page={page}
                        onChange={handlePageChange}
                        // variant="outlined"
                        shape="rounded"
                    />
                </div>
            </div> 
        </Layout>        
    </div>
  )
}
