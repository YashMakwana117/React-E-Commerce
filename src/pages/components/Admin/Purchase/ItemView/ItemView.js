import React, { useEffect, useState } from 'react'
import styles from './ItemView.module.css';
import Topbar from '../../TopBar/TopBar';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, LinearProgress, Button, Pagination, Select, MenuItem } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';

export default function ItemView() {
    const [loading,setLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [rowsPerPage,setRowsPerPage] = useState(10);
    const [purchaseViewData,setPurchaseViewData] = useState([]);
    const [subTotal,setSubTotal] = useState(0);

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(e.target.value);
        setPage(1);
    }

    const handleChangePage = (e,newPage) => {
        setPage(newPage);
    }

    useEffect(() => {
       const fetchPurchaseData = async () => {
        try{
            const response = await fetch('https://669b65a4276e45187d355835.mockapi.io/purchase/view');
            const data = await response.json();
            setPurchaseViewData(data);
        }catch{
            console.log('error');
        }
        finally{
            setLoading(false);
        }
       };
       fetchPurchaseData();
    },[]);

    const pagination = purchaseViewData.slice((page - 1) * rowsPerPage , page * rowsPerPage);
    const totalPage = Math.ceil(purchaseViewData.length / rowsPerPage);

    useEffect(() => {
        let subTotal = 0;
        purchaseViewData.forEach(item => {
            subTotal += item.unitCost * item.quantity;
        });
        setSubTotal(subTotal);
    },[purchaseViewData]);

  return (
    <>
        <Topbar/>
        <div className={styles.ItemViewMain}>
        {loading && <LinearProgress/>}
        <div className={styles.container}>
            <div className={styles.breadcrumb}>
                <h2>Dashboard / Purchase / View</h2>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.card}>
                <div className={styles.icon}>
                    <i className={styles.supplierIcon}></i>
                </div>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>Supplier</h3>
                    <p className={styles.cardSubtitle}>Location...</p>
                </div>
                </div>
                <div className={styles.card}>
                <div className={styles.icon}>
                    <i className={styles.referenceIcon}></i>
                </div>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>Reference:</h3>
                    <p className={styles.cardSubtitle}>Date: 05:55 PM, 01-04-2024</p>
                    <p className={styles.status}>Status: Received</p>
                </div>
                </div>
            </div>
        </div>

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

        <TableContainer component={Paper} className={styles.tableContainer}>
        <Table sx={{ minWidth: 650 }} aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell>PRODUCT</TableCell>
              <TableCell>UNIT COST</TableCell>
              <TableCell>QUANTITY</TableCell>
              <TableCell>DISCOUNT</TableCell>
              <TableCell>TAXES</TableCell>
              <TableCell>SUBTOTAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {pagination.map((view) => (
                <TableRow key={view.id}>
                    <TableCell>{view.product}</TableCell>
                    <TableCell>{view.unitCost}</TableCell>
                    <TableCell>{view.quantity}</TableCell>
                    <TableCell>00.00</TableCell> 
                    <TableCell>00.00</TableCell> 
                    <TableCell>{(view.unitCost * view.quantity).toFixed(2)}</TableCell> 
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
        <div className={styles.paginationView}>
            <Pagination
                count={totalPage}
                page={page}
                onChange={handleChangePage}
                // variant="outlined"
                shape="rounded"
            />
        </div>

      <div className={styles.summary}>
        <div className={styles.summaryLeft}>
          <p>Created Date: 06:00 PM, 22-04-2024</p>
        </div>
        <div className={styles.summaryRight}>
          <div className={styles.summaryItem}>
            <span>Subtotal</span>
            <span>₹{subTotal}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Tax Fee</span>
            <span>₹0.00</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Discount</span>
            <span>₹0.00</span>
          </div>
          <div className={`${styles.summaryItem} ${styles.total}`}>
            <span>Total</span>
            <span>₹{subTotal}</span>
          </div>
        </div>
      </div>

      <div className={styles.printButtonContainer}>
        <Button
          variant="contained"
          color="success"
          startIcon={<PrintIcon />}
          className={styles.printButton}
        >
          Print
        </Button>
      </div>


        </div>
    </>
  )
}
