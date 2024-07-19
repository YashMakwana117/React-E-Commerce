import React, { useState } from 'react'
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
    
  } from '@mui/material';

export default function ProductsSetting() {

    const [rowsPerPage,setRowsPerPage] = useState(10);
    const [page,setPage] = useState(1);

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(e.target.value);
        setPage(1);
    }

    const handleChangePage = (e,newPage) => {
        setPage(newPage);
    }

    const product = [
        {name: 'Fall Repair Shampoo 82.5ml',category: 'Shampoo',buyPrice: '79.00',sellPrice: '89.00',status: 'Active'},
        {name: 'CASTING CREAM GL 2 EBONY BLACK.',category: 'hair color',buyPrice: '639.00',sellPrice: '649.00',status: 'Active'},
        {name: 'Bright Complete UV 45 G.',category: 'Cream',buyPrice: '189.00',sellPrice: '199.00',status: 'Active'},
        {name: 'GAR BL NAT SH 1 (9+1) Promo',category: 'hair color',buyPrice: '32.00',sellPrice: '42.00',status: 'Active'},
        {name: 'TR5 SH 340ml Renovation bottle',category: 'Shampoo',buyPrice: '389.00',sellPrice: '399.00',status: 'Active'},
        {name: 'CCFW ME Zinnia (Aqua) 100 ml - B',category: 'Face wash',buyPrice: '145.00',sellPrice: '145.00',status: 'Active'},
        {name: 'LP HEX EX OIL SHP 650 ML',category: 'Shampoo',buyPrice: '889.00',sellPrice: '899.00',status: 'Active'},
        {name: 'LP HEX CP SHAMPOO 180 ML',category: 'Shampoo',buyPrice: '209.00',sellPrice: '219.00',status: 'Active'},
        {name: 'Fall Repair Shampoo 180ml',category: 'Shampoo',buyPrice: '190.00',sellPrice: '209.00',status: 'Active'},
        {name: 'FR SH 340ml Reno',category: 'Shampoo',buyPrice: '369.00',sellPrice: '379.00',status: 'Active'},
        {name: 'Test',category: 'Shampoo',buyPrice: '369.00',sellPrice: '379.00',status: 'Active'},
        {name: 'Test2',category: 'Shampoo',buyPrice: '369.00',sellPrice: '379.00',status: 'Active'},
    ];

    const totalPage = Math.ceil(product.length / rowsPerPage);
    const startIndx = (page - 1) * rowsPerPage;
    const endIdx = startIndx + rowsPerPage;
    const paginationProduct = product.slice(startIndx,endIdx);

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
                <button  style={{backgroundColor:'red',border:'none',height:'40px',color:'white',borderRadius:'6px',cursor:'pointer'}}>+ Add Product</button>
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
                {paginationProduct.map((prod, index) => (
                    <TableRow key={index}>
                    <TableCell>{prod.name}</TableCell>
                    <TableCell>{prod.category}</TableCell>
                    <TableCell>{prod.buyPrice}</TableCell>
                    <TableCell>{prod.sellPrice}</TableCell> 
                    <TableCell>
                        <span className={styles.statusActive}>{prod.status}</span>
                    </TableCell>
                    <TableCell>
                        <Button size="small">View</Button>
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
    </>
  )
}
