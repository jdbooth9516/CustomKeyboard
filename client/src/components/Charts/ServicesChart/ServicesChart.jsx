import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const ServicesChart = (props) => {
  const[lubing, setLubing] = useState(0);
  const[stabilizer, setStabs] = useState(0);
  const[filming, setFilming] = useState(0);
  const[lubeTune, setLubeTune] = useState(0);
  const[filmTune, setFilmTune] = useState(0);
  

  let newLubing = 0;
  let newStabilizer = 0;
  let newFilming = 0;
  let newLubeTune = 0;
  let newFilmTune = 0;


  useEffect(() => {
    pullServices();
  })

  const pullServices = () => { 
    props.builds.forEach((build) => {
      if (build.Services === 1 ) { 
        newLubing += 1;
        setLubing(newLubing)
      }
      else if (build.Services  === 2 ) { 
        newStabilizer += 1;
        setStabs(newStabilizer)
      }
      else if (build.Services === 3 ) { 
        newFilming += 1;
        setFilming(newFilming)
      }
      else if (build.Services === 4 ) { 
        newLubeTune += 1;
        setLubeTune(newLubeTune)
      }
      else if (build.Services === 5 ) { 
        newFilmTune += 1;
        setFilmTune(newFilmTune)
      }
      
  })};
  return (
    <div>
      <Bar
        type="bar"
        data={{
          labels: ["Switch-Lube", "Stablizer-Tuning", "Switch-Filming", "Lube and Tune", "Film and Tune"],
          datasets: [
            {
              label: "Servics",
              data: [lubing, stabilizer, filming, lubeTune, filmTune],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
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
