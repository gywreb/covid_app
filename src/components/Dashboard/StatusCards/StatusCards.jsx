import React from "react";
import styles from "./StatusCards.module.scss";
import {
  imgCases,
  imgDeaths,
  imgRecovered,
  imgCritical,
} from "../../../images";
import { CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

const StatusCards = ({ data: { cases, critical, deaths, recovered } }) => {
  if (!cases) return "Loading...";

  const cards = [
    {
      id: 1,
      title: "TOTAL CASES",
      value: cases,
      img: imgCases,
      bgcolor: "#4a00e0",
    },
    {
      id: 2,
      title: "TOTAL DEATHS",
      value: deaths,
      img: imgDeaths,
      bgcolor: "#fa5c7c",
    },
    {
      id: 3,
      title: "RECOVERED",
      value: recovered,
      img: imgRecovered,
      bgcolor: "#04d39f",
    },
    {
      id: 4,
      title: "CRITICAL",
      value: critical,
      img: imgCritical,
      bgcolor: "#ffc107",
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} className={styles.container}>
        {cards.map(({ id, title, value, img, bgcolor }) => (
          <Grid item className={styles.card} xs={12} sm={6} md={12} key={id}>
            <CardContent
              className={styles.content}
              style={{ backgroundColor: bgcolor }}
            >
              <Grid item>
                <Typography
                  className={cx(styles.cardtext, styles.status_title)}
                  variant="h3"
                  color="textPrimary"
                  gutterBottom
                >
                  {title}
                </Typography>
                <Typography
                  className={cx(styles.cardtext, styles.status_number)}
                  variant="h5"
                  color="textPrimary"
                  gutterBottom
                >
                  <CountUp start={0} end={value} duration={2.5} separator="," />
                </Typography>
              </Grid>
              <img src={img} alt="cases" />
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StatusCards;
