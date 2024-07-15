import React, { useState } from 'react';
import styles from './SliderImageSetting.module.css';
import eye from '../../../../../assets/image/eye.png';
import edit from '../../../../../assets/image/edit.png';
import deleteicon from '../../../../../assets/image/delete.png';
import { Modal, Box, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import UploadIcon from "../../../../../assets/image/upload.png";
import {TextField } from '@mui/material';
import Drawer from "@mui/material/Drawer";
import img from '../../../../../assets/image/11.png';

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


export default function SliderImageSetting() {

    const [open,setOpen] = useState(false);
    const [openDrawer,setOpenDrawer] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleCloseDrawer = () => {
        setOpenDrawer(false);
    }

    const handleOpenDrawer = () => {
        setOpenDrawer(true);
    }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sliders</h2>
        <button className={styles.addButton} onClick={handleOpen}>
          + Add Slider
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>
              <span className={styles.active}>Active</span>
            </td>
            <td>
              <div className={styles.SliderImageSettingIcon}>
                <button
                  className={styles.viewButton}
                  onClick={handleOpenDrawer}
                >
                  <img src={eye} alt="view" className={styles.icon} />
                  View
                </button>
                <button className={styles.editButton} onClick={handleOpen}>
                  <img src={edit} alt="edit" className={styles.icon} />
                  Edit
                </button>
                <button className={styles.deleteButton}>
                  <img src={deleteicon} alt="delete" className={styles.icon} />
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <span className={styles.active}>Active</span>
            </td>
            <td>
              <div className={styles.SliderImageSettingIcon}>
                <button
                  className={styles.viewButton}
                  onClick={handleOpenDrawer}
                >
                  <img src={eye} alt="view" className={styles.icon} />
                  View
                </button>
                <button className={styles.editButton} onClick={handleOpen}>
                  <img src={edit} alt="edit" className={styles.icon} />
                  Edit
                </button>
                <button className={styles.deleteButton}>
                  <img src={deleteicon} alt="delete" className={styles.icon} />
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <span className={styles.active}>Active</span>
            </td>
            <td>
              <div className={styles.SliderImageSettingIcon}>
                <button
                  className={styles.viewButton}
                  onClick={handleOpenDrawer}
                >
                  <img src={eye} alt="view" className={styles.icon} />
                  View
                </button>
                <button className={styles.editButton} onClick={handleOpen}>
                  <img src={edit} alt="edit" className={styles.icon} />
                  Edit
                </button>
                <button className={styles.deleteButton}>
                  <img src={deleteicon} alt="delete" className={styles.icon} />
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Showing 1 to 3 of 3 entries</p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            ...modalStyle,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: open
              ? "translate(-50%, -50%)"
              : "translate(-50%, -100%)",
            width: "80%", // Adjust width as needed
            maxWidth: 400, // Maximum width for larger screens
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "6px",
            p: 4,
            transition: "transform 0.3s ease-out",
          }}
        >
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "black", mb: 2 }}
          >
            Sliders
          </Typography>
          <hr />
          <form>
            <Box sx={{ mt: 2 }}>
              <input
                type="text"
                placeholder="title"
                required
                style={{
                  display: "block",
                  marginBottom: "10px",
                  padding: "8px",
                  width: "100%",
                }}
              />
              <input
                type="text"
                placeholder="link"
                required
                style={{
                  display: "block",
                  marginBottom: "10px",
                  padding: "8px",
                  width: "100%",
                }}
              />
              <div className={styles.fileInput}>
                <input
                  accept="image/png, image/jpeg, image/jpg"
                  id="upload-logo"
                  type="file"
                />
                <label htmlFor="upload-logo">
                  <img
                    src={UploadIcon}
                    alt="upload"
                    style={{ width: "24px", marginRight: "8px" }}
                  />
                  Choose File
                </label>
                <span>No file chosen</span>
              </div>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Active"
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  value="In-Active"
                  control={<Radio />}
                  label="In-Active"
                />
              </RadioGroup>
              <TextField
                className={styles.TextField}
                label="Discription"
                multiline
                rows={4}
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
              <button type="submit" className={styles.AnalyticsSavebtn}>
                Save
              </button>
              <button
                type="button"
                onClick={handleClose}
                className={styles.AnalyticsClosebtn}
              >
                Close
              </button>
            </Box>
          </form>
        </Box>
      </Modal>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={setOpenDrawer}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "800px",
            margin: "auto",
            height: "auto",
            maxHeight: "90vh",
            overflow: "auto",
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
              <img
                src={img}
                alt="Indian Groceries"
                className={styles.sliderImage}
              />
            </div>
            <div className={styles.sliderInfoContainer}>
              <div className={styles.sliderNumber}>3</div>
              <div className={styles.sliderStatus}>ACTIVE</div>
            </div>
          </div>
        </div>
        <button onClick={handleCloseDrawer} className={styles.closeButton}>
          Close
        </button>
      </Drawer>
    </div>
  );
}
