import React,{useState} from 'react'
import styles from './ShipingSetup.module.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import OrderAreaDrawer from './OrderAreaTopDrawer/TopDrawer';


export default function ShipingSetup() {
    const [displaydiv,setDisplayDiv] = useState('Flat-Rate-Wise');
    const [openDrawer,setOpendrawer] = useState(false);

    const toggleDiv = (e) => {
        setDisplayDiv(e.target.value);
    }

    const toggleDrawer = (open) => (event) => {
        if(event.type === 'keydown' && (event.type === 'tab' || event.type === 'shift')){
            return false;
        }
        setOpendrawer(open);
    }

  return (
    <div>
      <div className={styles.shippingmain}>
        <div className={styles.shippingsetupradio}>
          <h2>Shipping Setup</h2>
          <hr />
          <div className="shippingsetupradio-btn">
            <span>SELECT SHIPPING METHOD</span>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={displaydiv}
              name="radio-buttons-group"
              style={{ marginTop: 15 }}
              onChange={toggleDiv}
            >
              <FormControlLabel
                value="Product-Wise"
                control={<Radio />}
                style={{ marginBottom: -12 }}
                label="Product Wise"
              />
              <FormControlLabel
                value="Flat-Rate-Wise"
                control={<Radio />}
                style={{ marginBottom: -12 }}
                label="Flat Rate Wise"
              />
              <FormControlLabel
                value="Area-Wise"
                control={<Radio />}
                label="Area Wise"
              />
            </RadioGroup>
          </div>
        </div>

        {displaydiv === "Product-Wise" && (
          <div className={styles.productwiseradio}>
            <h2 style={{ display: "none" }}>Product Wise</h2>
            <div className={styles["productwise-inner"]}>
              <span style={{ marginTop: 20, fontSize: 10, display: "none" }}>
                SHIPPING COST
              </span>
              <input
                type="number"
                name="productwisebox"
                style={{ display: "none" }}
                placeholder="Enter Flat Rate"
              />
              <input
                type="submit"
                name="submit"
                value="Save"
                style={{ display: "none" }}
                className={styles.productwisesubmit}
              />
            </div>
          </div>
        )}

        {displaydiv === "Flat-Rate-Wise" && (
          <div className={styles.flatratewiseradio}>
            <h2>Flat Rate Wise</h2>
            <div className={styles["flatratewise-inner"]}>
              <span style={{ marginTop: 20, fontSize: 10 }}>SHIPPING COST</span>
              <input
                type="number"
                name="flatratewisebox"
                placeholder="Enter Flat Rate"
              />
              <input
                type="submit"
                name="submit"
                value="Save"
                className={styles.flatratewisesubmit}
              />
            </div>
          </div>
        )}

        {displaydiv === "Area-Wise" && (
          <div className={styles.areawiseradio}>
            <h2>Area Wise</h2>
            <div className={styles["areawise-inner"]}>
              <span style={{ marginTop: 20, fontSize: 10 }}>
                DEFAULT SHIPPING COST
              </span>
              <input
                type="number"
                name="areawisebox"
                placeholder="Enter Shipping Rate"
              />
              <input
                type="submit"
                name="submit"
                value="Save"
                className={styles.areawisesubmit}
              />
            </div>
          </div>
        )}

        {displaydiv === "Area-Wise" && (
          <div className={styles.orderAreaContainer}>
            <div className={styles.orderAreaHeader}>
              <h2 className={styles.orderAreaTitle}>Order Area</h2>
              <button className={styles.addOrderButton} onClick={toggleDrawer(true)}>
                + Add Order Area
              </button>
            </div>
            <table className={styles.orderTable}>
              <thead>
                <tr>
                  <th>COUNTRY</th>
                  <th>STATE</th>
                  <th>CITY</th>
                  <th>SHIPPING COST</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>INDIA</td>
                  <td>GUJARAT</td>
                  <td>SURAT</td>
                  <td>10</td>
                  <td>ACTIVE</td>
                  <td>TRUE</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.entriesInfo}>
              Showing 0 to 0 of 0 entries
            </div>
          </div>
        )}
      </div>
        <OrderAreaDrawer open={openDrawer} onClose={toggleDrawer(false)}/>
    </div>
  );
}
