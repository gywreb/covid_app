import React from "react";
import styles from "./SelectBar.module.scss";

const SelectBar = ({ countries, handleSelect }) => {
  return (
    <select
      name="country_picker"
      defaultValue=""
      className={styles.select_bar}
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option value="">Global</option>
      {countries
        ? countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))
        : "Loading..."}
    </select>
  );
};

export default SelectBar;
