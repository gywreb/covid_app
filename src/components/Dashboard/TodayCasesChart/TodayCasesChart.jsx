import React from "react";
import styles from "./TodayCasesChart.module.scss";
import { Doughnut } from "react-chartjs-2";

const TodayCasesChart = ({
  data: { todayCases, todayDeaths, todayRecovered },
}) => {
  if (!todayCases) return "Loading...";
  else {
    return (
      <React.Fragment>
        <div className="col-xs-12">
          <h2 className={styles.title}>Total Cases Today</h2>
        </div>
        <div
          className="col-xs-12 flex a-center jc-center"
          style={{ height: "351px" }}
        >
          <Doughnut
            data={{
              datasets: [
                {
                  data: [todayCases, todayDeaths, todayRecovered],
                  backgroundColor: ["#727cf5", "#f53853", "#0acf97"],
                },
              ],
              labels: ["Cases", "Deaths", "Recovered"],
            }}
            options={{
              animation: { animateRotate: true, easing: "easeInQuad" },
              legend: {
                labels: { usePointStyle: true, padding: 10 },
              },
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </React.Fragment>
    );
  }
};

export default TodayCasesChart;
