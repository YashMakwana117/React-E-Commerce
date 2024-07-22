import React, { useEffect, useState } from 'react'
import styles from './EditView.module.css';
import TopBar from '../../TopBar/TopBar';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Paper,
    Select,
    MenuItem,
    Pagination,
    LinearProgress,
  } from '@mui/material';
import debounce from 'lodash.debounce';

const debouncedUpdateQuantity = debounce(async (id, quantity) => {
    try {
        await fetch(`https://669b65a4276e45187d355835.mockapi.io/purchase/view/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity }),
        });
    } catch {
        console.log('error on edit');
    }
}, 500);


export default function EditView() {

    const [rowsPerPage,setRowsPerPage] = useState(10);
    const [page,setPage] = useState(1);
    const [editData,setEditData] = useState([]);
    const [loading,setLoading] = useState(true);

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(e.target.value);
        setPage(1);
    }

    const handleChangePage = (e,newPage) => {
        setPage(newPage);
    }

    useEffect(() => {
        const fetchEditData = async () => {
            try{
                const response = await fetch('https://669b65a4276e45187d355835.mockapi.io/purchase/view');
                const data = await response.json();
                setEditData(data);
            }catch{
                console.log('error');
            }finally{
                setLoading(false);
            }
        };
        fetchEditData();
    },[]);

    const pagination = editData.slice((page - 1) * rowsPerPage,page * rowsPerPage);
    const totalPage = Math.ceil(editData.length / rowsPerPage);

    
    // const updateQuantityOnChange = async (id,quantity) => {
    //     try{
    //         await fetch(`https://669b65a4276e45187d355835.mockapi.io/purchase/view/${id}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({quantity}),
    //         });
    //     }catch{
    //         console.log('error on edit');
    //     }
    // };

    // const debouncedUpdateQuantity = useCallback(debounce(updateQuantityOnChange, 500), []);
    
    const handleQuantityChange = (index,value) => {
        const newEditData = [...editData];
        newEditData[index].quantity = value;
        setEditData(newEditData);
        debouncedUpdateQuantity(newEditData[index].id,value);
    }

  return (
    <>
        <TopBar/>
        <div className={styles.PurchaseEditViewMain}>
        <div className={styles.container}>
      <h2 style={{color:'black'}}>Purchase</h2>
      
      <div className={styles.formGrid}>
        <div>
          <label htmlFor="date">DATE *</label>
          <input type="date" id="date" required />
        </div>
        <div>
          <label htmlFor="reference">REFERENCE NO</label>
          <input type="text" id="reference" style={{width:'95%'}} />
        </div>
        <div>
          <label htmlFor="status">STATUS *</label>
          <select id="status" required>
            <option value="">--</option>
            {/* Add status options */}
          </select>
        </div>
        <div>
          <label htmlFor="attachment">ATTACHMENTS</label>
          <input type="file" id="attachment" style={{width:'95%'}} />
          <span>No file chosen</span>
        </div>
        <div>
          <label htmlFor="supplier">SUPPLIER *</label>
          <select id="supplier" required>
            <option value="">--</option>
            {/* Add supplier options */}
          </select>
        </div>
      </div>
      
      <div className={styles.warning}>
        Please select these before adding any product
      </div>
      
      <div className={styles.editheader}>
        <div className={styles.editdropdown}>
            <label htmlFor="addProducts">ADD PRODUCTS *</label>
            <Select
                value='--'
                // onChange={handleChangeRowsPerPage}
                className={styles.select}
                >
                <MenuItem value='--'>--</MenuItem>
            </Select>
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
      </div>
        {loading && <LinearProgress/>}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>PRODUCT</TableCell>
              <TableCell>UNIT COST</TableCell>
              <TableCell>QUANTITY</TableCell>
              <TableCell>DISCOUNT</TableCell>
              <TableCell>TAXES</TableCell>
              <TableCell>SUBTOTAL</TableCell>
              <TableCell>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pagination.map((edit,index) => (
                <TableRow>
                <TableCell>{edit.product}</TableCell>
                <TableCell>{edit.unitCost}</TableCell>
                <TableCell>
                    <input type='number' value={edit.quantity} onChange={(e) => handleQuantityChange(index,e.target.value)} />
                </TableCell>  
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>{(edit.unitCost * edit.quantity).toFixed(2)}</TableCell>
                <TableCell>
                    <Button size="small" color="error">Delete</Button>
                </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
            count={totalPage}
            page={page}
            onChange={handleChangePage}
            // variant="outlined"
            shape="rounded"
            style={{marginTop:'10px'}}
        />
    </div>
        </div>
    </>
  )
}
