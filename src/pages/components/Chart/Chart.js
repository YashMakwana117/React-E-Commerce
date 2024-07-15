import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import "./Chart.css";

const data = [
  { id: 0, value: 10, label: "series A", color: "red" },
  { id: 1, value: 15, label: "series B", color: "blue" },
  { id: 2, value: 20, label: "series C", color: "#ad5913" },
];

export default function Chart() {
  return (
    <>
      <div className="conta">
        <div className="piechart">
        <h2>Orders Summary</h2>
        <hr />
          <PieChart
            series={[
              {
                data,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
              },
            ]}
            height={200}
          />
        </div>
      </div>
    </>
  );
}
