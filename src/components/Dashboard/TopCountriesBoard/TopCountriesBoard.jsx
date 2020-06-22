import React, { useState, useEffect } from "react";
import styles from "./TopCountriesBoard.module.scss";
import { fetchCountries } from "../../../api";
import cx from "classnames";

const TopCountriesBoard = () => {
  const [countries, setCountries] = useState([]);
  const [updatedCountries, setUpdatedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
      const topCountries = fetchedCountries
        .sort((a, b) => (a.cases > b.cases ? -1 : b.cases > a.cases ? 1 : 0))
        .slice(0, 10);

      setUpdatedCountries(topCountries);
    };
    fetchAPI();
  }, [setCountries]);

  const handleChange = (category) => {
    switch (category) {
      case "active":
        setUpdatedCountries([
          ...countries
            .sort((a, b) =>
              a.active > b.active ? -1 : b.active > a.active ? 1 : 0
            )
            .slice(0, 10),
        ]);
        break;
      case "critical":
        setUpdatedCountries([
          ...countries
            .sort((a, b) =>
              a.critical > b.critical ? -1 : b.critical > a.critical ? 1 : 0
            )
            .slice(0, 10),
        ]);
        break;
      case "deaths":
        setUpdatedCountries([
          ...countries
            .sort((a, b) =>
              a.deaths > b.deaths ? -1 : b.deaths > a.deaths ? 1 : 0
            )
            .slice(0, 10),
        ]);
        break;
      case "recovered":
        setUpdatedCountries([
          ...countries
            .sort((a, b) =>
              a.recovered > b.recovered ? -1 : b.recovered > a.recovered ? 1 : 0
            )
            .slice(0, 10),
        ]);
        break;
      default:
        setUpdatedCountries([
          ...countries
            .sort((a, b) =>
              a.cases > b.cases ? -1 : b.cases > a.cases ? 1 : 0
            )
            .slice(0, 10),
        ]);
        break;
    }
  };
  return (
    <React.Fragment>
      <div className="col-xs-12 row a-center">
        <div className="col-xs-6 col-xl-10">
          <h2 className={styles.title}>Top 10 Countries By</h2>
        </div>
        <div
          className={cx("col-xs-6 col-xl-2 flex a-center", styles.select_zone)}
        >
          <select
            name="categories_picker"
            id=""
            defaultValue=""
            className={styles.select_bar}
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="">Cases</option>
            <option value="active">Active</option>
            <option value="critical">Critical</option>
            <option value="deaths">Deaths</option>
            <option value="recovered">Recovered</option>
          </select>
        </div>
        <div className="col-xs-12">
          <div className={styles.board_wrapper}>
            <div className={styles.board}>
              <ul className={cx("flex a-center", styles.title_tags)}>
                <li>Country</li>
                <li>Cases</li>
                <li>Active</li>
                <li>Critical</li>
                <li>Deaths</li>
                <li>Recovered</li>
              </ul>

              {updatedCountries.length ? (
                updatedCountries.map(
                  (
                    {
                      country,
                      countryInfo: { flag },
                      cases,
                      active,
                      critical,
                      deaths,
                      recovered,
                    },
                    index
                  ) => (
                    <ul
                      key={index}
                      className={cx("flex a-center", styles.country)}
                    >
                      <li className="flex a-center">
                        <img src={flag} alt="flag" />
                        <span className={styles.country_name}>{country}</span>
                      </li>
                      <li>{cases}</li>
                      <li>{active}</li>
                      <li>{critical}</li>
                      <li>{deaths}</li>
                      <li>{recovered}</li>
                    </ul>
                  )
                )
              ) : (
                <ul className={cx("flex a-center", styles.country)}>
                  <li>Loading...</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopCountriesBoard;
