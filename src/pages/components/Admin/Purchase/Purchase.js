import React, { useEffect, useState } from 'react'
import styles from './Purchase.module.css';
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
    LinearProgress
  } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Purchase() {

    const [rowsPerPage,setRowsPerPage] = useState(10);
    const [page,setPage] = useState(1);
    const [purchase,setPurchase] = useState([]);
    const [loading,setLoading] = useState(true);

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(e.target.value);
        setPage(1);
    }

    const handleChangePage = (e,newPage) => {
        setPage(newPage);
    }


    // const purchase = [
    //     {name: 'nanu',date: '05:55 PM, 01-04-2024',refno: '',status: 'active',total: '5065000',paymentStatus: 'Fully Paid'},
    //     {name: 'Meet',date: '05:00 PM, 01-04-2024',refno: '',status: 'active',total: '6675000',paymentStatus: 'Fully Paid'},
    //     {name: 'Kavi',date: '05:40 PM, 01-04-2024',refno: '',status: 'active',total: '1000000',paymentStatus: 'Fully Paid'},
    //     {name: 'Kunal',date: '05:48 PM, 01-04-2024',refno: '',status: 'active',total: '3500000',paymentStatus: 'Fully Paid'},
    //     {name: 'Lalu',date: '05:30 PM, 01-04-2024',refno: '',status: 'active',total: '6500000',paymentStatus: 'Fully Paid'},
    //     {name: 'Yamin',date: '05:20 PM, 01-04-2024',refno: '',status: 'active',total: '2600000',paymentStatus: 'Fully Paid'},
    // ];

    useEffect(() => {

        const fetchPurchaseData = async () => {
            try{
                const response = await fetch('https://669b65a4276e45187d355835.mockapi.io/purchase/purchase');
                const data = await response.json();
                setPurchase(data);
            }
            catch{
                console.log('can not fetch data from API');
            }finally{
                setLoading(false);
            }
        };
        fetchPurchaseData();
    },[]);
 
    const paginationPurchase = purchase.slice((page - 1) * rowsPerPage,page * rowsPerPage);
    const totalPage = Math.ceil(purchase.length / rowsPerPage);

    let navigate = useNavigate();
    const handleNavigattion = () => {
        navigate('/purchase/view');
    }

  return (
    <>
        <TopBar/>
        <div className={styles.adminPurchaseMain}>
            {loading && <LinearProgress />}
            <h2>DashBoard/Purchase</h2>
            <div className={styles.container}>
            <div className={styles.header}>
            <Typography variant="h5">Purchase</Typography>
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
                <button  style={{backgroundColor:'red',width:'200px',border:'none',height:'40px',color:'white',borderRadius:'6px',cursor:'pointer'}}>Puchase Details</button>
            </div>
            </div>
            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell>DATE</TableCell>
                    <TableCell>REFRENCE NO</TableCell>
                    <TableCell>STATUS</TableCell>
                    <TableCell>TOTAL</TableCell>
                    <TableCell>PAYMENT STATUS</TableCell>
                    <TableCell>ACTION</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {paginationPurchase.map((prod) => (
                    <TableRow key={prod.id}>
                    <TableCell>{prod.name}</TableCell>
                    <TableCell>{prod.date}</TableCell>
                    <TableCell>{prod.refno}</TableCell>
                    <TableCell>
                        <span className={styles.statusActive}>{prod.status}</span>
                    </TableCell>
                    <TableCell>{prod.total.toString()}</TableCell> 
                    <TableCell>
                        <span className={styles.statusActive}>{prod.paymentStatus}</span>
                    </TableCell>
                    <TableCell>
                        <Button size="small" onClick={handleNavigattion}>View</Button>
                        <Button size="small" color="success">Edit</Button>
                        <Button size="small" color="error">Delete</Button>
                        <Button color="secondary">Add Payment</Button>
                        <Button size="small">View Payment</Button>
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
        </div>
    </>
  )
}
