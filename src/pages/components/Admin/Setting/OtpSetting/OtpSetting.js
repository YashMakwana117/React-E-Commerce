import React, { useState } from 'react';
import styles from './OtpSetting.module.css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function OtpSetting() {
  const [selectedOtp, setSelectedOtp] = useState('');
  const [selectOtpDigit,setSelectOtpDigit] = useState('');
  const [selectOtpTimeExpire,setSelectOtpTimeExpire] =useState('');

  const handleChangeOtpType = (event) => {
    setSelectedOtp(event.target.value);
  };

  const handleChangeOtpDigit = (e) => {
    setSelectOtpDigit(e.target.value);
  };

  const handleChangeOtpTimeExpire = (e) => {
    setSelectOtpTimeExpire(e.target.value);
  };

  return (
    <div className={styles.OtpSettingMain}>
      
        <div className={styles.innerOtpsettingMain}>
            <div className={styles.otpsettingh3}>
                <h3>OTP</h3>
            </div>
                <hr/>
            <FormControl className={styles.OtpSelect}>
            <InputLabel id="otp-type-select-label">Select OTP type</InputLabel>
            <Select
                labelId="otp-type-select-label"
                value={selectedOtp}
                onChange={handleChangeOtpType}
                label="Select OTP type"
                style={{ width: 300 }}
            >
                <MenuItem value="both" style={{marginTop:10}}>BOTH</MenuItem>
                <MenuItem value="sms" style={{marginTop:10}}>SMS</MenuItem>
                <MenuItem value="email" style={{marginTop:10}}>EMAIL</MenuItem>
            </Select>
            </FormControl>
            <FormControl className={styles.OtpSelect}>
            <InputLabel id="otp-digit-select-label">OTP DIGIT LIMIT</InputLabel>
            <Select
                labelId="otp-digit-select-label"
                value={selectOtpDigit}
                onChange={handleChangeOtpDigit}
                label="OTP DIGIT LIMIT"
                style={{ width: 300 }}
            >
                <MenuItem value="4" style={{marginTop:10}}>4</MenuItem>
                <MenuItem value="6" style={{marginTop:10}}>6</MenuItem>
                <MenuItem value="8" style={{marginTop:10}}>8</MenuItem>
            </Select>
            </FormControl>
            <FormControl className={styles.OtpSelect}>
            <InputLabel id="otp-time-select-label">OTP Time Expire</InputLabel>
            <Select
                labelId="otp-time-select-label"
                value={selectOtpTimeExpire}
                onChange={handleChangeOtpTimeExpire}
                label="OTP EXPIRE TIME"
                style={{ width: 300 }}
            >
                <MenuItem value="5-minutes" style={{marginTop:10}}>5 Minutes</MenuItem>
                <MenuItem value="10-minutes" style={{marginTop:10}}>10 Minutes</MenuItem>
                <MenuItem value="15-minutes" style={{marginTop:10}}>15 Minutes</MenuItem>
                <MenuItem value="20-minutes" style={{marginTop:10}}>20 Minutes</MenuItem>
                <MenuItem value="30-minutes" style={{marginTop:10}}>30 Minutes</MenuItem>
                <MenuItem value="40-minutes" style={{marginTop:10}}>40 Minutes</MenuItem>
                <MenuItem value="50-minutes" style={{marginTop:10}}>50 Minutes</MenuItem>
                <MenuItem value="60-minutes" style={{marginTop:10}}>60 Minutes</MenuItem>
            </Select>
            </FormControl>
            <button className='optsettingbtn' style={{width:150,height:30,color:'white',backgroundColor:'red',border:'none',borderRadius:6,cursor:'pointer'}}>
                Save
            </button>
        </div>
    </div>
  );
}
