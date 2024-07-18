import React, { useState } from 'react';
import styles from './SMSGetwaySetting.module.css';

export default function SMSGetwaySetting() {

    const [visibleDiv,setVisibleDiv] = useState('Twillio');
    
    const toggleDiv = (e) => {
        setVisibleDiv(e.target.value);
    }

  return (
    <div className={styles.SMSGetwaySettingMain}>


      <div className={styles.SMSGetwaySettingTabs} data-active={visibleDiv}>
        <button className={visibleDiv === 'Twillio' ? styles.activeTab : ''} value='Twillio' onClick={toggleDiv} >Twilio</button>
        <button className={visibleDiv === 'Clickatell' ? styles.activeTab : ''} value='Clickatell' onClick={toggleDiv} >Clickatell</button>
        <button className={visibleDiv === 'Nexmo' ? styles.activeTab : ''} value='Nexmo' onClick={toggleDiv} >Nexmo</button>
        <select>
          <option>More Gateway</option>
          <option>Msg91</option>
          <option>2Factor</option>
          <option>Bulksms</option>
          <option>Bulksmsbd</option>
          <option>Telesigs</option>
        </select>
      </div>

    {visibleDiv === 'Twillio' && 
      <div className={styles.smsgetwaydiv}>
        <h2>Twilio</h2>
        <div className={styles.SMSGetwayFields}>
          <div className={styles.fieldGroup}>
            <label>TWILIO ACCOUNT SID</label>
            <input type="text" style={{width:'94%'}} />
          </div>
          <div className={styles.fieldGroup}>
            <label>TWILIO AUTH TOKEN</label>
            <input type="text" style={{width:'94%'}} />
          </div>
          <div className={styles.fieldGroup}>
            <label>TWILIO FROM</label>
            <input type="text" style={{width:'94%'}} />
          </div>
          <div className={styles.fieldGroup}>
            <label>TWILIO STATUS</label>
            <select defaultValue="Disable">
              <option>Disable</option>
              <option>Enable</option>
            </select>
          </div>
        </div>
        <button className={styles.saveButton}>Save</button>
      </div>
      }

      {visibleDiv === 'Clickatell' && 
      <div className={styles.smsgetwaydiv}>
        <h2>Clickatell</h2>
        <div className={styles.SMSGetwayFields}>
          <div className={styles.fieldGroup}>
            <label>CLICKATELL APIKEY</label>
            <input type="text" style={{width:'94%'}} />
          </div>
          <div className={styles.fieldGroup}>
            <label>CLICKATELL STATUS</label>
            <select defaultValue="Disable">
              <option>Disable</option>
              <option>Enable</option>
            </select>
          </div>
        </div>
        <button className={styles.saveButton}>Save</button>
      </div>
      }

      {visibleDiv === 'Nexmo' && 
      <div className={styles.smsgetwaydiv}>
        <h2>Nexmo</h2>
        <div className={styles.SMSGetwayFields}>
          <div className={styles.fieldGroup}>
            <label>NEXMO KEY</label>
            <input type="text" style={{width:'94%'}} />
          </div>
          <div className={styles.fieldGroup}>
            <label>NEXMO SECRET</label>
            <input type="text" style={{width:'94%'}} />
          </div>
          <div className={styles.fieldGroup}>
            <label>NEXMO STATUS</label>
            <select defaultValue="Disable">
              <option>Disable</option>
              <option>Enable</option>
            </select>
          </div>
        </div>
        <button className={styles.saveButton}>Save</button>
      </div>
      }


    </div>
  );
}