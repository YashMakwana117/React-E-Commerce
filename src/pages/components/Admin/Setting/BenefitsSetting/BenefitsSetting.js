import React, { useState } from 'react'
import styles from './BenefitsSetting.module.css'; 
import { Modal, Box, Fade } from '@mui/material';

export default function BenefitsSetting() {

  const [openModal,setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
        <div className={styles.BenefitsSettingMain}>
            <div className={styles.BenefitsSettingMainHeader}>
                <h2>Benefits</h2>
                <button className={styles.addbenefitbtn} onClick={handleOpenModal}>+ Add Benefits</button>
            </div>
            <hr/>
            <div className={styles.BenefitsSettingMainTable}>
                <table className={styles.table}>
                  <thead>
                      <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>test</td>
                        <td>test test</td>
                        <td>Active</td>
                        <td>
                          {/* action btn goes here */}
                        </td>
                      </tr>
                  </tbody>
                </table>
            </div>
        </div>


        <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="benefits-modal-title"
      >
        <Fade in={openModal} timeout={700}>
        <Box className={styles.modalContent}>
          <h2 id="benefits-modal-title">Benefits</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="title">TITLE *</label>
              <input type="text" id="title" required style={{width:'95.5%'}} />
            </div>
            <div className={styles.formGroup}>
              <label>STATUS *</label>
              <div className={styles.radioGroup}>
                <label>
                  <input type="radio" name="status" value="active" defaultChecked /> Active
                </label>
                <label>
                  <input type="radio" name="status" value="inactive" /> Inactive
                </label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="image">IMAGE (24PX24PX) *</label>
              <input type="file" id="image" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="description">DESCRIPTION *</label>
              <textarea id="description" required></textarea>
            </div>
            <div className={styles.buttonGroup}>
              <button type="button" onClick={handleCloseModal} className={styles.closeButton}>Close</button>
              <button type="submit" className={styles.saveButton}>Save</button>
            </div>
          </form>
        </Box>
        </Fade>
      </Modal>


    </>
  )
}
