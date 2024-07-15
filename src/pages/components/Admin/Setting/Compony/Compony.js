import React from 'react';
import styles from './Compony.module.css';


export default function Compony() {

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted');
      // Handle form submission logic here
    };

  return (
    <>
    <div className={styles['compony-main']}>
    <div className={styles.companyForm}>
      <h2>Company</h2>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name">NAME *</label>
            <input type="text" id="name" name="name" placeholder="Dealer Connect" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="latitude">LATITUDE/LONGITUDE</label>
            <div className={styles.coordinateInputs}>
              <input type="text" id="latitude" name="latitude" placeholder="21.2124166" />
              <input type="text" id="longitude" name="longitude" placeholder="72.8501222" />
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">EMAIL *</label>
            <input type="email" id="email" name="email" placeholder="info@cygnux.in" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">PHONE *</label>
            <div className={styles.phoneInput}>
              {/* <select>
                <option>IN +91</option>
              </select> */}
              <input type="tel" id="phone" name="phone" placeholder="9898989898" />
            </div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="website">WEBSITE</label>
            <input type="url" id="website" name="website" placeholder="https://cygnux.in" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="city">CITY *</label>
            <input type="text" id="city" name="city" placeholder="Surat" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="state">STATE *</label>
            <input type="text" id="state" name="state" placeholder="Gujarat" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="country">COUNTRY CODE *</label>
            <select id="country" name="country">
              <option>India (IND)</option>
            </select>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="zipCode">ZIP CODE *</label>
            <input type="text" id="zipCode" name="zipCode" placeholder="359006" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="address">ADDRESS *</label>
            <textarea id="address" name="address" placeholder="Surat Gujarat"></textarea>
          </div>
        </div>
        <button type="submit" className={styles.saveBtn}>Save</button>
      </form>
    </div>
    </div>
    </>
  );
};
