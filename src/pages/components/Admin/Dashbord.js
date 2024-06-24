import React from 'react';
import './Dashbord.css';
import pendding from '../../../assets/image/pendding.png';
import Appbar from "../Appbar/index";

export default function Dashbord() {
    return (
        <div>
            <div className="dashboard">
                <aside className="sidebar">
                    <div className="logo">Order 360</div>
                    <nav>
                        <ul>
                            <li>Dashboard</li>
                            <li>Products</li>
                            <li>Purchase</li>
                            <li>Damages</li>
                            <li>Stock</li>
                            <li>POS</li>
                            <li>POS Orders</li>
                            <li>Online Orders</li>
                            <li>Return Orders</li>
                            <li>Return And Refunds</li>
                        </ul>
                    </nav>
                </aside>
                <main className="main-content">
                    <Appbar />
                    <section className="overview">
                        <h1>Good Afternoon!</h1>
                        <p>John Doe</p>
                        <div className="overview-cards">
                            <div className="overview-cards">
                                <div className="card earnings">
                                    <span>Total Earnings</span>
                                    <h2 id='ss'>₹10266.00</h2>
                                </div>
                                <div className="card orders">
                                    <span>Total Orders</span>
                                    <h2 id='ss'>3</h2>
                                </div>
                                <div className="card customers">
                                    <span>Total Customers</span>
                                    <h2 id='ss'>3</h2>
                                </div>
                                <div className="card products">
                                    <span>Total Products</span>
                                    <h2 id='ss'>303</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="order-stats">
                        <h2>Order Statistics</h2>
                        <div className="stats-cards">
                            <div className="stat-card" id="Total Orders">
                                Total Orders: 0
                            </div>
                            <div className="stat-card" id="Pending">
                                <div className="pending">
                                    <img src={pendding} alt="Pending" style={{ alignSelf: 'center' }} /> {/* Center the image vertically */}
                                    <div className="pending-label">
                                        <label id='p'>Pending</label>
                                        <div className="zero">
                                            <label id='z'>0</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stat-card">Confirmed: 0</div>
                            <div className="stat-card">Ongoing: 0</div>
                            <div className="stat-card">Delivered: 0</div>
                            <div className="stat-card">Canceled: 0</div>
                            <div className="stat-card">Returned: 0</div>
                            <div className="stat-card">Rejected: 0</div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
