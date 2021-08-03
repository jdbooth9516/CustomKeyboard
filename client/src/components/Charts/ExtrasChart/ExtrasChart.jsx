import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const ExtrasChart = (props) => {
  const[mousepad, setMousepad] = useState(0);
  const[trim, setTrim] = useState(0);
  const[hoddie, setHoddie] = useState(0);
  

  let newMousepad = 0;
  let newTrim = 0;
  let newHoddie = 0;

  useEffect(() => {
    pullLayouts();
      }, []);

  const pullLayouts = () => {
    props.builds.forEach((build) => {
      if (build.Extras === 1 ) { 
        newMousepad += 1;
        setMousepad(newMousepad)
      }
      else if (build.Extras === 2 ) { 
        newTrim += 1;
        setTrim(newTrim)
      }
      else if (build.Extras === 3 ) { 
        newHoddie += 1;
        setHoddie(newHoddie)
      }
    
    })};

  return (
    <div>
      <Bar
        type="bar"
        data={{
          labels: ["XL-mousepad", "rgb-trim", "Dark Hoddie"],
          datasets: [
            {
              label: "Extras",
              data: [mousepad, trim, hoddie],
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

export default ExtrasChart;
