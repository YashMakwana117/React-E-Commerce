import React, { useState } from 'react';
import styles from './CookieSetting.module.css';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

export default function CookieSetting() {
  const [otpType, setOtpType] = useState('');

  const handleOtpTypeChange = (event) => {
    setOtpType(event.target.value);
  };

  return (
    <div className={styles.CookieSettingMain}>
      <div className={styles.Header}>
        <h2>Cookies</h2>
      </div>
      <hr />
      <FormControl className={styles.OtpSelect}>
        <InputLabel id="otp-type-select-label">COOKIES DETAILS PAGE</InputLabel>
        <Select
          className={styles.Select}
          labelId="otp-type-select-label"
          value={otpType}
          onChange={handleOtpTypeChange}
          label="COOKIES DETAILS PAGE"
        >
          <MenuItem value="--">--</MenuItem>
          <MenuItem value="both">Both</MenuItem>
          <MenuItem value="sms">SMS</MenuItem>
          <MenuItem value="email">Email</MenuItem>
        </Select>
      </FormControl>
      <TextField
        className={styles.TextField}
        label="COOKIES SUMMARY"
        multiline
        rows={4}
        variant="outlined"
      />
      <button className={styles.SaveButton}>Save</button>
    </div>
  );
}
