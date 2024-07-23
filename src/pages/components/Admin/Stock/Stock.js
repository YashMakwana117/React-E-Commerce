import React, { useEffect, useState } from 'react'
import styles from './Stock.module.css';
import TopBar from '../TopBar/TopBar';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Pagination,
    Box,
    Select,
    MenuItem,
    LinearProgress
} from '@mui/material';



export default function Stock() {

    const [rowsPerPage,setRowsPerPage] = useState(10);
    const [page,setPage] = useState(1);
    const [stock,setStock] = useState([]);
    const [loading,setLoading] = useState(true);

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(e.target.value);
        setPage(1);
    }

    const handleChangePage = (e,newPage) => {
        setPage(newPage);
    }

    const pagination = stock.slice((page - 1) * rowsPerPage , page * rowsPerPage);
    const totalPage = Math.ceil(stock.length / rowsPerPage);

    useEffect(() => {
        const fetchStockData = async () => {
            try{
                const response = await fetch('https://669f6799b132e2c136fdb7e8.mockapi.io/stock');
                const data = await response.json();
                setStock(data);
            }catch{
                console.log('stock data error');
            }finally{
                setLoading(false);
            }
        };
        fetchStockData();
    });

  return (
    <>
        <TopBar/>
        <div className={styles.addStockMain}>
            <h2>Dashboard/Stock</h2>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3>Stock</h3>
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
                </div>
            </Box>
            {loading && <LinearProgress/>}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>NAME</TableCell>
                            <TableCell>QAUNTITY</TableCell>
                            <TableCell>STATUS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pagination.map((stock) => (
                        <TableRow key={stock.id}>
                            <TableCell>{stock.name}</TableCell>
                            <TableCell>{stock.qauntity}</TableCell>
                            <TableCell>
                                <span className={styles.statusActive}>ACTIVE</span>
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
