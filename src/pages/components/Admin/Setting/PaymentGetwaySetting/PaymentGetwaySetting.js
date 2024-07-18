import React, { useState } from 'react';
import styles from './PaymentGetwaySetting.module.css';

export default function PaymentGetwaySetting() {
    const [visibleDiv, setVisibleDiv] = useState('Paypal');
    
    const toggleDiv = (e) => {
        setVisibleDiv(e.target.value);
    }

    return (
        <div className={styles.PaymentGetwaySettingMain}>

            <div className={styles.PaymentGetwaySettingPaymentBtn} style={{justifyContent:'space-evenly'}} >
                <button 
                    className={`${styles.gatewayBtn} ${visibleDiv === 'Paypal' ? styles.active : ''}`}
                    value='Paypal'
                    onClick={toggleDiv}
                >
                    Paypal
                </button>
                <button 
                    className={`${styles.gatewayBtn} ${visibleDiv === 'Stripe' ? styles.active : ''}`}
                    value='Stripe'
                    onClick={toggleDiv}
                >
                    Stripe
                </button>
                <button 
                    className={`${styles.gatewayBtn} ${visibleDiv === 'Flutterwave' ? styles.active : ''}`}
                    value='Flutterwave'
                    onClick={toggleDiv}
                >
                    Flutterwave
                </button>
                <select className={styles.moreGatewaySelect} onChange={toggleDiv}>
                    <option>More Gateway</option>
                    <option value="Paystack">Paystack</option>
                    <option value="SslCommerz">SslCommerz</option>
                    <option value="Mallie">Mallie</option>
                    <option value="Senangpay">Senangpay</option>
                    <option value="Bkash">Bkash</option>
                    <option value="Paytm">Paytm</option>
                    <option value="Razorpay">Razorpay</option>
                    <option value="Mercadopago">Mercadopago</option>
                    <option value="Cashfree">Cashfree</option>
                    <option value="Payfast">Payfast</option>
                    <option value="Skrill">Skrill</option>
                    <option value="PhonePe">PhonePe</option>
                </select>
            </div>

            {visibleDiv === "Paypal" &&  
            <div className={styles.PaymentGetwayDiv}>
                <h2>Paypal</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="paypalAppId">PAYPAL APP ID</label>
                    <input type="text" id="paypalAppId" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="paypalClientId">PAYPAL CLIENT ID</label>
                    <input type="text" id="paypalClientId" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="paypalClientSecret">PAYPAL CLIENT SECRET</label>
                    <input type="text" id="paypalClientSecret" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="paypalMode">PAYPAL MODE</label>
                    <select id="paypalMode">
                        <option>Sandbox</option>
                        <option>Live</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="paypalStatus">PAYPAL STATUS</label>
                    <select id="paypalStatus">
                        <option>Disable</option>
                        <option>Enable</option>
                    </select>
                </div>
                <button className={styles.saveBtn}>Save</button>
            </div>
            }

            {visibleDiv === "Stripe" && 
            <div className={styles.PaymentGetwayDiv}>
                <h2>Stripe</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="stripeAppId">STRIPE KEY</label>
                    <input type="text" id="stripeAppId" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="stripeClientSecret">STRIPE SECRET</label>
                    <input type="text" id="stripeClientSecret" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="stripeMode">STRIPE MODE</label>
                    <select id="stripeMode">
                        <option>Sandbox</option>
                        <option>Live</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="stripeStatus">STRIPE STATUS</label>
                    <select id="stripeStatus">
                        <option>Disable</option>
                        <option>Enable</option>
                    </select>
                </div>
                <button className={styles.saveBtn}>Save</button>
            </div>
            }

            {visibleDiv === 'Flutterwave' && 
            <div className={styles.PaymentGetwayDiv}>
                <h2>Flutterwave</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="flutterwaveAppId">FLUTTERWAVE KEY</label>
                    <input type="text" id="flutterwaveAppId" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="flutterwaveClientSecret">FLUTTERWAVE SECRET</label>
                    <input type="text" id="flutterwaveClientSecret" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="flutterwaveMode">FLUTTERWAVE MODE</label>
                    <select id="flutterwaveMode">
                        <option>Sandbox</option>
                        <option>Live</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="flutterwaveStatus">FLUTTERWAVE STATUS</label>
                    <select id="flutterwaveStatus">
                        <option>Disable</option>
                        <option>Enable</option>
                    </select>
                </div>
                <button className={styles.saveBtn}>Save</button>
            </div>
            }
        </div>
    );
}
