import React from 'react'
import styles from './NotificationSetting.module.css';

export default function NotificationSetting() {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Notification</h2>
      <form className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="secretKey">FIREBASE SECRET KEY *</label>
            <input type="text" id="secretKey" required style={{width:360}} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="publicKey">FIREBASE PUBLIC VAPID KEY (KEY PAIR) *</label>
            <input type="text" id="publicKey" required style={{width:360}} />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="apiKey">FIREBASE API KEY *</label>
            <input type="text" id="apiKey" required style={{width:360}} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="authDomain">FIREBASE AUTH DOMAIN *</label>
            <input type="text" id="authDomain" required style={{width:360}} />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="projectId">FIREBASE PROJECT ID *</label>
            <input type="text" id="projectId" required style={{width:360}} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="storageBucket">FIREBASE STORAGE BUCKET *</label>
            <input type="text" id="storageBucket" required style={{width:360}} />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="messageSenderId">FIREBASE MESSAGE SENDER ID *</label>
            <input type="text" id="messageSenderId" required style={{width:360}} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="appId">FIREBASE APP ID *</label>
            <input type="text" id="appId" required style={{width:360}} />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="measurementId">FIREBASE MEASUREMENT ID *</label>
            <input type="text" id="measurementId" required style={{width:360}} />
          </div>
        </div>
        <button type="submit" className={styles.saveButton}>Save</button>
      </form>
    </div>
  )
}
