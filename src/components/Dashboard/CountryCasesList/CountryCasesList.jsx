import React, { useState, useEffect } from "react";
import styles from "./CountryCasesList.module.scss";
import { fetchCountries } from "../../../api";
import cx from "classnames";
import CountUp from "react-countup";
import { ReactComponent as IconSearch } from "../../../images/icon_search.svg";

const CountryCasesList = () => {
  const [countries, setCountries] = useState([]);

  const [updatedCountries, setUpdatedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const list = await fetchCountries();
      const countries_list = [
        ...list.sort((a, b) =>
          a.cases > b.cases ? -1 : b.cases > a.cases ? 1 : 0
        ),
      ];
      setCountries(countries_list);
      setUpdatedCountries(countries_list);
    };
    fetchAPI();
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

  if (!countries) return "Loading...";
  else {
    return (
      <div className={cx("col-xs-12 col-lg-4", styles.countries_list)}>
        <div className={cx("flex a-center jc-spacebtw", styles.search_bar)}>
          <input
            className={styles.search_input}
            type="text"
            placeholder="Search..."
            onChange={handleInput}
          />
          <IconSearch className={styles.search_button} />
        </div>
        <div className={styles.countries_list_box}>
          <ul>
            {updatedCountries.length ? (
              updatedCountries.map(
                ({ country, cases, countryInfo: { flag } }, index) => (
                  <li
                    key={index}
                    className={cx("row a-center", styles.country_cases_country)}
                  >
                    <div className={cx("col-xs-2", styles.country_flag)}>
                      <img src={flag} alt="flag" />
                    </div>
                    <div className={cx("col-xs-4", styles.country_cases_name)}>
                      <span>{country}</span>
                    </div>
                    <div
                      className={cx("col-xs-6", styles.country_cases_number)}
                    >
                      <span>
                        <CountUp start={0} end={cases} separator="," />
                      </span>
                    </div>
                  </li>
                )
              )
            ) : (
              <ul>
                <li
                  className={cx(
                    "flex a-center jc-center",
                    styles.country_cases_country
                  )}
                >
                  No country found
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    );
  }
};

export default CountryCasesList;
