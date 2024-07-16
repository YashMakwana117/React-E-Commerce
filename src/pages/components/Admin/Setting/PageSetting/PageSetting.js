import React, { useState } from "react";
import styles from "./PageSetting.module.css";
import { Modal, Box, Fade } from "@mui/material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function PageSetting() {
    
  const [openModal, setOpenModal] = useState(false);
  const [editorContent, setEditorContent] = useState('');

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{'script': 'sub'}, {'script': 'super'}],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };
  
  return (
    <>
      <div className={styles.PageSettingMain}>
        <div className={styles.PageSettingMainHeader}>
          <h2>Pages</h2>
          <button className={styles.addpagebtn} onClick={handleOpenModal}>
            + Add Page
          </button>
        </div>
        <div className={styles.PageSettingMainTable}>
          <table>
            <thead>
              <tr>
                <th>TITLE</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>test</td>
                <td>Active</td>
                <td>{/* action btn */}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}

      <Modal open={openModal} onClose={handleCloseModal}>
        <Fade in={openModal} timeout={700}>
        <Box className={styles.modalContent}>
          <div className={styles.header}>
            <h2>Pages</h2>
            <button onClick={handleCloseModal} className={styles.closeButton}>
              ×
            </button>
          </div>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="title">TITLE *</label>
              <input
                type="text"
                id="title"
                className={styles.inputField}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>STATUS *</label>
              <div className={styles.radioGroup}>
                <input
                  type="radio"
                  id="active"
                  name="status"
                  value="active"
                />
                <label htmlFor="active">Active</label>
                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value="inactive"
                />
                <label htmlFor="inactive">Inactive</label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="menuSection">MENU SECTION *</label>
              <select id="menuSection" className={styles.selectField} required>
                <option value="">--</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="menuTemplate">MENU TEMPLATE</label>
              <select id="menuTemplate" className={styles.selectField}>
                <option value="">--</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>IMAGE</label>
              <div className={styles.fileInput}>
                <input type="file" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>DESCRIPTION *</label>
              <div className={styles.editorToolbar}>
                {/* Add editor toolbar buttons here */}
                <ReactQuill 
                theme="snow"
                value={editorContent}
                onChange={setEditorContent}
                modules={modules}
              />
              </div>
            </div>
            <div className={styles.formActions}>
              <button
                type="button"
                onClick={handleCloseModal}
                className={styles.closeButtonSecondary}
              >
                Close
              </button>
              <button type="submit" className={styles.saveButton}>
                Save
              </button>
            </div>
          </form>
        </Box>
        </Fade>
      </Modal>
    </>
  );
}
