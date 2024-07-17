import React, { useState } from 'react'
import styles from './RoleandPermissionSetting.module.css';
import { Modal, Box, Button, Fade } from '@mui/material';


export default function RoleandPermissionSetting() {

    const [openModal,setOpenModal] = useState(false);

    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const roles = [
        {name: 'Admin',members: 2},
        {name: 'Customer',members: 4},
        {name: 'Manager',members: 0},
        {name: 'POS Oprater',members: 1},
        {name: 'Stuff',members: 0},
        {name: 'Distributor',members: 1},
        {name: 'Retailer',members: 1},
    ];

  return (
    <>
        <div className={styles.RoleandPermissionSettingMain}>
            <div className={styles.RoleandPermissionSettingHeader}>
                <h2>Role & Permission</h2>
                <button className={styles.addrolebtn} onClick={handleOpen}>+ Add Role</button>
            </div>
            <div className={styles.rolesTable}>
                {roles.map((role,index) => (
                    <div className={styles.roleRow} key={index}>
                        <div className={styles.roleInfo}>
                            <span className={styles.roleName}>{role.name}</span>
                            <span className={styles.roleMember}>Member - {role.members}</span>
                        </div>
                        <div className={styles.roleActions}>
                            <button className={styles.permissionsBtn}>Permissions</button>
                            <button className={styles.editBtn} onClick={handleOpen}>Edit</button>
                            {index > 4 && <button className={styles.deleteBtn}>Delete</button>}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.tablePagination}>
                Showing 1 to 7 of 7 entries
            </div>
        </div>

       {/* -------------------------------------------------------------------------------------- */}

        <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="role-modal-title"
        >
            <Fade in={openModal} timeout={700}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
            }}>
                <h2 id="role-modal-title" className={styles.modalTitle}>Role</h2>
                <form className={styles.form}>
                <label htmlFor="name" className={styles.label}>NAME <span className={styles.required}>*</span></label>
                <input type="text" id="name" name="name" required className={styles.input} />
                </form>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button onClick={handleClose} sx={{ mr: 1 }}>Close</Button>
                <Button variant="contained" color="primary">Save</Button>
                </Box>
            </Box>
            </Fade>
        </Modal>
    </>
  )
}
