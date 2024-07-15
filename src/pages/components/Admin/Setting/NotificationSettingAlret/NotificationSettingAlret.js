import React, { useState } from 'react'
import styles from './NotificationSettingAlret.module.css'


export default function NotificationSettingAlret() {

  const [states,setStates] = useState('Mail');

  const toggleTabButton = (e) => {
    setStates(e.target.value);
  }

  return (
    <>
      <div className={styles.NotificationSettingAlretMain}>
          <div className={styles.NotificationSettingTabbtn} data-active={states}>
              <button className={`${styles.NotificationSettingAlretTabbtn} ${states === 'Mail' ? styles.active : ''}`} value='Mail' onClick={toggleTabButton}>MAIL</button>
              <button className={`${styles.NotificationSettingAlretTabbtn} ${states === 'SMS' ? styles.active : ''}`}  value='SMS' onClick={toggleTabButton}>SMS</button>
              <button className={`${styles.NotificationSettingAlretTabbtn} ${states === 'Push' ? styles.active : ''}`} value='Push' onClick={toggleTabButton}>PUSH NOTIFICATION</button>
          </div>
            <div className={styles['NotificationSettingAlretMain-inner']}>
              {states === 'Mail' && (
                <div className={styles['NotificationSettingAlretMain-heading-Mail']}>
                    <h2>Mail Notification Messages</h2>
                </div>
              )}
              {states === 'SMS' && (
                <div className={styles['NotificationSettingAlretMain-heading-SMS']}>
                    <h2>SMS Notification Messages</h2>
                </div>
              )}
              {states === 'Push' && (
                <div className={styles['NotificationSettingAlretMain-heading-PUSH']}>
                    <h2>Push Notification Messages</h2>
                </div>
              )}
              <hr/>
            <div className={styles.NotificationSettingAlretMainbelowContent}>
            <div className={styles.NotificationRow}>
              <div className={styles.NotificationItem}>
                <div className={styles.NotificationToggle} style={{justifyContent:'space-between'}}>
                <span>Order Pending Message</span>
                  <label className={styles.switch}>
                    <input type="checkbox"/>
                    <span className={`${styles.slider} ${styles.round}`}></span>
                  </label>
                </div>
                <input type="text" className={styles.NotificationInput} placeholder="Your order is successfully placed." />
              </div>
              <div className={styles.NotificationItem}>
                <div className={styles.NotificationToggle} style={{justifyContent:'space-between'}}>
                <span>Order Confirmation Message</span>
                  <label className={styles.switch}>
                    <input type="checkbox"/>
                    <span className={`${styles.slider} ${styles.round}`}></span>
                  </label>
                </div>
                <input type="text" className={styles.NotificationInput} placeholder="Your order is confirmed." />
              </div>
            </div>
            <div className={styles.NotificationRow}>
              <div className={styles.NotificationItem}>
                <div className={styles.NotificationToggle} style={{justifyContent:'space-between',marginTop:20}}>
                <span>Order On The Way Message</span>
                  <label className={styles.switch}>
                    <input type="checkbox"/>
                    <span className={`${styles.slider} ${styles.round}`}></span>
                  </label>
                </div>
                <input type="text" className={styles.NotificationInput} placeholder="Your order is on the way." />
              </div>
              <div className={styles.NotificationItem}>
                <div className={styles.NotificationToggle} style={{justifyContent:'space-between',marginTop:20}}>
                <span>Order Delivered Message</span>
                  <label className={styles.switch}>
                    <input type="checkbox"/>
                    <span className={`${styles.slider} ${styles.round}`}></span>
                  </label>
                </div>
                <input type="text" className={styles.NotificationInput} placeholder="Your order is successfully delivered." />
              </div>
            </div>
            <div className={styles.NotificationRow}>
              <div className={styles.NotificationItem}>
                <div className={styles.NotificationToggle} style={{justifyContent:'space-between',marginTop:20}}>
                <span>Order Canceled Message</span>
                  <label className={styles.switch}>
                    <input type="checkbox"/>
                    <span className={`${styles.slider} ${styles.round}`}></span>
                  </label>
                </div>
                <input type="text" className={styles.NotificationInput} placeholder="Your order is canceled." />
              </div>
              <div className={styles.NotificationItem}>
                <div className={styles.NotificationToggle} style={{justifyContent:'space-between',marginTop:20}}>
                <span>Order Rejected Message</span>
                  <label className={styles.switch}>
                    <input type="checkbox"/>
                    <span className={`${styles.slider} ${styles.round}`}></span>
                  </label>
                </div>
                <input type="text" className={styles.NotificationInput} placeholder="Your order is rejected." />
              </div>
            </div>
            <div className={styles.NotificationRow}>
              <div className={styles.NotificationItemFull}>
                <div className={styles.NotificationToggle} style={{width:'50%',justifyContent:'space-between',marginTop:20}}>
                <span>Admin And Manager New Order Message</span>
                  <label className={styles.switch}>
                    <input type="checkbox"/>
                    <span className={`${styles.slider} ${styles.round}`}></span>
                  </label>
                </div>
                <input type="text" className={styles.NotificationInput} placeholder="You have a new order." style={{width:'48%'}} />
              </div>
            </div>
            <button className={styles.SaveButton}>Save</button>
          </div>
            </div>
      </div>
    </>
  )
};
