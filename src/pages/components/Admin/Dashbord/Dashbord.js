import React from "react";
import "./try.css";
import pendding from "../../../../assets/image/pendding.png";
import box from "../../../../assets/image/box.png";
import people from "../../../../assets/image/people.png";
import product from "../../../../assets/image/products.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import Chart from "../../Chart/Chart";
import order from "../../../../assets/image/order360.jpg";
import not2 from "../../../../assets/image/not2.png";

import TopBar from "../TopBar/TopBar";

export default function Dashbord() {
  return (
    <div className="tt">
        <TopBar/>

      <div className="dashboard">
        <main className="main-content">
          <section className="overview">
            <span id="greet">Good Afternoon!</span>
            <p>John Doe</p>
            <h2>Overview</h2>
            <div className="overview-cards">
              <div className="card earnings" id="overviewCard">
                <div className="content">
                  <div className="dollar">
                    <div id="innerdoller">
                      <FontAwesomeIcon icon={faDollarSign} id="dd" />
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
                    <div id="innerIcon">
                      <img src={box} id="orderIcon" alt="ordericon" />
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
                    <div id="innerIcon">
                      <img src={people} id="customerIcon" alt="customericon" />
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
                    <div id="innerIcon">
                      <img src={product} id="productIcon" alt="productIcon" />
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

          {/* order card */}

          <section className="order-stats">
            <h2>Order Statistics</h2>

            <div className="stats-cards">
              <div className="stat-card" id="TotalOrders">
                <div className="totalorder">
                  <img src={pendding} alt="total order" />
                  <div className="totalorder-label">
                    <label id="p">Total Order</label>
                    <div className="zero">
                      <label id="z">0</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="stat-card" id="Pending">
                <div className="pending">
                  <img
                    src={pendding}
                    alt="Pending"
                    style={{ alignSelf: "center" }}
                  />
                  <div className="pending-label">
                    <label id="p">Pending</label>
                    <div className="zero">
                      <label id="z">0</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="stat-card" id="confirmed">
                <div className="confirmorder">
                  <img
                    src={pendding}
                    alt="Pending"
                    style={{ alignSelf: "center" }}
                  />
                  <div className="confirm-label">
                    <label id="p">Confirmed</label>
                    <div className="zero">
                      <label id="z">0</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="stat-card" id="ongoing">
                <div className="ongoing">
                  <img
                    src={pendding}
                    alt="Pending"
                    style={{ alignSelf: "center" }}
                  />
                  <div className="ongoing-label">
                    <label id="p">Ongoing</label>
                    <div className="zero">
                      <label id="z">0</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* below 4 card */}

              <div className="belowcard">
                <div className="stat-card" id="delivered">
                  <div className="belowdelivered">
                    <img
                      src={pendding}
                      alt="Pending"
                      style={{ alignSelf: "center" }}
                    />
                    <div className="belowdelivered-label">
                      <label id="p">Delivered</label>
                      <div className="zero">
                        <label id="z">0</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="stat-card" id="canceled">
                  <div className="belowcanceled">
                    <img
                      src={pendding}
                      alt="Pending"
                      style={{ alignSelf: "center" }}
                    />
                    <div className="belowcanceled-label">
                      <label id="p">Canceled</label>
                      <div className="zero">
                        <label id="z">0</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="stat-card" id="return">
                  <div className="belowreturn">
                    <img
                      src={pendding}
                      alt="Pending"
                      style={{ alignSelf: "center" }}
                    />
                    <div className="belowreturn-label">
                      <label id="p">Returned</label>
                      <div className="zero">
                        <label id="z">0</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="stat-card" id="reject">
                  <div className="belowreject">
                    <img
                      src={pendding}
                      alt="Pending"
                      style={{ alignSelf: "center" }}
                    />
                    <div className="belowreject-label">
                      <label id="p">Returned</label>
                      <div className="zero">
                        <label id="z">0</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* chart start here */}

        <Chart />
      </div>
    </div>
  );
}
