import React, { useState, useEffect } from "react";
import styles from "./TodayHighlight.module.scss";
import { fetchCountries } from "../../../api";
import cx from "classnames";

const TodayHighlight = () => {
  const [countries, setCountries] = useState([]);
  const [todayTopCases, setTodayTopCases] = useState([]);
  const [todayTopDeaths, setTodayTopDeaths] = useState([]);
  const [todayTopRecovered, setTodayTopRecovered] = useState([]);

  useEffect(() => {
    const fecthAPI = async () => {
      const todayCountries = await fetchCountries();
      setCountries(todayCountries);

      //  get top 5 countries today cases only
      setTodayTopCases([
        ...todayCountries
          .sort((a, b) =>
            a.todayCases > b.todayCases
              ? -1
              : b.todayCases > a.todayCases
              ? 1
              : 0
          )
          .slice(0, 5),
      ]);

      setTodayTopDeaths([
        ...todayCountries
          .sort((a, b) =>
            a.todayDeaths > b.todayDeaths
              ? -1
              : b.todayDeaths > a.todayDeaths
              ? 1
              : 0
          )
          .slice(0, 5),
      ]);

      setTodayTopRecovered([
        ...todayCountries
          .sort((a, b) =>
            a.todayRecovered > b.todayRecovered
              ? -1
              : b.todayRecovered > a.todayRecovered
              ? 1
              : 0
          )
          .slice(0, 5),
      ]);
    };
    fecthAPI();
  }, [setCountries]);

  if (!countries) return "Loading...";
  else {
    const todayHighlightList = [
      {
        title: "Today Cases",
        list: todayTopCases,
        type_list: todayTopCases.map(({ todayCases }) => todayCases),
        bgcolor: "#e9e0fb",
        color: "#4a00e0",
      },
      {
        title: "Today Deaths",
        list: todayTopDeaths,
        type_list: todayTopDeaths.map(({ todayDeaths }) => todayDeaths),
        bgcolor: "#fee7eb",
        color: "#dc3545",
      },
      {
        title: "Today Recovered",
        list: todayTopRecovered,
        type_list: todayTopRecovered.map(
          ({ todayRecovered }) => todayRecovered
        ),
        bgcolor: "#d9f8f1",
        color: "#28a745",
      },
    ];
    return (
      <React.Fragment>
        <div className="col-xs-12">
          <h2 className={styles.title}>Today Highlight</h2>
        </div>
        <div className={cx("col-xs-12 row", styles.wrapper)}>
          {todayHighlightList.map(
            ({ title, list, type_list, bgcolor, color }, index) => (
              <div
                key={index}
                className={cx("col-xs-12 col-lg-4", styles.today_card)}
              >
                <div
                  className={styles.today_card_box}
                  style={{ backgroundColor: bgcolor }}
                >
                  <h3 className={styles.today_card_title}>{title}</h3>
                  <ul>
                    {list.map(({ country }, index) => (
                      <li
                        key={index}
                        className={cx(
                          "flex a-center jc-spacebtw",
                          styles.today_card_country
                        )}
                      >
                        {country}
                        <span
                          className={styles.number}
                          style={{ color: color }}
                        >
                          {type_list[index]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </React.Fragment>
    );
  }
};

export default TodayHighlight;
