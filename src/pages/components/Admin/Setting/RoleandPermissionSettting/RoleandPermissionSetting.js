import React, { useState } from 'react'
import styles from './RoleandPermissionSetting.module.css';
import { Modal, Box, Button, Fade, Drawer } from '@mui/material';



export default function RoleandPermissionSetting() {

    const [openModal,setOpenModal] = useState(false);
    const [openDrawer,setOpenDrawer] = useState(false);

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
    
    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);

    const permission = [
        {id: 1,page: 'Dashboard',create: false, update: false,delete: false,view: false},
        {id: 2,page: 'Product',create: true, update: true,delete: true,view: true},
        {id: 3,page: 'Purchase',create: true, update: true,delete: true,view: true},
        {id: 4,page: 'Damages',create: true, update: true,delete: true,view: true},
        {id: 5,page: 'Stock',create: false, update: false,delete: false,view: false},
        {id: 6,page: 'POS',create: false, update: false,delete: false,view: false},
        {id: 7,page: 'POS Order',create: false, update: false,delete: false,view: false},
        {id: 8,page: 'Online Order',create: false, update: false,delete: false,view: false},
        {id: 9,page: 'Return And Refunds',create: false, update: false,delete: false,view: false},
        {id: 10,page: 'Return Order',create: true, update: true,delete: true,view: true},
        {id: 11,page: 'Cupoons',create: true, update: true,delete: true,view: true},
        {id: 12,page: 'Promotions',create: true, update: true,delete: true,view: true},
        {id: 13,page: 'Product Section',create: true, update: true,delete: true,view: true},
        {id: 14,page: 'Push Notification',create: true, update: true,delete: true,view: true},
        {id: 15,page: 'Subscriber',create: false, update: false,delete: false,view: false},
        {id: 16,page: 'Administator',create: true, update: true,delete: true,view: true},
        {id: 17,page: 'Customers',create: true, update: true,delete: true,view: true},
        {id: 18,page: 'Employees',create: true, update: true,delete: true,view: true},
        {id: 19,page: 'Transaction',create: false, update: false,delete: false,view: false},
        {id: 20,page: 'Sales Report',create: false, update: false,delete: false,view: false},
        {id: 21,page: 'Product Report',create: false, update: false,delete: false,view: false},
        {id: 22,page: 'Credit Balance Report',create: false, update: false,delete: false,view: false},
        {id: 23,page: 'Setting',create: false, update: false,delete: false,view: false},
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
                            <button className={styles.permissionsBtn} onClick={handleOpenDrawer}>Permissions</button>
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
        {/* ---------------------------------------------------------------------- */}

        <Drawer anchor="right" open={openDrawer} onClose={handleCloseDrawer}>
        <div className={styles.tableContainer}>
          <h2>Role & Permissions (Admin)</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>PAGE</th>
                <th>CREATE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
                <th>VIEW</th>
              </tr>
            </thead>
            <tbody>
                {permission.map((row) => (
                    <tr key={row.id}>
                        <td>
                            <input type="checkbox" checked={true} readOnly />
                        </td>
                        <td>{row.page}</td>
                        <td>
                            <input type="checkbox" checked={row.create} readOnly />
                        </td>
                        <td>
                            <input type="checkbox" checked={row.update} readOnly />
                        </td>
                        <td>
                            <input type="checkbox" checked={row.delete} readOnly />
                        </td>
                        <td>
                            <input type="checkbox" checked={row.view} readOnly />
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
            <Button variant="contained" color="primary" style={{width:'20%',marginLeft:20,marginBottom:20,backgroundColor:'red'}} onClick={handleCloseDrawer}>Save</Button>
        </Drawer>
    </>
  )
}
