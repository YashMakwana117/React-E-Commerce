import React, { useState } from 'react';
import './try.css';
import pendding from '../../../assets/image/pendding.png';
import box from '../../../assets/image/box.png';
import people from '../../../assets/image/people.png';
import product from '../../../assets/image/products.png'
import order from '../../../assets/image/order360.jpg'
import not2 from '../../../assets/image/not2.png';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

export default function Dashbord() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
        <div className='topbar'>
            <img src={order} alt='order360' id='timg'/>
            <div className='end'>
                <div id='lag'>
                    <button id='btn'>English</button>
                    <div className='nimg'>
                        <img src={not2} id='nn' alt='img'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="dashboard">
            <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
            <main className={`main-content ${collapsed ? 'collapsed' : ''}`}>
                <section className="overview">
                    <span id='greet'>Good Afternoon!</span>
                    <p>John Doe</p>
                    <h2>Overview</h2>
                    <div className="overview-cards">
                        <div className="card earnings" id="overviewCard">
                            <div className="content">
                                <div className="dollar">
                                    <div id='innerdoller'>
                                        <FontAwesomeIcon icon={faDollarSign} id='dd' />
                                    </div>
                                </div>
                                <div id="earn">
                                    <span>Total Earnings</span>
                                    <h2 id="ss">₹10266.00</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card orders" id="overviewCard">
                            <div className="content">
                                <div className="icon">
                                    <div id='innerIcon'>
                                        <img src={box} id='orderIcon' />
                                    </div>
                                </div>
                                <div id="orderDetails">
                                    <span>Total Orders</span>
                                    <h2 id="orderAmount">3</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card customers" id="overviewCard">
                            <div className="content">
                                <div className="icon">
                                    <div id='innerIcon'>
                                        <img src={people} id='customerIcon' />
                                    </div>
                                </div>
                                <div id="customerDetails">
                                    <span>Total Customers</span>
                                    <h2 id="customerCount">3</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card products" id="overviewCard">
                            <div className="content">
                                <div className="icon">
                                    <div id='innerIcon'>
                                        <img src={product} id='productIcon' />
                                    </div>
                                </div>
                                <div id="productDetails">
                                    <span>Total Products</span>
                                    <h2 id="productCount">303</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="order-stats">
                    <h2>Order Statistics</h2>
                    <div className="stats-cards">
                        <div className="stat-card" id="TotalOrders">
                            Total Orders: 0
                        </div>
                        <div className="stat-card" id="Pending">
                            <div className="pending">
                                <img src={pendding} alt="Pending" style={{ alignSelf: 'center' }} />
                                <div className="pending-label">
                                    <label id="p">Pending</label>
                                    <div className="zero">
                                        <label id="z">0</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stat-card" id="confirmed">
                            Confirmed: 0
                        </div>
                        <div className="stat-card" id="ongoing">
                            Ongoing: 0
                        </div>
                        <div className="stat-card" id="delivered">
                            Delivered: 0
                        </div>
                        <div className="stat-card" id="canceled">
                            Canceled: 0
                        </div>
                        <div className="stat-card" id="return">
                            Returned: 0
                        </div>
                        <div className="stat-card" id="reject">
                            Rejected: 0
                        </div>
                    </div>
                </section>
            </main>
        </div>
        </>
    );
}
