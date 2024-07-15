// EditProfile.js
import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./EditProfile.css";

const EditProfile = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div className="drawer-content">
        <Typography
          variant="h5"
          className="headerDrawer"
          align="left"
          marginLeft={2}
          marginTop={5}
          gutterBottom
        >
          Administrator
        </Typography>
        <hr />
        <div className="drawerEdit">
          <div className="drawerEditRowName">
            <lable>Name</lable>
            <input type="text" name="Name" placeholder="Enter Your Name" />
          </div>
          <div className="drawerEditRowEmail">
            <lable>Email</lable>
            <input type="email" name="Email" placeholder="Enter Your Email" />
          </div>
        </div>

        {/* ------------------------- */}

        <div className="drawerEditPhone">
          <div className="drawerEditRowPhono">
            <lable>Phone</lable>
            <input type="tel" name="Phono" placeholder="+91 123456789" />
          </div>

          <div className="drawerEditRowRadio">
            <lable>Status</lable>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel
                value="Active"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="de-active"
                control={<Radio />}
                label="de-active"
              />
            </RadioGroup>
          </div>
        </div>
        {/* -------------------------------------------- */}
          <div className="drawerSecurity" >
              <div className="drawerInnerPass">
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter Your New Password" />
              </div>
              <div className="drawerInnerConfirmPass">
                <label>Confirm Password</label>
                <input type="password" name="password" placeholder="Re-Enter Your Password" />
              </div>
          </div>
          <Button onClick={onClose} variant="contained" id="drawerbtnSave">Save</Button>
          <Button onClick={onClose} variant="contained" id="drawerbtnClose">
          Close
        </Button>
      </div>
    </Drawer>
  );
};
export default EditProfile;