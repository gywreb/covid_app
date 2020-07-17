import React, { useState, useEffect } from "react";
import styles from "./OutbreakBoard.module.scss";
import cx from "classnames";
import CountUp from "react-countup";
import { ReactComponent as IconSearch } from "../../../images/icon_search.svg";
import { fetchCountries } from "../../../api";

const OutbreakBoard = () => {
  const [countries, setCountries] = useState([]);

  const [updatedCountries, setUpdatedCountries] = useState([]);

  useEffect(() => {
    const fecthAPI = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
      setUpdatedCountries(countries);
    };
    fecthAPI();
  }, [setCountries]);

  const searchAction = (searchCountry) => {
    if (!searchCountry) return alert("Please type in a country");

    const country_regex = new RegExp(`^${searchCountry}`, "gi");

    setUpdatedCountries([
      ...countries.filter((countryItem) =>
        countryItem.country.match(country_regex)
      ),
    ]);
  };

  const handleInput = (e) => {
    if (!e.target.value.trim()) setUpdatedCountries([...countries]);
    else {
      const searchCountry = e.target.value.trim();
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
              />
              <IconSearch className={styles.search_button} />
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
                            <li className={styles.country_cases}>
                              <CountUp start={0} end={cases} separator="," />
                            </li>
                            <li className={styles.country_newcases}>
                              {todayCases ? (
                                <CountUp
                                  start={0}
                                  end={todayCases}
                                  prefix="+ "
                                  separator=","
                                />
                              ) : (
                                " "
                              )}
                            </li>
                            <li className={styles.country_deaths}>
                              <CountUp start={0} end={deaths} separator="," />
                            </li>
                            <li className={styles.country_newdeaths}>
                              {todayDeaths ? (
                                <CountUp
                                  start={0}
                                  end={todayDeaths}
                                  prefix="+ "
                                  separator=","
                                />
                              ) : (
                                " "
                              )}
                            </li>
                            <li className={styles.country_critical}>
                              <CountUp start={0} end={critical} separator="," />
                            </li>
                            <li className={styles.country_active}>
                              <CountUp start={0} end={active} separator="," />
                            </li>
                            <li className={styles.country_recovered}>
                              <CountUp
                                start={0}
                                end={recovered}
                                separator=","
                              />
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
                  <CountUp
                    start={0}
                    end={updatedCountries.reduce(
                      (acc, { cases }) => (acc += cases),
                      0
                    )}
                    separator=","
                  />
                </li>
                <li>
                  <CountUp
                    start={0}
                    end={updatedCountries.reduce(
                      (acc, { todayCases }) => (acc += todayCases),
                      0
                    )}
                    separator=","
                  />
                </li>
                <li>
                  <CountUp
                    start={0}
                    end={updatedCountries.reduce(
                      (acc, { deaths }) => (acc += deaths),
                      0
                    )}
                    separator=","
                  />
                </li>
                <li>
                  <CountUp
                    start={0}
                    end={updatedCountries.reduce(
                      (acc, { todayDeaths }) => (acc += todayDeaths),
                      0
                    )}
                    separator=","
                  />
                </li>
                <li>
                  <CountUp
                    start={0}
                    end={updatedCountries.reduce(
                      (acc, { critical }) => (acc += critical),
                      0
                    )}
                    separator=","
                  />
                </li>
                <li>
                  <CountUp
                    start={0}
                    end={updatedCountries.reduce(
                      (acc, { active }) => (acc += active),
                      0
                    )}
                    separator=","
                  />
                </li>
                <li>
                  <CountUp
                    start={0}
                    end={updatedCountries.reduce(
                      (acc, { recovered }) => (acc += recovered),
                      0
                    )}
                    separator=","
                  />
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
