import React, { useState } from 'react'
import styles from './CurrencySetting.module.css'
import { Modal, Box, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function CurrencySetting() {

    const [openModal,setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

  return (
    <div className={styles.currencyContainer}>
      <div className={styles.header}>
        <h2>Currencies</h2>
        <button className={styles.addButton} onClick={handleOpenModal}>
          + Add Currency
        </button>
      </div>
      <hr />
      <table className={styles.currencyTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Code</th>
            <th>Is Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rupee(Default)</td>
            <td>₹</td>
            <td>INR</td>
            <td>
              <span className={styles.no}>No</span>
            </td>
            <td>1</td>
            <td>
              <button className={styles.editButton} onClick={handleOpenModal}>
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <td>Dollars</td>
            <td>$</td>
            <td>USD</td>
            <td>
              <span className={styles.no}>No</span>
            </td>
            <td>1</td>
            <td>
              <button className={styles.editButton} onClick={handleOpenModal}>
                Edit
              </button>
              <button className={styles.deleteButton}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.entriesInfo}>Showing 1 to 2 of 2 entries</div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "400px",
            bgcolor: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            p: 3,
          }}
        >
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{
              color: "black",
              mb: 3,
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Currencies
          </Typography>
          <form>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                sx={{ mb: 1, color: "rgba(0, 0, 0, 0.6)", fontWeight: 500 }}
              >
                NAME *
              </Typography>
              <input
                type="text"
                value="Rupee"
                required
                className={styles.modalInput}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                sx={{ mb: 1, color: "rgba(0, 0, 0, 0.6)", fontWeight: 500 }}
              >
                SYMBOL *
              </Typography>
              <input
                type="text"
                value="₹"
                required
                className={styles.modalInput}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                sx={{ mb: 1, color: "rgba(0, 0, 0, 0.6)", fontWeight: 500 }}
              >
                CODE *
              </Typography>
              <input
                type="text"
                value="INR"
                required
                className={styles.modalInput}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="body2"
                sx={{ mb: 1, color: "rgba(0, 0, 0, 0.6)", fontWeight: 500 }}
              >
                IS CRYPTOCURRENCY *
              </Typography>
              <RadioGroup
                row
                aria-labelledby="is-cryptocurrency"
                name="is-cryptocurrency"
                // value=""
                sx={{ ".MuiFormControlLabel-label": { fontSize: "0.9rem" } }}
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio size="small" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={<Radio size="small" />}
                  label="No"
                />
              </RadioGroup>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="body2"
                sx={{ mb: 1, color: "rgba(0, 0, 0, 0.6)", fontWeight: 500 }}
              >
                EXCHANGE RATE
              </Typography>
              <input type="text" value="1" className={styles.modalInput} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={handleCloseModal}
                className={styles.modalCloseButton}
              >
                Close
              </button>
              <button type="button" className={styles.modalSaveButton}>
                Save
              </button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
