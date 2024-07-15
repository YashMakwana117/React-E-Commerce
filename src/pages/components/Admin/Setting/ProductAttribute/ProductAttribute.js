import React, { useState } from "react";
import styles from "./ProductAttribute.module.css";
import eye from "../../../../../assets/image/eye.png";
import edit from "../../../../../assets/image/edit.png";
import deleteicon from "../../../../../assets/image/delete.png";
import { Modal, Box, Button } from '@mui/material';


export default function ProductAttribute() {

    const [openModal,setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

  return (
    <>
      <div className={styles.ProductAttributeMain}>
        <div className={styles.ProductAttributeMainHeader}>
          <h2>Product Attribute</h2>
          <button className={styles.addattibutebtn} onClick={handleOpenModal} >+ Add attribute</button>
        </div>
        <hr />
        <div className={styles.ProductAttributeMainTable}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Test</td>
                <td>
                  <div className={styles.SliderImageSettingIcon}>
                    <button className={styles.viewButton}>
                      <img src={eye} alt="view" className={styles.icon} />
                      View
                    </button>
                    <button className={styles.editButton} onClick={handleOpenModal} >
                      <img src={edit} alt="edit" className={styles.icon} />
                      Edit
                    </button>
                    <button className={styles.deleteButton}>
                      <img
                        src={deleteicon}
                        alt="delete"
                        className={styles.icon}
                      />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Modal open={openModal} onClose={handleCloseModal} >
          <Box className={styles.modalContent}>
            <div className={styles.header}>
              <span className={styles.title}>Product Attributes</span>
            </div>
            <input
              className={styles.inputField}
              type="text"
              name="prod-attri-text"
              placeholder="Name"
              required
              style={{width:'94%'}}
            />
            <div className={styles.actions}>
              <Button variant="contained" color="primary">
                Save
              </Button>
              <Button onClick={handleCloseModal}>Close</Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
