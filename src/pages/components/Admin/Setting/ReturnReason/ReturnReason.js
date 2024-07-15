import React, { useState } from "react";
import styles from "./ReturnReason.module.css";
import eye from "../../../../../assets/image/eye.png";
import edit from "../../../../../assets/image/edit.png";
import deleteicon from "../../../../../assets/image/delete.png";
import {
    Modal,
    Box,
    Button,
    Typography,
    TextField,
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@mui/material';


export default function ReturnReason() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={styles.ReturnReasonMain}>
        <div className={styles.ReturnReasonMainHeader}>
          <h2>Return Reason</h2>
          <button className={styles.addReturnReasonBtn} onClick={handleOpenModal}>
            + Add Return Reason
          </button>
        </div>
        <hr />
        <div className={styles.ReturnReasonMainTable}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>test</td>
                <td>Active</td>
                <td>none</td>
                <td>
                  <div className={styles.SliderImageSettingIcon}>
                    <button className={styles.viewButton}>
                      <img src={eye} alt="view" className={styles.icon} />
                      View
                    </button>
                    <button className={styles.editButton}>
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
        <Modal open={openModal} onClose={handleCloseModal}>
        <Box className={styles.modalContent}>
          <Typography variant="h6" component="h2" className={styles.title}>
            Product Brands
          </Typography>
          
          <input
            required
            type='text'
            name='modal-text'
            placeholder='Name'
            style={{width:'95%'}}
            className={styles.inputField}
          />
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

          <TextField
            fullWidth
            multiline
            rows={4}
            label="DETAILS"
            variant="outlined"
            className={styles.inputField}
          />
          
          <Box className={styles.buttonGroup}>
            <Button variant="outlined" onClick={handleCloseModal}>Close</Button>
            <Button variant="contained" color="primary">Save</Button>
          </Box>
        </Box>
      </Modal>
      </div>
    </>
  );
}
