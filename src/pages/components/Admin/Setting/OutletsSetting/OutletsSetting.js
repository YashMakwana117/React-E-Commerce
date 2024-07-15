import React, { useState } from 'react';
import styles from './OutletsSetting.module.css';
import { Modal, Box, Button } from '@mui/material';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    maxHeight: '90vh',
    overflowY: 'auto'
};

export default function OutletsSetting() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <>
            <div className={styles.OutletsSettingMain}>
                <div className={styles.OutletsSettingMainHeader}>
                    <h2>Outlets</h2>
                    <button className={styles.outletsbtn} onClick={handleOpenModal}>+ Add Outlets</button>
                </div>
                <hr/>
                <div className={styles.OutletsSettingTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>test</td>
                                <td>Active</td>
                                <td>
                                    {/* action btn */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="outlet-modal-title"
            >
                <Box sx={modalStyle} className={styles.modalBox}>
                    <div className={styles.modalHeader}>
                        <h2 id="outlet-modal-title">Outlets</h2>
                        <button onClick={handleCloseModal} className={styles.closeButton}>×</button>
                    </div>
                    <form className={styles.modalForm}>
                        <div className={styles.formRow}>
                            <label htmlFor="name">NAME *</label>
                            <input type="text" id="name" name="name" required style={{width:'97%'}} />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="latLong">LATITUDE/LONGITUDE</label>
                            <div className={styles.latLongInputs}>
                                <input type="text" id="latitude" name="latitude" placeholder="Latitude" style={{width:'97%'}} />
                                <input type="text" id="longitude" name="longitude" placeholder="Longitude" style={{width:'97%'}} />
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" id="email" name="email" style={{width:'97%'}} />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="phone">PHONE</label>
                            <div className={styles.phoneInput}>
                                <select id="countryCode" name="countryCode">
                                    <option value="AW">AW +297</option>
                                    {/* Add more country codes as needed */}
                                </select>
                                <input type="text" id="phone" name="phone" />
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="city">CITY *</label>
                            <input type="text" id="city" name="city" required style={{width:'97%'}} />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="state">STATE *</label>
                            <input type="text" id="state" name="state" required style={{width:'97%'}} />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="zipCode">ZIP CODE *</label>
                            <input type="text" id="zipCode" name="zipCode" required style={{width:'97%'}} />
                        </div>
                        <div className={styles.formRow}>
                            <label>STATUS *</label>
                            <div className={styles.radioGroup}>
                                <input type="radio" id="active" name="status" value="Active" defaultChecked />
                                <label htmlFor="active">Active</label>
                                <input type="radio" id="inactive" name="status" value="Inactive" />
                                <label htmlFor="inactive">Inactive</label>
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="address">ADDRESS *</label>
                            <textarea id="address" name="address" rows="4" required></textarea>
                        </div>
                        <div className={styles.formActions}>
                            <Button onClick={handleCloseModal} className={styles.closeButton}>Close</Button>
                            <Button type="submit" variant="contained" className={styles.saveButton}>Save</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    );
}