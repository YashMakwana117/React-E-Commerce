import React from 'react';
import styles from './ThemeSetting.module.css';
import UploadIcon from "../../../../../assets/image/upload.png";
import logo from '../../../../../assets/image/order360.jpg'


export default function ThemeSetting() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Theme</h2>
      
      <div className={styles.section}>
        <label>LOGO (128PX,43PX)</label>
        <div className={styles.fileInput}>
          <input
            accept="image/png, image/jpeg, image/jpg"
            id="upload-logo"
            type="file"
          />
          <label htmlFor="upload-logo">
            <img src={UploadIcon} alt="upload" style={{ width: '24px', marginRight: '8px' }} />
            Choose File
          </label>
          <span>No file chosen</span>
        </div>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      <div className={styles.section}>
        <label>FAV ICON (120PX,120PX)</label>
        <div className={styles.fileInput}>
          <input
            accept="image/png, image/jpeg, image/jpg"
            id="upload-favicon"
            type="file"
          />
          <label htmlFor="upload-favicon">
            <img src={UploadIcon} alt="upload" style={{ width: '24px', marginRight: '8px' }} />
            Choose File
          </label>
          <span>No file chosen</span>
        </div>
        <img src={logo} alt="Favicon" className={styles.favIcon} />
      </div>

      <div className={styles.section}>
        <label>FOOTER LOGO (144PX,48PX)</label>
        <div className={styles.fileInput}>
          <input
            accept="image/png, image/jpeg, image/jpg"
            id="upload-footer-logo"
            type="file"
          />
          <label htmlFor="upload-footer-logo">
            <img src={UploadIcon} alt="upload" style={{ width: '24px', marginRight: '8px' }} />
            Choose File
          </label>
          <span>No file chosen</span>
        </div>
        <img src={logo} alt="Footer Logo" className={styles.footerLogo} />
      </div>

      <button className={styles.saveButton}>Save</button>
    </div>
  );
}
