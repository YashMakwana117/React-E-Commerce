import React, { useState } from "react";
import styles from "./LanguagesSetting.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Drawer } from '@mui/material';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';

export default function LanguagesSetting() {

    const [openDrawer,setOpenDrawer] = useState(false);

    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);
    

  const arrlanguage = [
    { name: "Gujrati", code: "GUJ", status: "Active" },
    { name: "Hindi", code: "HI", status: "Active" },
    { name: "English(default)", code: "EN", status: "Active" },
  ];

  return (
    <>
      <div className={styles.LanguagesSettingContainer}>
        <div className={styles.LanguagesSettingMain}>
          <div className={styles.LanguagesSettingMainHeader}>
            <h2>Languages</h2>
            <button className={styles.addlaubtnd}>+ Add Languages</button>
          </div>
          <div className={styles.LanguagesSettingMainTable}>
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>CODE</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {arrlanguage.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.code}</td>
                    <td>{row.status}</td>
                    <td>
                      <div className={styles.LanguagesSettingActionBtn}>
                        <button
                          className={`${styles.actionBtn} ${styles.view}`}
                          onClick={handleOpenDrawer}
                        >
                          <FontAwesomeIcon icon={faEye} /> View
                        </button>
                        <button
                          className={`${styles.actionBtn} ${styles.edit}`}
                        >
                          <FontAwesomeIcon icon={faEdit} /> Edit
                        </button>
                        <button
                          className={`${styles.actionBtn} ${styles.delete}`}
                        >
                          <FontAwesomeIcon icon={faTrashCan} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* --------------------------------------- */}
      
      <Drawer
      anchor="right"
      open={openDrawer}
      onClose={handleCloseDrawer}
    >
      <div className={styles.drawerContent}>
        <h2>Language</h2>
        <div className={styles.languageCircle}>
          <button className={styles.languageImage}>
            <GTranslateOutlinedIcon className={styles.languageIcon} />
          </button>
        </div>
        <p>Gujarati</p>
        <p>ar</p>
        <p>RTL</p>
        <span className={styles.activeTag}>ACTIVE</span>
        <h2>Files</h2>
        <form>
          <label htmlFor="name">NAME *</label>
          <select id="name" name="name" className={styles.selectFeild} required>
            {/* Add your options here */}
          </select>
          <button type="submit" className={styles.getFileButton} onClick={handleCloseDrawer}>Get File Content</button>
        </form>
      </div>
    </Drawer>
    </>
  );
}
