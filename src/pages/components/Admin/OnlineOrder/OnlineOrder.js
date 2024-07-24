import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Button,
  Chip,
  IconButton
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FilterListIcon from '@mui/icons-material/FilterList';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import styles from './OnlineOrder.module.css';
import TopBar from '../TopBar/TopBar';

const orders = [
  { id: '0205248', type: 'Delivery', customer: 'John Doe', amount: 3730.00, date: '01:19 PM, 02-05-2024', status: 'Pending' },
  { id: '2404247', type: 'Delivery', customer: 'Aayush', amount: 160.00, date: '12:46 PM, 24-04-2024', status: 'Pending' },
  { id: '2404246', type: 'Delivery', customer: 'John Doe', amount: 160.00, date: '11:07 AM, 24-04-2024', status: 'Canceled' },
  { id: '2304244', type: 'Delivery', customer: 'John Doe', amount: 2950.00, date: '01:23 PM, 23-04-2024', status: 'Delivered' },
  { id: '2304242', type: 'Delivery', customer: 'John Doe', amount: 7210.00, date: '11:17 AM, 23-04-2024', status: 'Delivered' },
  { id: '2204241', type: 'Delivery', customer: 'John Doe', amount: 106.00, date: '06:32 PM, 22-04-2024', status: 'Delivered' },
];

export default function OnlineOrder() {
  return (
    <>
      <TopBar />
      <div className={styles.OnlineOrderMain}>
        <h2>Dashboard/Online Order</h2>
        <div className={styles.OnlineOrderMaininner}>
          <div className={styles.OnlineOrderMainHeader}>
            <h3>Online Orders</h3>
            <div>
              <Button variant="outlined" startIcon={<FilterListIcon />}>
                Filter
              </Button>
              <Button variant="outlined" startIcon={<FileUploadIcon />} style={{ marginLeft: '10px' }}>
                Export
              </Button>
            </div>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="online orders table">
              <TableHead>
                <TableRow>
                  <TableCell>ORDER ID</TableCell>
                  <TableCell>ORDER TYPE</TableCell>
                  <TableCell>CUSTOMER</TableCell>
                  <TableCell>AMOUNT</TableCell>
                  <TableCell>DATE</TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>
                      <Chip label={order.type} color="primary" variant="outlined" size="small" />
                    </TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.amount.toFixed(2)}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <Chip 
                        label={order.status} 
                        color={order.status === 'Delivered' ? 'success' : order.status === 'Pending' ? 'warning' : 'error'} 
                        variant="outlined" 
                        size="small" 
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton aria-label="view">
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className={styles.TableFooter}>
            Showing 1 to 6 of 6 entries
          </div>
        </div>
      </div>
    </>
  );
}