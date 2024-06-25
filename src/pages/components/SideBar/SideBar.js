import React, { useState } from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';
import { Layout ,Menu } from 'antd';
import {
    faChartBar, faBox, faShoppingCart, faTruck, faBoxes,
    faCashRegister, faClipboardList, faClipboardCheck, faHandHoldingUsd, faTags,
    faTicketAlt, faGift, faBell, faUsers, faUser, faFileAlt, faChartLine, faBalanceScale, faCog,
    faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const { Sider } = Layout;

export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <>
            <div className="hamburger-icon" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <Sider width={250} className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                {/* <div className="logo">
                    <img src={order360Icon} alt="Order360 Icon" />
                </div> */}
                <Menu theme="light" mode="vertical" className="menu">
                    <Menu.Item key="dashboard" id='dashbord' icon={<FontAwesomeIcon icon={faChartBar} className="fa-icon" />}>
                        <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <Menu.ItemGroup key="product-stock" title="PRODUCT & STOCK">
                        <Menu.Item key="products" icon={<FontAwesomeIcon icon={faBox} className="fa-icon" />}>
                            <Link to="/products">Products</Link>
                        </Menu.Item>
                        <Menu.Item key="purchase" icon={<FontAwesomeIcon icon={faShoppingCart} className="fa-icon" />}>
                            <Link to="/purchase">Purchase</Link>
                        </Menu.Item>
                        <Menu.Item key="damages" icon={<FontAwesomeIcon icon={faTruck} className="fa-icon" />}>
                            <Link to="/damages">Damages</Link>
                        </Menu.Item>
                        <Menu.Item key="stock" icon={<FontAwesomeIcon icon={faBoxes} className="fa-icon" />}>
                            <Link to="/stock">Stock</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="pos-orders" title="POS & ORDERS">
                        <Menu.Item key="pos" icon={<FontAwesomeIcon icon={faCashRegister} className="fa-icon" />}>
                            <Link to="/pos">POS</Link>
                        </Menu.Item>
                        <Menu.Item key="pos-orders" icon={<FontAwesomeIcon icon={faClipboardList} className="fa-icon" />}>
                            <Link to="/pos-orders">POS Orders</Link>
                        </Menu.Item>
                        <Menu.Item key="online-orders" icon={<FontAwesomeIcon icon={faClipboardCheck} className="fa-icon" />}>
                            <Link to="/online-orders">Online Orders</Link>
                        </Menu.Item>
                        <Menu.Item key="return-orders" icon={<FontAwesomeIcon icon={faHandHoldingUsd} className="fa-icon" />}>
                            <Link to="/return-orders">Return Orders</Link>
                        </Menu.Item>
                        <Menu.Item key="return-refunds" icon={<FontAwesomeIcon icon={faTags} className="fa-icon" />}>
                            <Link to="/return-refunds">Return And Refunds</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="promo" title="PROMO">
                        <Menu.Item key="coupons" icon={<FontAwesomeIcon icon={faTicketAlt} className="fa-icon" />}>
                            <Link to="/coupons">Coupons</Link>
                        </Menu.Item>
                        <Menu.Item key="promotions" icon={<FontAwesomeIcon icon={faGift} className="fa-icon" />}>
                            <Link to="/promotions">Promotions</Link>
                        </Menu.Item>
                        <Menu.Item key="product-section" icon={<FontAwesomeIcon icon={faGift} className="fa-icon" />}>
                            <Link to="/product-section">Product Section</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="communication" title="COMMUNICATION">
                        <Menu.Item key="push-notification" icon={<FontAwesomeIcon icon={faBell} className="fa-icon" />}>
                            <Link to="/push-notification">Push Notification</Link>
                        </Menu.Item>
                        <Menu.Item key="subscribers" icon={<FontAwesomeIcon icon={faUsers} className="fa-icon" />}>
                            <Link to="/subscribers">Subscribers</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="user" title="USER">
                        <Menu.Item key="administrators" icon={<FontAwesomeIcon icon={faUser} className="fa-icon" />}>
                            <Link to="/administrators">Administrators</Link>
                        </Menu.Item>
                        <Menu.Item key="customers" icon={<FontAwesomeIcon icon={faUser} className="fa-icon" />}>
                            <Link to="/customers">Customers</Link>
                        </Menu.Item>
                        <Menu.Item key="employees" icon={<FontAwesomeIcon icon={faUser} className="fa-icon" />}>
                            <Link to="/employees">Employees</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="accounts" title="ACCOUNTS">
                        <Menu.Item key="transactions" icon={<FontAwesomeIcon icon={faFileAlt} className="fa-icon" />}>
                            <Link to="/transactions">Transactions</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="reports" title="REPORTS">
                        <Menu.Item key="sales-report" icon={<FontAwesomeIcon icon={faChartLine} className="fa-icon" />}>
                            <Link to="/sales-report">Sales Report</Link>
                        </Menu.Item>
                        <Menu.Item key="product-report" icon={<FontAwesomeIcon icon={faChartLine} className="fa-icon" />}>
                            <Link to="/product-report">Product Report</Link>
                        </Menu.Item>
                        <Menu.Item key="credit-balance-report" icon={<FontAwesomeIcon icon={faBalanceScale} className="fa-icon" />}>
                            <Link to="/credit-balance-report">Credit Balance Report</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="setup" title="SETUP">
                        <Menu.Item key="settings" icon={<FontAwesomeIcon icon={faCog} className="fa-icon" />}>
                            <Link to="/settings">Settings</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </Menu>
            </Sider>
        </>
    );
}
