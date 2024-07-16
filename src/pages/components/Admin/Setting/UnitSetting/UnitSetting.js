import React, { useState } from "react";
import styles from "./UnitSetting.module.css";
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
    Fade,
  } from "@mui/material";

export default function UnitSetting() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [openModal,setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const handleClose = () => {
    setOpenModal(false);
  }

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value);
    setPage(1);
  };

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const categories = [
    { name: "Box", code: "122", status: "Active" },
    { name: "Tablet", code: "121", status: "Active" },
    { name: "Bottle", code: "120", status: "Active" },
    { name: "Drops Jar", code: "580", status: "Active" },
    { name: "Fluid ounces", code: "fl oz", status: "Active" },
    { name: "Liters", code: "L", status: "Active" },
    { name: "MiliLiters", code: "ml", status: "Active" },
    { name: "Teaspoons", code: "tsp", status: "Active" },
    { name: "Cups", code: "Cups", status: "Active" },
    { name: "Pounds", code: "lb", status: "Active" },
    { name: "Test", code: "test", status: "Active" },
    { name: "Test 2", code: "test 2", status: "Active" },
  ];

  const togglePages = Math.ceil(categories.length / rowsPerPage);
  const startIdx = (page - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const paginationCategories = categories.slice(startIdx, endIdx);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Typography variant="h5">Units</Typography>
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
                width:'80px',
                border: "none",
                height: "40px",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={handleOpenModal}
            >
              + Units
            </button>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell>CODE</TableCell>
                <TableCell>STATUS</TableCell>
                <TableCell>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginationCategories.map((category, index) => (
                <TableRow key={index}>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.code}</TableCell>
                  <TableCell>{category.status}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      color="success"
                      onClick={handleOpenModal}
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
            count={togglePages}
            page={page}
            onChange={handleChangePage}
            // variant="outlined"
            shape="rounded"
          />
        </div>
      </div>

    {/* ---------------------------------------------------- */}


    <Modal open={openModal} onClose={handleClose} aria-labelledby="unit-modal-title">
      <Fade in={openModal} timeout={700}>
        <div className={styles.modalContent}>
          <div className={styles.header}>
            <h2 id="unit-modal-title">Units</h2>
            <button className={styles.closeButton} onClick={handleClose}>×</button>
          </div>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="name">NAME *</label>
              <input className={styles.input} type="text" id="name" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="code">CODE *</label>
              <input className={styles.input} type="text" id="code" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>STATUS *</label>
              <div className={styles.radioGroup}>
                <input className={styles.radio} type="radio" id="active" name="status" value="active" defaultChecked />
                <label htmlFor="active">Active</label>
                <input className={styles.radio} type="radio" id="inactive" name="status" value="inactive" />
                <label htmlFor="inactive">Inactive</label>
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.closeBtn} type="button" onClick={handleClose}>Close</button>
              <button className={styles.saveBtn}>Save</button>
            </div>
          </form>
        </div>
      </Fade>
    </Modal>


    </>
  );
}
