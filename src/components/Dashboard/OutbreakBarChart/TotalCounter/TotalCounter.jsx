import React from "react";
import CountUp from "react-countup";
import styles from "./TotalCounter.module.scss";

const TotalCounter = ({ dailyData }) => {
  const total =
    Object.values(dailyData)[Object.values(dailyData).length - 1] -
    Object.values(dailyData)[0];

  return (
    <h4 className={styles.number}>
      <CountUp start={0} end={total ? total : 0} duration={2.5} separator="," />
    </h4>
  );
};

export default TotalCounter;
