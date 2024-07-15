import React, { useState } from 'react';
import styles from './Analytics.module.css';
import eye from '../../../../../assets/image/eye.png';
import edit from '../../../../../assets/image/edit.png';
import deleteicon from '../../../../../assets/image/delete.png';
import { Modal, Box, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const modalStyle = {
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, -100%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '6px',
  p: 4,
  transition: 'transform 0.3s ease-out',
};

export default function Analytics() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.AnalyticsMain}>
      <div className={styles['AnalyticsMain-inner']}>
        <h2>Analytics</h2>
        <button className={styles.AnalyticsAddbtn} onClick={handleOpen}>+ Add Analytics</button>
      </div>
      <hr />
      <div className={styles.AnalyticsTable}>
        <table className={styles['AnalyticsTable-Main']}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Active</td>
              <td className={styles.icon}>
                <div className={styles.view}>
                  <img src={eye} alt="View" />
                </div>
                <div className={styles.edit}>
                  <img src={edit} alt="Edit" />
                </div>
                <div className={styles.delete}>
                  <img src={deleteicon} alt="Delete" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            ...modalStyle,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: open ? 'translate(-50%, -50%)' : 'translate(-50%, -100%)',
            width: '80%', // Adjust width as needed
            maxWidth: 400, // Maximum width for larger screens
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: '6px',
            p: 4,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" sx={{ color: 'black', mb: 2 }}>
            Add New Analytics
          </Typography>
          <hr />
          <form>
            <Box sx={{ mt: 2 }}>
              <input
                type="text"
                placeholder="Name"
                required
                style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%' }}
              />
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel value="Active" control={<Radio />} label="Active" />
                <FormControlLabel value="In-Active" control={<Radio />} label="In-Active" />
              </RadioGroup>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <button type="submit" className={styles.AnalyticsSavebtn}>
                Save
              </button>
              <button type="button" onClick={handleClose} className={styles.AnalyticsClosebtn}>
                Close
              </button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
