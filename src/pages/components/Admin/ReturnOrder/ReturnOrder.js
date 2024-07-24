import React from 'react'
import styles from './ReturnOrder.module.css';
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
  } from '@mui/material';


export default function ReturnOrder() {
  return (
    <>
        <TopBar/>
        <div className={styles.ReturnOrderMain}>
            <h2>Dashboard/Return Order</h2>
            <div className={styles.ReturnOrderMaininner}>
                <div className={styles.ReturnOrderMainHeader}>
                    <h3>Return Orders</h3>
                </div>
                <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>CUSTOMER</TableCell>
                    <TableCell>DATE</TableCell>
                    <TableCell>REFERENCE NO</TableCell>
                    <TableCell>TOTAL</TableCell>
                    <TableCell>REASON</TableCell>
                    <TableCell>ACTION</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                    <TableCell>order</TableCell>
                    <TableCell>customer</TableCell>
                    <TableCell>123</TableCell>
                    <TableCell>{Date.UTC()}</TableCell>
                    <TableCell>
                        <span className={styles.statusActive}>ACTIVE</span>
                    </TableCell> 
                    <TableCell>
                        <Button size="small" >View</Button>
                        <Button size="small" color="success" >Edit</Button>
                        <Button size="small" color="error">Delete</Button>
                    </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
            </div>
        </div>
    </>
  )
}