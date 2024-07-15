import React, { useState } from "react";
import "./ViewProfile.css";
import TopBar from "../../TopBar/TopBar";
import avatar from "../../../../../assets/image/avatar.png";
import { Button, Box } from "@mui/material";
import UploadIcon from "../../../../../assets/image/upload.png";
import Swal from "sweetalert2";
import "animate.css";
import USER from "../../../../../assets/image/user.png";
import security from "../../../../../assets/image/lock.png";
import address from "../../../../../assets/image/address.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

export default function ViewProfile() {
  const MAX_FILE_SIZE_MB = 1; // Maximum file size allowed in MB
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024; // Convert MB to bytes

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    // Check if file size exceeds the limit
    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      Swal.fire({
        title: "File size exceeded",
        text: `Please select a file smaller than ${MAX_FILE_SIZE_MB} MB.`,
        icon: "error",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      // Reset file input field (optional)
      event.target.value = null;
      return;
    }

    console.log("file upload", file);
    // Simulate file upload completion

    // Show SweetAlert2 confirmation message
    Swal.fire({
      title: "File upload done",
      icon: "success",
      showClass: {
        popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
      },
      hideClass: {
        popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
      },
    });
  };

  const [activeSection, setActiveSection] = useState("profile");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <TopBar />
      <div className="viewmain">
        <div>
          <h3 className="path">DashBoard/Administrator/ViewProfile</h3>
        </div>
        <div className="photobox">
          <div className="avatar">
            <img src={avatar} alt="avatar" id="avatar" />
          </div>
          <div className="adname">
            <h3>John</h3>
            <div className="adposition">
              <span>ADMIN</span>
            </div>
            <Box>
              <input
                accept="image/png, image/jpeg, image/jpg"
                style={{ display: "none" }}
                id="upload-button"
                type="file"
                onChange={handleFileUpload}
              />
              <label htmlFor="upload-button">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={
                    <img
                      src={UploadIcon}
                      alt="upload image"
                      id="upload-image"
                    />
                  }
                  style={{
                    backgroundColor: "red",
                    marginTop: "55px",
                    fontSize: "12px",
                  }}
                >
                  Upload New Photo
                </Button>
              </label>
            </Box>
          </div>
        </div>
        
        <div className="viewoption">
          <div
            className={
              activeSection === "profile" ? "viewprofile active" : "viewprofile"
            }
            onClick={() => handleClick("profile")}
          >
            <div className="innerprofile">
              <img src={USER} alt="usericon" />
              <span>Profile</span>
            </div>
          </div>

          <div
            className={
              activeSection === "security"
                ? "viewsecurity active"
                : "viewsecurity"
            }
            onClick={() => handleClick("security")}
          >
            <img src={security} alt="securityicon" />
            <span>Security</span>
          </div>

          <div className={activeSection === "address" ? "viewaddress active" : "viewaddress"} onClick={() => handleClick('address')}>
            <img src={address} alt="addressicon" />
            <span>Address</span>
          </div>

          <div className={activeSection === "order" ? "vieworder active" : "vieworder"} onClick={() => handleClick('order')}>
            <FontAwesomeIcon
              icon={faBasketShopping}
              id="basket"
              style={{ color: "#ffffff" }}
            />
            <span>My order</span>
          </div>

        </div>

        <div className="below-contents">

          {activeSection === 'profile' && (
            <div className="belowInnerProfile" >
              <h3>Basic Information</h3>
              <hr />
              <div className="belowInnerProfile-email">
                <label>Email </label>
                <span>john@gmail.com</span>
              </div>
              <div className="belowInnerProfile-phno">
                <label>Phone </label>
                <span>1234567890</span>
              </div>
              <div className="belowInnerProfile-status">
                <label>Status </label>
                <div className="belowInnerProfile-status-span">
                  <span>Active</span>
                </div>
              </div>
            </div>

          )}

          {activeSection === 'security' && (

            <div className="belowInnerSecurity" >
              <h3>Change Password</h3>
              <hr/>
              <div className="belowRowSecurity">
                  <div className="belowInnerSecurity-pass">
                      <label>Password</label>
                      <input type="password" name="password" id="belowInnerSecurity-pass-password" placeholder="Enter Your New Password" />
                  </div>
                  <div className="belowInnerSecurity-ConfirmPass">
                      <label>Confirm Password</label>
                      <input type="password" name="password" id="belowInnerSecurity-pass-ConfirmPassword" placeholder="Enter Confirm Password" />
                  </div>
              </div>
            </div>

          )}
          
          {activeSection === 'address' && (
            <div className="belowInnerAddress">
                <h3>Address</h3>
            </div>
          )}
          
          {activeSection === 'order' && (
            <div className="belowInnerOrder" >
                <h3>Order</h3>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}