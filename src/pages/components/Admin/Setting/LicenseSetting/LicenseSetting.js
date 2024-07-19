import React from 'react'
import styles from './LicenseSetting.module.css';



export default function LicenseSetting() {
  return (
    <>
        <div className={styles.licenseContainer}>
            <h2>License</h2>
            <form>
                <div className={styles.formGroup}>
                <label htmlFor="licenseKey">
                    LICENSE KEY <span className={styles.required}>*</span>
                </label>
                <input
                    type="text"
                    id="licenseKey"
                    required
                    style={{width:'93%'}}
                />
                </div>
                <button type="submit" className={styles.saveButton}>Save</button>
            </form>
        </div>
    </>
  )
}
