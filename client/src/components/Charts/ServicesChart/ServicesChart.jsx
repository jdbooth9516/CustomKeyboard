import React from "react";
import { Bar } from "react-chartjs-2";

const ServicesChart = () => {
  return (
    <div>
      <Bar
        type="bar"
        data={{
          labels: ["Switch-Lube", "Stablizer-Tuning", "Switch-Filming"],
          datasets: [
            {
              label: "Servics",
              data: [2, 3, 0],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={300}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default ServicesChart;
