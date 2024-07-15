import React from 'react';
import styles from './Site.module.css';

export default function Site() {

  const handleChange = (event) => {
    // Handle change logic here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('form submitted.....');
  }; 

  return (
    <div className={styles['site-settings']}>
      <h2>Site Settings</h2>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label htmlFor="dateFormat">DATE FORMAT *</label>
            <select id="dateFormat" name="dateFormat" onChange={handleChange}>
              <option value="">d-m-Y (02-07-2024)</option>
            </select>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="timeFormat">TIME FORMAT *</label>
            <select id="timeFormat" name="timeFormat" onChange={handleChange}>
              <option value="">12 Hour (11:41 PM)</option>
            </select>
          </div>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label htmlFor="defaultTimezone">DEFAULT TIMEZONE *</label>
            <select id="defaultTimezone" name="defaultTimezone" onChange={handleChange}>
              <option value="">Asia/Dhaka</option>
            </select>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="defaultLanguage">DEFAULT LANGUAGE *</label>
            <select id="defaultLanguage" name="defaultLanguage" onChange={handleChange}>
              <option value="">English</option>
            </select>
          </div>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label htmlFor="defaultSmsGateway">DEFAULT SMS GATEWAY</label>
            <select id="defaultSmsGateway" name="defaultSmsGateway" onChange={handleChange}>
              <option value="">--</option>
            </select>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="copyright">COPYRIGHT *</label>
            <input type="text" id="copyright" name="copyright" placeholder="cygnux" onChange={handleChange} />
          </div>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label htmlFor="androidAppLink">ANDROID APP LINK</label>
            <input type="text" id="androidAppLink" name="androidAppLink" placeholder="Enter Android app link" onChange={handleChange} />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="iosAppLink">IOS APP LINK</label>
            <input type="text" id="iosAppLink" name="iosAppLink" placeholder="Enter iOS app link" onChange={handleChange} />
          </div>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label htmlFor="nonPurchaseProductMaxQuantity">NON PURCHASE PRODUCT MAXIMUM QUANTITY *</label>
            <input type="number" id="nonPurchaseProductMaxQuantity" name="nonPurchaseProductMaxQuantity" placeholder="100" onChange={handleChange} />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="digitAfterDecimalPoint">DIGIT AFTER DECIMAL POINT <br/>(EX: 0.00) *</label>
            <input type="number" className='ddttdd' id="digitAfterDecimalPoint" name="digitAfterDecimalPoint" placeholder="2" onChange={handleChange} />
          </div>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label htmlFor="defaultCurrency">DEFAULT CURRENCY *</label>
            <select id="defaultCurrency" name="defaultCurrency" onChange={handleChange}>
              <option value="">Rupee (₹)</option>
            </select>
          </div>
          <div className={styles['form-group']}>
            <label>CURRENCY POSITION *</label>
            <div className={styles['radio-group']}>
              <input type="radio" id="currencyLeft" name="currencyPosition" value="left" onChange={handleChange} />
              <label htmlFor="currencyLeft">(₹) Left</label>
              <input type="radio" id="currencyRight" name="currencyPosition" value="right" onChange={handleChange} />
              <label htmlFor="currencyRight">Right (₹)</label>
            </div>
          </div>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label>CASH ON DELIVERY *</label>
            <div className={styles['radio-group']}>
              <input type="radio" id="cashEnable" name="cashOnDelivery" value="enable" onChange={handleChange} />
              <label htmlFor="cashEnable">Enable</label>
              <input type="radio" id="cashDisable" name="cashOnDelivery" value="disable" onChange={handleChange} />
              <label htmlFor="cashDisable">Disable</label>
            </div>
          </div>
          <div className={styles['form-group']}>
            <label>IS RETURN PRODUCT PRICE ADD TO CREDIT *</label>
            <div className={styles['radio-group']}>
              <input type="radio" id="returnYes" name="isReturnProductPriceAddToCredit" value="yes" onChange={handleChange} />
              <label htmlFor="returnYes">Yes</label>
              <input type="radio" id="returnNo" name="isReturnProductPriceAddToCredit" value="no" onChange={handleChange} />
              <label htmlFor="returnNo">No</label>
            </div>
          </div>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label>ONLINE PAYMENT GATEWAY *</label>
            <div className={styles['radio-group']}>
              <input type="radio" id="paymentEnable" name="onlinePaymentGateway" value="enable" onChange={handleChange} />
              <label htmlFor="paymentEnable">Enable</label>
              <input type="radio" id="paymentDisable" name="onlinePaymentGateway" value="disable" onChange={handleChange} />
              <label htmlFor="paymentDisable">Disable</label>
            </div>
          </div>
          <div className={styles['form-group']}>
            <label>LANGUAGE SWITCH *</label>
            <div className={styles['radio-group']}>
              <input type="radio" id="languageEnable" name="languageSwitch" value="enable" onChange={handleChange} />
              <label htmlFor="languageEnable">Enable</label>
              <input type="radio" id="languageDisable" name="languageSwitch" value="disable" onChange={handleChange} />
              <label htmlFor="languageDisable">Disable</label>
            </div>
          </div>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label>EMAIL VERIFICATION *</label>
            <div className={styles['radio-group']}>
              <input type="radio" id="emailEnable" name="emailVerification" value="enable" onChange={handleChange} />
              <label htmlFor="emailEnable">Enable</label>
              <input type="radio" id="emailDisable" name="emailVerification" value="disable" onChange={handleChange} />
              <label htmlFor="emailDisable">Disable</label>
            </div>
          </div>
          <div className={styles['form-group']}>
            <label>PHONE VERIFICATION *</label>
            <div className={styles['radio-group']}>
              <input type="radio" id="phoneEnable" name="phoneVerification" value="enable" onChange={handleChange} />
              <label htmlFor="phoneEnable">Enable</label>
              <input type="radio" id="phoneDisable" name="phoneVerification" value="disable" onChange={handleChange} />
              <label htmlFor="phoneDisable">Disable</label>
            </div>
          </div>
        </div>

        <div className={styles['form-row']}>
          <div className={styles['form-group']}>
            <label>APP DEBUG *</label>
            <div className={styles['radio-group']}>
              <input type="radio" id="debugEnable" name="appDebug" value="enable" onChange={handleChange} />
              <label htmlFor="debugEnable">Enable</label>
              <input type="radio" id="debugDisable" name="appDebug" value="disable" onChange={handleChange} />
              <label htmlFor="debugDisable">Disable</label>
            </div>
          </div>
          <div className={styles['form-group']}>
            <label>AUTO UPDATE *</label>
            <div className={styles['radio-group']}>
              <input type="radio" id="updateEnable" name="autoUpdate" value="enable" onChange={handleChange} />
              <label htmlFor="updateEnable">Enable</label>
              <input type="radio" id="updateDisable" name="autoUpdate" value="disable" onChange={handleChange} />
              <label htmlFor="updateDisable">Disable</label>
            </div>
          </div>
        </div>

        <button type="submit" className={styles['save-button']}>Save</button>
      </form>
    </div>
  );
}
