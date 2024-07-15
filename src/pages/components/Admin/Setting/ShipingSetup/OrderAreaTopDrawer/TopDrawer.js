import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@mui/material';

const OrderAreaDrawer = ({ open, onClose }) => {

  const handleSave = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{color:'black'}}>Order Area</span>
          <span onClick={onClose} style={{ cursor: 'pointer',color:'red' }}>&times;</span>
        </div>
      </DialogTitle>
      <DialogContent>
        <form>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px', marginTop: 15 }}>
            <FormControl fullWidth style={{ flex: '1 1 45%' }}>
              <InputLabel id="area-order-add-country">COUNTRY</InputLabel>
              <Select 
                labelId="area-order-add-country"
                id="area-order-add-country-select"
                value=""
                label="COUNTRY">
                <MenuItem value="">--</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ flex: '1 1 45%' }}>
              <InputLabel id="area-order-add-state">STATE</InputLabel>
              <Select 
                labelId="area-order-add-state"
                id="area-order-add-state-select"
                value=""
                label="STATE">
                <MenuItem value="">--</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
            <FormControl fullWidth style={{ flex: '1 1 45%' }}>
              <InputLabel id="area-order-add-city">CITY</InputLabel>
              <Select
                labelId="area-order-add-city"
                id="area-order-add-city-select"
                value=""
                label="CITY"
              >
                <MenuItem value="">--</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ flex: '1 1 45%' }}>
              <TextField
                id="area-order-shipping-cost"
                label="SHIPPING COST"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                inputProps={{ style: { height: '37px' } }}  // Adjust the height here
              />
            </FormControl>
          </div>
          <FormControl component="fieldset" style={{ marginBottom: '15px' }}>
            <RadioGroup row>
              <FormControlLabel value="active" control={<Radio />} label="Active" />
              <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
            </RadioGroup>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{ backgroundColor: '#ccc', color: 'white' }}>
          Close
        </Button>
        <Button onClick={handleSave} style={{ backgroundColor: 'red', color: 'white' }} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderAreaDrawer;
