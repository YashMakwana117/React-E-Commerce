import React, { useState } from "react";
import styles from "./SuppierSetting.module.css";
import avatar from "../../../../../assets/image/avatar.png";
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
  Box,
  TextField,
  InputAdornment,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function SuppierSetting() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pages, setPages] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openTopDrawer, setOpenTopDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenTopDrawer = () => {
    setOpenTopDrawer(true);
  };

  const handleCloseTopDrawer = () => {
    setOpenTopDrawer(false);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPages(1);
  };

  const handleChangePage = (e, newPage) => {
    setPages(newPage);
  };

  const categories = [
    { compony: "Yippee", name: "Yamin", email: "", phno: "" },
    { compony: "Lays", name: "Lalu", email: "", phno: "" },
    { compony: "Kurkure", name: "Kunal", email: "", phno: "" },
    { compony: "Cadbury", name: "Kavi", email: "", phno: "" },
    { compony: "Nescafe", name: "Nanu", email: "", phno: "" },
    { compony: "Bingo", name: "Jay", email: "", phno: "" },
    { compony: "Patanjali", name: "Pinal", email: "", phno: "" },
    { compony: "Malt-O-Meal", name: "Meet", email: "", phno: "" },
    { compony: "Haldiram", name: "Hemal", email: "", phno: "" },
    { compony: "Bru", name: "Binal", email: "", phno: "" },
    { compony: "New Compony", name: "New Product 1", email: "", phno: "" },
    { compony: "New Compony 2", name: "New Product 2", email: "", phno: "" },
  ];

  const totalPages = Math.ceil(categories.length / rowsPerPage);
  const startIdx = (pages - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const paginationCategories = categories.slice(startIdx, endIdx);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h5">Suppier</Typography>
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
          <button
            style={{
              backgroundColor: "red",
              border: "none",
              height: "40px",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onClick={handleOpenDrawer}
          >
            + Suppliers
          </button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>COMPONY</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>PHNO</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginationCategories.map((category, index) => (
              <TableRow key={index}>
                <TableCell>{category.compony}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.email}</TableCell>
                <TableCell>{category.phno}</TableCell>
                <TableCell>
                  <Button size="small" onClick={handleOpenTopDrawer}>
                    View
                  </Button>
                  <Button
                    size="small"
                    color="success"
                    onClick={handleOpenDrawer}
                  >
                    Edit
                  </Button>
                  <Button size="small" color="error">
                    Delete
                  </Button>
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

      
    {/* --------------------------------------------------- */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            maxWidth: "600px",
            width: "100%",
            padding: "20px",
            overflow: "auto",
          },
        }}
      >
        <Box className={styles.drawerContainer}>
          <Typography variant="h5" gutterBottom>
            Suppliers
          </Typography>
          <input
            type="text"
            placeholder="Company Name *"
            required
            className={styles.inputField}
          />
          <input
            type="text"
            placeholder="Name *"
            required
            className={styles.inputField}
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.inputField}
          />
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">BD +880</InputAdornment>
              ),
            }}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Country</InputLabel>
            <Select value="" label="Country">
              <MenuItem value="">--</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>State</InputLabel>
            <Select value="" label="State">
              <MenuItem value="">--</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>City</InputLabel>
            <Select value="" label="City">
              <MenuItem value="">--</MenuItem>
            </Select>
          </FormControl>
          <input
            type="text"
            placeholder="Zip Code"
            className={styles.inputField}
            style={{ marginTop: 10 }}
          />
          <Typography variant="body1" gutterBottom>
            Image
          </Typography>
          <Button variant="outlined" component="label" fullWidth>
            Choose File
            <input type="file" hidden />
          </Button>
          <textarea
            placeholder="Address"
            rows="4"
            className={styles.textareaField}
            style={{ marginTop: 20 }}
          ></textarea>
          <Box className={styles.buttonGroup}>
            <Button variant="outlined" onClick={handleCloseDrawer}>
              Close
            </Button>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* -------------------------------------------- */}

      <Drawer
  anchor="top"
  open={openTopDrawer}
  onClose={handleCloseTopDrawer}
  PaperProps={{
    sx: {
      width: "100%",
      maxWidth: "800px",
      margin: "auto",
      height: "auto",
      maxHeight: "80vh",
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
        <div className={styles.profileImage}>
          <img src={avatar} alt="Profile"/>
          {/* <div className={styles.placeholderIcon}></div> */}
        </div>
      </div>
      <div className={styles.sliderInfoContainer}>
        <div className={styles.sliderName}>Yamin</div>
        <div className={styles.sliderRole}>SUPPLIER</div>
      </div>
    </div>
    <div className={styles.basicInfo}>
      <h3>Basic Information</h3>
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Company</span>
          <span className={styles.infoValue}>Yippee</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Email</span>
          <span className={styles.infoValue}>Not provided</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Phone</span>
          <span className={styles.infoValue}>+880</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>City</span>
          <span className={styles.infoValue}>Not provided</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>State</span>
          <span className={styles.infoValue}>Not provided</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Zip Code</span>
          <span className={styles.infoValue}>Not provided</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Address</span>
          <span className={styles.infoValue}>Not provided</span>
        </div>
      </div>
    </div>
  </div>
  <button onClick={handleCloseTopDrawer} className={styles.closeButton}>
    Close
  </button>
</Drawer>



    </div>
  );
}
