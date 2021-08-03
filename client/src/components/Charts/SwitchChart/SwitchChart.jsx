import React, { useState, useEffect }from "react";
import { Bar } from "react-chartjs-2";

const SwitchChart = (props) => {

  const[blues, setBlues] = useState(0);
  const[reds, setReds] = useState(0);
  const[browns, setBrowns] = useState(0);

  let newblues = 0;
  let newreds = 0;
  let newbrowns = 0;

  useEffect(() => {
    console.log(props.builds);
    pullSwitches();
  })

  const pullSwitches = () => { 
    props.builds.forEach((build) => {
      if (build.Switch === 1 ) { 
        newblues += 1;
        setBlues(newblues)
      }
      else if (build.Switch === 2 ) { 
        newreds += 1;
        setReds(newreds)
      }
      else if (build.Switch === 3 ) { 
        newbrowns += 1;
        setBrowns(newbrowns)
      }
      
  })};


  return (
    <div>
      <Bar
        type="bar"
        data={{
          labels: ["Blues", "reds", "browns"],
          datasets: [
            {
              label: "Switches",
              data: [blues, reds, browns],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(24, 255, 50, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(24, 255, 50, 1)",
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

export default SwitchChart;
