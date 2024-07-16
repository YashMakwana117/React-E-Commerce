import React, { useState } from 'react'
import styles from './TaxSetting.module.css';
import { Modal, Box } from '@mui/material';

export default function TaxSetting() {

    const [openModal,setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

  return (
    <>
        <div className={styles.TaxSettingMain}>
            <div className={styles.TaxSettingMainHeader}>
                <h2>Taxes</h2>
                <button className={styles.addtaxesbtn} onClick={handleOpenModal}>+ Add Taxes</button>
            </div>
            <div className={styles.TaxSettingMainTable}>
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>CODE</th>
                            <th>TAX RATE</th>
                            <th>STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>test</td>
                            <td>111</td>
                            <td>18%</td>
                            <td>Active</td>
                            <td>
                                {/* Action btn */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* ------------------------------------------------ */}
        
        
        <Modal open={openModal} onClose={handleCloseModal}>
            <Box className={styles.modalContent}>
                <h2 className={styles.modalTitle}>Taxes</h2>
                <form className={styles.form}>
                    <div className={styles.formRow}>
                    <div className={styles.formField}>
                        <label htmlFor="name">NAME *</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className={styles.formField}>
                        <label>STATUS *</label>
                        <div className={styles.radioGroup}>
                        <label>
                            <input type="radio" name="status" value="active" defaultChecked />
                            Active
                        </label>
                        <label>
                            <input type="radio" name="status" value="inactive" />
                            Inactive
                        </label>
                        </div>
                    </div>
                    </div>
                    <div className={styles.formRow}>
                    <div className={styles.formField}>
                        <label htmlFor="code">CODE *</label>
                        <input type="text" id="code" required />
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="taxRate">TAX RATE *</label>
                        <input type="number" id="taxRate" required />
                    </div>
                    </div>
                    <div className={styles.buttonGroup}>
                    <button type="button" onClick={handleCloseModal} className={styles.closeButton}>Close</button>
                    <button type="submit" className={styles.saveButton}>Save</button>
                    </div>
                </form>
            </Box>
        </Modal>

    </>
  )
}
