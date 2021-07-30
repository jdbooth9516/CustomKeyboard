import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const LayoutChart = (props) => {
  const [layoutChoices, setLayoutChoices] = useState([]);

  useEffect(() => {
    pullLayouts();
  }, []);

  const pullLayouts = () => {
    const layouts = props.builds.map((build) => {
      return build.Layout;
    });
    setLayoutChoices(layouts);
    console.log("layouts", layoutChoices);
  };

  return (
    <div>
      <Bar
        type="bar"
        data={{
          labels: ["full", "60%", "split"],
          datasets: [
            {
              label: "Layouts",
              data: [5, 2, 3],
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

export default LayoutChart;
