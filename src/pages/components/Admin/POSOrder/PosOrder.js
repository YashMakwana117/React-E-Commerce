import React from 'react'
import styles from './PosOrder.module.css';
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

export default function PosOrder() {
  return (
    <>
        <TopBar/>
        <div className={styles.posOrderMain}>
            <h2>Dashboard/POSORDER</h2>
            <div className={styles.posOrderMaininner}>
                <div className={styles.posOrderMainHeader}>
                    <h3>POS ORDER</h3>
                </div>
                <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>ORDER ID</TableCell>
                    <TableCell>CUSTOMER</TableCell>
                    <TableCell>AMOUNT</TableCell>
                    <TableCell>DATE</TableCell>
                    <TableCell>STATUS</TableCell>
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
