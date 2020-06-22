import React, { useEffect, useState } from "react";
import styles from "./OutbreakBarChart.module.scss";
import { fetchDailyData, fetchCountryPicker } from "../../../api";
import BarChart from "./BarChart/BarChart";
import TotalCounter from "./TotalCounter/TotalCounter";
import SelectBar from "./SelectBar/SelectBar";
import cx from "classnames";

const OutbreakBarChart = () => {
  const [countries, setCountries] = useState([]);
  const [dailyCases, setDailyCases] = useState([]);
  const [dailyDeaths, setDailyDeaths] = useState([]);
  const [dailyRecovered, setDailyRecovered] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const { cases, deaths, recovered } = await fetchDailyData();
      const fecthedCountries = await fetchCountryPicker();

      setDailyCases(cases);
      setDailyDeaths(deaths);
      setDailyRecovered(recovered);

      const filterCountryList = [
        ...fecthedCountries.map(({ country }) => country),
      ];
      setCountries(
        filterCountryList.filter(
          (country, index) => filterCountryList.indexOf(country) === index
        )
      );
    };
    fetchAPI();
  }, [setDailyCases]);

  const handleCasesSelect = async (country) => {
    if (!country) {
      const { cases } = await fetchDailyData();
      setDailyCases(cases);
    } else {
      const {
        timeline: { cases },
      } = await fetchDailyData(country);
      setDailyCases(cases);
    }
  };

  const handleDeathsSelect = async (country) => {
    if (!country) {
      const { deaths } = await fetchDailyData();
      setDailyDeaths(deaths);
    } else {
      const {
        timeline: { deaths },
      } = await fetchDailyData(country);
      setDailyDeaths(deaths);
    }
  };

  const handleRecoveredSelect = async (country) => {
    if (!country) {
      const { recovered } = await fetchDailyData();
      setDailyRecovered(recovered);
    } else {
      const {
        timeline: { recovered },
      } = await fetchDailyData(country);
      setDailyRecovered(recovered);
    }
  };

  const chartList = [
    {
      title: "Confirmed Cases",
      data: dailyCases,
      handler: handleCasesSelect,
      bgcolor: "#4a00e0",
      label: "Cases",
    },
    {
      title: "Confirmed Deaths",
      data: dailyDeaths,
      handler: handleDeathsSelect,
      bgcolor: "#fa5c7c",
      label: "Deaths",
    },
    {
      title: "Confirmed Recovered",
      data: dailyRecovered,
      handler: handleRecoveredSelect,
      bgcolor: "#04d39f",
      label: "Recovered",
    },
  ];

  if (!countries) return "Loading...";
  else {
    return (
      <React.Fragment>
        {chartList.map(({ title, data, handler, bgcolor, label }, index) => (
          <div key={index} className={cx("col-xs-12", styles.chart_zone)}>
            <div className="row">
              <div className="col-xs-12 col-xl-4">
                <h3 className={styles.title}>{title}</h3>
                <TotalCounter dailyData={data} />
                <h4 className={styles.time}>
                  {Object.keys(data)[0]} -{" "}
                  {Object.keys(data)[Object.keys(data).length - 1]}
                </h4>
                <h5 className={styles.source}>Source : JHU CSSE</h5>
              </div>
              <div className="col-xs-12 col-xl-8 row">
                <div
                  className={cx("col-xs-12 flex a-center", styles.select_zone)}
                >
                  <SelectBar countries={countries} handleSelect={handler} />
                </div>
                <div className="col-xs-12">
                  <BarChart dailyData={data} bgcolor={bgcolor} label={label} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
};

export default OutbreakBarChart;
