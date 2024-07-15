import React, { useState } from 'react';
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
  Modal,
  Box,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Drawer,
} from '@mui/material';
import styles from './ProductCatagories.module.css';
import img from '../../../../../assets/image/11.png';


const ProductCategories = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pages,setPages] = useState(1);
  const [open,setOpen] = useState(false);
  const [openDrawer,setOpenDrawer] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  }

  const handleCloseModal = () => {
    setOpen(false);
  }

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  }

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPages(1);
  };

  const handleChangePage = (e,newPage) => {
    setPages(newPage)
  }

  const categories = [
    { name: 'Health Care', parentCategory: '', status: 'Active' },
    { name: 'Ayurvedic Medicine', parentCategory: 'Health Care', status: 'Active' },
    { name: 'Ayurvedic Kadha', parentCategory: 'Health Care', status: 'Active' },
    { name: 'Tablet', parentCategory: 'Health Care', status: 'Active' },
    { name: 'Digestive Aids', parentCategory: '', status: 'Active' },
    { name: 'Hair oil', parentCategory: '', status: 'Active' },
    { name: 'Cleaner', parentCategory: '', status: 'Active' },
    { name: 'Air Freshener', parentCategory: '', status: 'Active' },
    { name: 'cosmetic', parentCategory: '', status: 'Active' },
    { name: 'Toothpaste', parentCategory: '', status: 'Active' },
    { name: 'New Product 1', parentCategory: '', status: 'Active' },
    { name: 'New Product 2', parentCategory: '', status: 'Active' },
  ];

  const totalPages = Math.ceil(categories.length / rowsPerPage);
  const startIdx = (pages - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const paginationCategories = categories.slice(startIdx,endIdx);


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h5">Product Categories</Typography>
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
          <button  style={{backgroundColor:'red',border:'none',height:'40px',color:'white',borderRadius:'6px',cursor:'pointer'}} onClick={handleOpenModal}>+ Add Product Category</button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell>PARENT CATEGORY</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginationCategories.map((category, index) => (
              <TableRow key={index}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.parentCategory}</TableCell>
                <TableCell>
                  <span className={styles.statusActive}>{category.status}</span>
                </TableCell>
                <TableCell>
                  <Button size="small" onClick={handleOpenDrawer}>View</Button>
                  <Button size="small" color="success" onClick={handleOpenModal}>Edit</Button>
                  <Button size="small" color="error">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.pagination}>
        <Pagination
            count={totalPages}
            page={pages}
            onChange={handleChangePage}
            // variant="outlined"
            shape="rounded"
            />
      </div>
      <Modal open={open} onClose={handleCloseModal}>
      <Box className={styles.modalContent}>
        <Typography variant="h6" component="h2" className={styles.title}>
          Product Categories
        </Typography>
        
        <input
          required
          type='text'
          name='modal-text'
          placeholder='Name'
          style={{width:'95%'}}
          className={styles.inputField}
        />
        
        <Select
          fullWidth
          displayEmpty
          value=""
          className={styles.inputField}
        >
          <MenuItem value="">
            Parent Category
          </MenuItem>
          {/* Add category options here */}
        </Select>
        
        <Typography component="legend" className={styles.legend}>STATUS *</Typography>
        <RadioGroup
          row
        //   value={status}
        //   onChange={(e) => setStatus(e.target.value)}
          className={styles.radioGroup}
        >
          <FormControlLabel value="active" control={<Radio />} label="Active" />
          <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
        </RadioGroup>
        
        <Typography component="legend" className={styles.legend}>IMAGE (640PX, 960PX)</Typography>
        <Button variant="outlined" component="label" className={styles.fileButton}>
          Choose File
          <input type="file" hidden />
        </Button>
        
        <TextField
          fullWidth
          multiline
          rows={4}
          label="DESCRIPTION"
          variant="outlined"
          className={styles.inputField}
        />
        
        <Box className={styles.buttonGroup}>
          <Button variant="outlined" onClick={handleCloseModal}>Close</Button>
          <Button variant="contained" color="primary">Save</Button>
        </Box>
      </Box>
    </Modal>
    <Drawer
        anchor="top"
        open={openDrawer}
        onClose={setOpenDrawer}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "800px",
            margin: "auto",
            height: "auto",
            maxHeight: "90vh",
            overflow: "auto",
          },
        }}
      >
        <div className={styles["drawer-content"]}>
          <Typography
            variant="h5"
            className="headerDrawer"
            align="left"
            sx={{ margin: "16px 16px 8px" }}
          >
            Slider
          </Typography>
          <hr />
          <div className={styles.sliderContentContainer}>
            <div className={styles.sliderImageContainer}>
              <img
                src={img}
                alt="Indian Groceries"
                className={styles.sliderImage}
              />
            </div>
            <div className={styles.sliderInfoContainer}>
              <div className={styles.sliderNumber}>3</div>
              <div className={styles.sliderStatus}>ACTIVE</div>
            </div>
          </div>
        </div>
        <button onClick={handleCloseDrawer} className={styles.closeButton}>
          Close
        </button>
      </Drawer>
    </div>
  );
};

export default ProductCategories;