import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const LayoutChart = (props) => {
  const[full, setFull] = useState(0);
  const[tenkeyless, setTenkeyless] = useState(0);
  const[compact, setCompact] = useState(0);
  const[split, setSplit] = useState(0);

  let newfull = 0;
  let newtenkeyless = 0;
  let newcompact = 0;
  let newsplit = 0;

  useEffect(() => {
    pullLayouts();
      }, []);

  const pullLayouts = () => {
    props.builds.forEach((build) => {
      if (build.Layout === 1 ) { 
        newfull += 1;
        setFull(newfull)
      }
      else if (build.Layout === 2 ) { 
        newtenkeyless += 1;
        setTenkeyless(newtenkeyless)
      }
      else if (build.Layout === 3 ) { 
        newcompact += 1;
        setCompact(newcompact)
      }
      else if (build.Layout === 4 ) { 
        newsplit += 1;
        setSplit(newsplit)
      }
    })};


  return (
    <div>
      <Bar
        type="bar"
        data={{
          labels: ["full", "tenkeyless", "compact", "split"],
          datasets: [
            {
              label: "Layouts",
              data: [full, tenkeyless, compact, split],
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

export default LayoutChart;
