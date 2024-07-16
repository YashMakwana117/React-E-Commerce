import React, { useState } from "react";
import TopBar from "../TopBar/TopBar";
import styles from "./Setting.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as Icons from "@mui/icons-material";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import VibrationIcon from "@mui/icons-material/Vibration";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AllInboxOutlinedIcon from "@mui/icons-material/AllInboxOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import EmojiTransportationOutlinedIcon from "@mui/icons-material/EmojiTransportationOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import "primeicons/primeicons.css";
import {
  UilAward,
  UilWeight,
  UilTagAlt,
  UilCopy,
  UilKeyholeSquare,
  UilTransaction,
} from "@iconscout/react-unicons";
import Compony from "./Compony/Compony";
import Site from "./Site/Site";
import ShipingSetup from "./ShipingSetup/ShipingSetup";
import MailSetting from "./MailSetting/MailSetting";
import OtpSetting from "./OtpSetting/OtpSetting";
import NotificationSetting from "./NotificationSetting/NotificationSetting";
import NotificationSettingAlret from "./NotificationSettingAlret/NotificationSettingAlret";
import SocialMedia from "./Social Media/SocialMedia";
import CookieSetting from "./CookieSetting/CookieSetting";
import Analytics from "./Analytics/Analytics";
import ThemeSetting from "./ThemeSetting/ThemeSetting";
import SliderImageSetting from "./SliderImageSetting/SliderImageSetting";
import CurrencySetting from "./CurrencySetting/CurrencySetting";
import ProductCategories from "./ProductCatagories/ProductCatagories";
import ProductAttribute from "./ProductAttribute/ProductAttribute";
import ProductBrand from "./ProductBrand/ProductBrand";
import ReturnReason from "./ReturnReason/ReturnReason";
import SuppierSetting from "./SuppierSetting/SuppierSetting";
import OutletsSetting from "./OutletsSetting/OutletsSetting";
import BenefitsSetting from "./BenefitsSetting/BenefitsSetting";
import UnitSetting from "./UnitSetting/UnitSetting";
import TaxSetting from "./TaxSetting/TaxSetting";
import PageSetting from "./PageSetting/PageSetting";

export default function Setting() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Compony");

  const toggleListItem = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderPages = () => {
    switch (selectedPage) {
      case "Compony":
        return <Compony />;
      case "Site":
        return <Site />;
      case "ShipingSetup":
        return <ShipingSetup/>;
      case "MailSetting":
        return <MailSetting/>;
      case "OtpSetting":
        return <OtpSetting/>;
      case "NotificationSetting":
        return <NotificationSetting/>;
      case "NotoficationSettingAlret":
        return <NotificationSettingAlret/>;
      case "SocialMedia":
        return <SocialMedia/>
      case "CookieSetting":
        return <CookieSetting/>;
      case "Analytics":
        return <Analytics/>;
      case "ThemeSetting":
        return <ThemeSetting/>;
      case "SliderSetting":
        return <SliderImageSetting/>;
      case "CurrencySetting":
          return <CurrencySetting/>;
      case "ProductCatagories":
        return <ProductCategories/>;
      case "ProductAttribute":
        return <ProductAttribute/>;
      case "ProductBrand":
        return <ProductBrand/>;
      case "ReturnReason":
        return <ReturnReason/>;
      case "SuppierSetting":
        return <SuppierSetting/>;
      case "OutletsSetting":
        return <OutletsSetting/>;
      case "BenefitsSetting":
        return <BenefitsSetting/>;
      case "UnitSetting":
        return <UnitSetting/>;
      case "TaxSetting":
        return <TaxSetting/>;
      case "PageSetting":
        return <PageSetting/>;
      default:
        return <div>select item</div>;
    }
  };

  return (
    <div>
      <TopBar />
      <div className={styles.settingh2}>
        <h2>Dashboard/Settings</h2>
      </div>
      <button className={styles["menu-toggle-btn"]} onClick={toggleListItem}>
        {isMenuOpen ? "Close Menu" : "Open Menu"}
      </button>

      <div className={styles.displaylistmain}>
        <div
          className={`${styles.settingboxmain} ${
            isMenuOpen ? styles.show : ""
          }`}
        >
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem
                  disablePadding
                  onClick={() => setSelectedPage("Compony")}
                >
                  <ListItemButton selected={selectedPage === "Compony"}>
                    <ListItemIcon>
                      <Icons.ThreeDRotation />
                    </ListItemIcon>
                    <ListItemText primary="Company" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("Site")}>
                  <ListItemButton selected={selectedPage === "Site"}>
                    <ListItemIcon>
                      <Icons.SportsBasketballOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Sites" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("MailSetting")}>
                  <ListItemButton selected={selectedPage === "MailSetting"}>
                    <ListItemIcon>
                      <Icons.AccessAlarm />
                    </ListItemIcon>
                    <ListItemText primary="Mail" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("ShipingSetup")} >
                  <ListItemButton selected={selectedPage === "ShipingSetup"}>
                    <ListItemIcon>
                      <Icons.LocalShippingOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Shipping Setup" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("OtpSetting")}>
                  <ListItemButton selected={selectedPage === "OtpSetting"}>
                    <ListItemIcon>
                      <Icons.LockOutlined />
                    </ListItemIcon>
                    <ListItemText primary="OTP" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("NotificationSetting")}>
                  <ListItemButton selected={selectedPage === "NotificationSetting"}>
                    <ListItemIcon>
                      <Icons.NotificationsNoneOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Notification" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("NotoficationSettingAlret")}>
                  <ListItemButton selected={selectedPage === "NotoficationSettingAlret"}>
                    <ListItemIcon>
                      <Icons.NotificationsActiveOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Notification Alert" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("SocialMedia")}>
                  <ListItemButton selected={selectedPage === "SocialMedia"}>
                    <ListItemIcon>
                      <Icons.AdjustOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Social Media" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("CookieSetting")}>
                  <ListItemButton selected={selectedPage === "CookieSetting"}>
                    <ListItemIcon>
                      <Icons.CookieOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Cookies" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("Analytics")}>
                  <ListItemButton selected={selectedPage === "Analytics"}>
                    <ListItemIcon>
                      <Icons.InsertChartOutlinedSharp />
                    </ListItemIcon>
                    <ListItemText primary="Analytics" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("ThemeSetting")}>
                  <ListItemButton selected={selectedPage === "ThemeSetting"}>
                    <ListItemIcon>
                      <ColorLensOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Theme" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("SliderSetting")}>
                  <ListItemButton selected={selectedPage === "SliderSetting"}>
                    <ListItemIcon>
                      <VibrationIcon />
                    </ListItemIcon>
                    <ListItemText primary="Slider" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("CurrencySetting")}>
                  <ListItemButton selected={selectedPage === "CurrencySetting"}>
                    <ListItemIcon>
                      <LocalAtmIcon />
                    </ListItemIcon>
                    <ListItemText primary="Currency" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("ProductCatagories")}>
                  <ListItemButton selected={selectedPage === "ProductCatagories"}>
                    <ListItemIcon>
                      <CategoryOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Product Categories" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("ProductAttribute")}>
                  <ListItemButton selected={selectedPage === "ProductAttribute"}>
                    <ListItemIcon>
                      <AllInboxOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Product Attribute" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("ProductBrand")} >
                  <ListItemButton selected={selectedPage === "ProductBrand"}>
                    <ListItemIcon>
                      <i
                        className="pi pi-crown"
                        style={{ fontSize: "1.5rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Product Brand" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("ReturnReason")}>
                  <ListItemButton selected={selectedPage === "ReturnReason"}>
                    <ListItemIcon>
                      <CachedOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Return Reasons" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("SuppierSetting")}>
                  <ListItemButton selected={selectedPage === "SuppierSetting"}>
                    <ListItemIcon>
                      <EmojiTransportationOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Suppiers" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("OutletsSetting")}>
                  <ListItemButton selected={selectedPage === "OutletsSetting"}>
                    <ListItemIcon>
                      <StorefrontOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Outlets" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("BenefitsSetting")}>
                  <ListItemButton selected={selectedPage === "BenefitsSetting"}>
                    <ListItemIcon>
                      <UilAward />
                    </ListItemIcon>
                    <ListItemText primary="Benefits" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("UnitSetting")}>
                  <ListItemButton selected={selectedPage === "UnitSetting"}>
                    <ListItemIcon>
                      <UilWeight />
                    </ListItemIcon>
                    <ListItemText primary="Units" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("TaxSetting")}>
                  <ListItemButton selected={selectedPage === "TaxSetting"}>
                    <ListItemIcon>
                      <UilTagAlt />
                    </ListItemIcon>
                    <ListItemText primary="Taxes"/>  
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding onClick={() => setSelectedPage("PageSetting")}>
                  <ListItemButton selected={selectedPage === "PageSetting"}>
                    <ListItemIcon>
                      <UilCopy />
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <UilKeyholeSquare />
                    </ListItemIcon>
                    <ListItemText primary="Role & Permission" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <LanguageOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Languages" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SmsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sms Getway" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <UilTransaction />
                    </ListItemIcon>
                    <ListItemText primary="Payment Getway" />
                  </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FontAwesomeIcon icon={faAddressCard} />
                    </ListItemIcon>
                    <ListItemText primary="License" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </div>
        <div className={styles.dispContentContainer}>{renderPages()}</div>
      </div>
    </div>
  );
}
