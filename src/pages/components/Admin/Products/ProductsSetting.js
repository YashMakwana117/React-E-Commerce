import React, { useEffect, useState } from 'react'
import styles from './Products.module.css';
import TopBar from '../TopBar/TopBar';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    Button, 
    Select, 
    MenuItem, 
    Typography,
    Pagination,
    Drawer,
  } from '@mui/material';

export default function ProductsSetting() {
    const [products,setProducts] = useState([]);
    const [rowsPerPage,setRowsPerPage] = useState(10);
    const [page,setPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [drawerOpen,setDrawerOpen] = useState(false);
    const [tabChange,setTabChange] = useState('Information');
    const [loading, setLoading] = useState(true);

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(e.target.value);
        setPage(1);
    }

    const handleChangePage = (e,newPage) => {
        setPage(newPage);
    }

    // const product = [
    //     {name: 'Fall Repair Shampoo 82.5ml',category: 'Shampoo',buyPrice: '79.00',sellPrice: '89.00',status: 'Active'},
    //     {name: 'CASTING CREAM GL 2 EBONY BLACK.',category: 'hair color',buyPrice: '639.00',sellPrice: '649.00',status: 'Active'},
    //     {name: 'Bright Complete UV 45 G.',category: 'Cream',buyPrice: '189.00',sellPrice: '199.00',status: 'Active'},
    //     {name: 'GAR BL NAT SH 1 (9+1) Promo',category: 'hair color',buyPrice: '32.00',sellPrice: '42.00',status: 'Active'},
    //     {name: 'TR5 SH 340ml Renovation bottle',category: 'Shampoo',buyPrice: '389.00',sellPrice: '399.00',status: 'Active'},
    //     {name: 'CCFW ME Zinnia (Aqua) 100 ml - B',category: 'Face wash',buyPrice: '145.00',sellPrice: '145.00',status: 'Active'},
    //     {name: 'LP HEX EX OIL SHP 650 ML',category: 'Shampoo',buyPrice: '889.00',sellPrice: '899.00',status: 'Active'},
    //     {name: 'LP HEX CP SHAMPOO 180 ML',category: 'Shampoo',buyPrice: '209.00',sellPrice: '219.00',status: 'Active'},
    //     {name: 'Fall Repair Shampoo 180ml',category: 'Shampoo',buyPrice: '190.00',sellPrice: '209.00',status: 'Active'},
    //     {name: 'FR SH 340ml Reno',category: 'Shampoo',buyPrice: '369.00',sellPrice: '379.00',status: 'Active'},
    //     {name: 'Test',category: 'Shampoo',buyPrice: '369.00',sellPrice: '379.00',status: 'Active'},
    //     {name: 'Test2',category: 'Shampoo',buyPrice: '369.00',sellPrice: '379.00',status: 'Active'},
    // ];

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const respons = await fetch('https://fakestoreapi.com/products');
                const data = await respons.json();
                setProducts(data);
            }catch{
                console.log('error while fatching the data from api');
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };
        fetchProducts();
    },[]);

    const paginationProduct = products.slice((page -1) * rowsPerPage,page * rowsPerPage);
    const totalPage = Math.ceil(products.length / rowsPerPage);

    const handleOpenDrawer = (pd) => {
        setSelectedProduct(pd);
        setDrawerOpen(true);
    };
    const handleCloseDrawer = () => setDrawerOpen(false);

    const handleTabChange = (e) => {
        setTabChange(e.target.value)
    }

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    

  return (
    <>
        <TopBar/>
        <h2 className={styles.adProdh2}>DashBoard/Products</h2>
        <div className={styles.container}>
            <div className={styles.header}>
            <Typography variant="h5">Products</Typography>
            <div className={styles.actions}>
                <Select
                value={rowsPerPage}
                onChange={handleChangeRowsPerPage}
                className={styles.select}
                >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                </Select>
                <button  style={{backgroundColor:'red',width:'200px',border:'none',height:'40px',color:'white',borderRadius:'6px',cursor:'pointer'}}>+ Add Product</button>
            </div>
            </div>
            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell>CATAGORY</TableCell>
                    <TableCell>BUY PRICE</TableCell>
                    <TableCell>SELL PRICE</TableCell>
                    <TableCell>STATUS</TableCell>
                    <TableCell>ACTION</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {paginationProduct.map((prod) => (
                    <TableRow key={prod.id}>
                    <TableCell>{prod.title}</TableCell>
                    <TableCell>{prod.category}</TableCell>
                    <TableCell>{prod.price}</TableCell>
                    <TableCell>{prod.price * 1.2}</TableCell> 
                    <TableCell>
                        <span className={styles.statusActive}>{prod.status}</span>
                    </TableCell>
                    <TableCell>
                        <Button size="small" onClick={() => handleOpenDrawer(prod)} >View</Button>
                        <Button size="small" color="success">Edit</Button>
                        <Button size="small" color="error">Delete</Button>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <div className={styles.pagination}>
            <Pagination
                count={totalPage}
                page={page}
                onChange={handleChangePage}
                // variant="outlined"
                shape="rounded"
                />
            </div>
        </div>
{/* ------------Top Drawer start here------------- */}

        <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        classes={{ paper: styles.drawerPaper }}
      >
        <div className={styles.content}>
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${tabChange === "Information" ? styles.active : ''}`} value='Information' onClick={handleTabChange}>Information</button>
            <button className={`${styles.tab} ${tabChange === "Images" ? styles.active : ''}`} value='Images' onClick={handleTabChange}>Images</button>
            <button className={`${styles.tab} ${tabChange === "Variation" ? styles.active : ''}`} onClick={handleTabChange} value='Variation'>Variation</button>
            <select className={styles.select}>
              <option>More</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          {selectedProduct && tabChange === "Information" && 
          <div className={styles.information}>
            <h3>Information</h3>
            <div className={styles.details}>
              <div className={styles.detailColumn}>
                <p><strong>Name:</strong> {selectedProduct.title}</p>
                <p><strong>Category:</strong> {selectedProduct.category}</p>
                <p><strong>Brand:</strong> Loreal</p>
                <p><strong>Buying Price:</strong> {selectedProduct.price}</p>
                <p><strong>Maximum Purchase Quantity:</strong> 50</p>
                <p><strong>Weight:</strong> ---</p>
                <p><strong>Purchasable:</strong> Yes</p>
                <p><strong>Refundable:</strong> No</p>
                <p><strong>Tags:</strong> ---</p>
                <p><strong>Description:</strong> {selectedProduct.description}</p>
              </div>
              <div className={styles.detailColumn}>
                <p><strong>SKU:</strong> 89140</p>
                <p><strong>Barcode:</strong> EAN-13</p>
                <p><strong>Tax:</strong> ---</p>
                <p><strong>Selling Price:</strong> {selectedProduct.price * 1.2}</p>
                <p><strong>Low Stock Quantity Warning:</strong> 10</p>
                <p><strong>Unit:</strong> Milliliters</p>
                <p><strong>Show Stock Out:</strong> Disable</p>
                <p><strong>Status:</strong> Active</p>
              </div>
            </div>
          <button onClick={handleCloseDrawer}>Close</button>
          </div>
          }
          {selectedProduct && tabChange === "Images" && 
            <div className={styles.adminProductDrawerImage}>
                <h2 style={{color:'black'}}>Images</h2>
                <img src={selectedProduct.image} alt='product'></img>
                <h4>{selectedProduct.title}</h4>
            </div>
          }
          {tabChange === "Variation" && 
            <h2>Variation</h2>
          }
        </div>
        </Drawer>

{/* ----------------------------end----------------------------------------------- */}

    </>
  )
}
