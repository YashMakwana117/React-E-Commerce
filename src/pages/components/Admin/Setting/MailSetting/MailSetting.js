import React from 'react'
import styles from './MailSetting.module.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function MailSetting() {
  return (
    <div className={styles.MailSettingMain}>
        <div className='MailSettingMainh3'>
            <h3>Mail</h3>
        </div>
        <div className={styles.innerMailSettingMain}>
            <div className={styles.innerMailSettingfeilds}>
                <span>Mail Host</span>
                <input type='text' name='mailHost'/>
            </div>
            <div className={styles.innerMailSettingfeilds} style={{marginRight:20}}>
                <span>Mail Port</span>
                <input type='number' name='mailHost'/>
            </div>
        </div>

          <div className={styles.innerMailSettingMain}>
              <div className={styles.innerMailSettingfeilds}>
                  <span>Mail UserName</span>
                  <input type='text' name='mailHost'/>
              </div>
              <div className={styles.innerMailSettingfeilds} style={{marginRight:20}}>
                  <span>Mail Password</span>
                  <input type='password' name='mailHost' style={{padding:8,marginTop:0}}/>
              </div>
          </div>

          <div className={styles.innerMailSettingMain}>
              <div className={styles.innerMailSettingfeilds}>
                  <span>Mail From Name</span>
                  <input type='text' name='mailHost'/>
              </div>
              <div className={styles.innerMailSettingfeilds} style={{marginRight:20}}>
                  <span>Mail From Email</span>
                  <input type='email' name='mailHost' style={{padding:8,marginTop:0}} />
              </div>
          </div>

          <span>MAIL ENCRYPTION</span>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              value='SSL'
              name="mail-setting-radio-buttons-group"
              style={{ marginTop: 15 }}
            >
              <FormControlLabel
                value="SSL"
                control={<Radio />}
                style={{ marginBottom: -12 }}
                label="SSL"
              />
              <FormControlLabel
                value="TLS"
                control={<Radio />}
                style={{ marginBottom: -12 }}
                label="TLS"
              />
            </RadioGroup>
          <button className='maisettingbtn'>
            Save
          </button>
    </div>
  )
}
