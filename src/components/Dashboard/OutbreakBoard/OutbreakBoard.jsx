import React, { useState, useEffect } from "react";
import styles from "./OutbreakBoard.module.scss";
import cx from "classnames";
import { ReactComponent as IconSearch } from "../../../images/icon_search.svg";
import { fetchCountries } from "../../../api";

const OutbreakBoard = () => {
  const [countries, setCountries] = useState([]);

  const [searchCountry, setSearchCountry] = useState("");

  const [updatedCountries, setUpdatedCountries] = useState([]);

  useEffect(() => {
    const fecthAPI = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
      setUpdatedCountries(countries);
    };
    fecthAPI();
  }, [setCountries]);

  const handleInput = (e) => {
    if (!e.target.value.trim()) setUpdatedCountries([...countries]);
    setSearchCountry(e.target.value.trim());
  };

  const searchAction = (searchCountry) => {
    if (!searchCountry) return alert("Please type in a country");

    const country_regex = new RegExp(`^${searchCountry}`, "gi");

    setUpdatedCountries([
      ...countries.filter((countryItem) =>
        countryItem.country.match(country_regex)
      ),
    ]);
  };

  const handleClick = (searchCountry) => {
    searchAction(searchCountry);
  };

  const handleEnter = (e, searchCountry) => {
    if (e.keyCode === 13) {
      searchAction(searchCountry);
    }
  };

  if (!countries) return "Loading";
  else {
    return (
      <React.Fragment>
        <div className="col-xs-12 row a-center">
          <div className="col-xs-5 col-xl-10">
            <h2 className={styles.title}>Covid Outbreak</h2>
          </div>
          <div className={cx("col-xs-7 col-xl-2", styles.search_zone)}>
            <div className={cx("flex a-center jc-spacebtw", styles.search_bar)}>
              <input
                className={styles.search_input}
                type="text"
                placeholder="Search..."
                onChange={handleInput}
                onKeyDown={(e) => handleEnter(e, searchCountry)}
              />
              <IconSearch
                className={styles.search_button}
                onClick={() => handleClick(searchCountry)}
              />
            </div>
          </div>
        </div>
        <div className="col-xs-12">
          <div className={styles.board_wrapper}>
            <div className={styles.board} style={{ height: "520px" }}>
              <ul
                className={cx("flex a-center jc-spacebtw", styles.title_tags)}
              >
                <li>Country , Others</li>
                <li>Total Cases</li>
                <li>New Cases</li>
                <li>Total Deaths</li>
                <li>New Deaths</li>
                <li>Serious, Critical</li>
                <li>Active Cases</li>
                <li>Total Recovered</li>
              </ul>

              <div className={styles.country_box}>
                <div className={cx("row", styles.country_wrapper)}>
                  {updatedCountries.length ? (
                    updatedCountries.map(
                      (
                        {
                          country,
                          cases,
                          todayCases,
                          deaths,
                          todayDeaths,
                          critical,
                          active,
                          recovered,
                        },
                        index
                      ) => (
                        <div
                          key={index}
                          className={cx("col-xs-12", styles.country)}
                        >
                          <ul className="flex a-center jc-spacebtw">
                            <li className={styles.country_name}>{country}</li>
                            <li className={styles.country_cases}>{cases}</li>
                            <li className={styles.country_newcases}>
                              {todayCases ? `+ ${todayCases}` : " "}
                            </li>
                            <li className={styles.country_deaths}>{deaths}</li>
                            <li className={styles.country_newdeaths}>
                              {todayDeaths ? `+ ${todayDeaths}` : " "}
                            </li>
                            <li className={styles.country_critical}>
                              {critical}
                            </li>
                            <li className={styles.country_active}>{active}</li>
                            <li className={styles.country_recovered}>
                              {recovered}
                            </li>
                          </ul>
                        </div>
                      )
                    )
                  ) : (
                    <div
                      className={cx(
                        "flex a-center jc-center",
                        styles.country_notify
                      )}
                    >
                      <p>No country found</p>
                    </div>
                  )}
                </div>
              </div>
              <ul
                className={cx("flex a-center jc-spacebtw", styles.title_total)}
              >
                <li>Total</li>
                <li>
                  {updatedCountries.reduce(
                    (acc, { cases }) => (acc += cases),
                    0
                  ) || "None"}
                </li>
                <li>
                  {updatedCountries.reduce(
                    (acc, { todayCases }) => (acc += todayCases),
                    0
                  ) || "None"}
                </li>
                <li>
                  {updatedCountries.reduce(
                    (acc, { deaths }) => (acc += deaths),
                    0
                  ) || "None"}
                </li>
                <li>
                  {updatedCountries.reduce(
                    (acc, { todayDeaths }) => (acc += todayDeaths),
                    0
                  ) || "None"}
                </li>
                <li>
                  {updatedCountries.reduce(
                    (acc, { critical }) => (acc += critical),
                    0
                  ) || "None"}
                </li>
                <li>
                  {updatedCountries.reduce(
                    (acc, { active }) => (acc += active),
                    0
                  ) || "None"}
                </li>
                <li>
                  {updatedCountries.reduce(
                    (acc, { recovered }) => (acc += recovered),
                    0
                  ) || "None"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default OutbreakBoard;
