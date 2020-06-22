import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ dailyData, bgcolor, label }) => {
  return (
    <Bar
      data={{
        labels: Object.keys(dailyData).map((date) => date),
        datasets: [
          {
            data: Object.values(dailyData).map((data) => data),
            backgroundColor: bgcolor,
            label: label,
            barPercentage: 0.8,
            barThickness: "flex",
          },
        ],
      }}
      options={{
        responsive: true,
        legend: {
          labels: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: {
                display: false,
              },
            },
          ],
        },
      }}
    />
  );
};

export default BarChart;
