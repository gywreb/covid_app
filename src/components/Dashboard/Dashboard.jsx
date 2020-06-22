import React, { Component } from "react";
import {
  StatusCards,
  CountryCasesList,
  CountryCasesMap,
  TodayHighlight,
  TodayCasesChart,
  OutbreakBoard,
  OutbreakBarChart,
  TopCountriesBoard,
  WHONews,
} from "./";
import styles from "./Dashboard.module.scss";
import { fetchSummary } from "../../api";
import cx from "classnames";

class Dashboard extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    window.scrollTo(0, 0);
    const fecthedData = await fetchSummary();
    this.setState({ data: fecthedData });
  }

  render() {
    if (!this.state.data) return "Loading...";
    else {
      const { data } = this.state;
      const last_update = new Date(
        new Date() - new Date(data.updated)
      ).getMinutes();

      return (
        <div className={styles.container}>
          <h2 className={cx("flex a-center jc-spacebtw", styles.title)}>
            COVID-19 Tracker{" "}
            <span className={styles.last_update}>
              {`Last Updated : ${
                last_update ? `${last_update} minute(s) ago` : "Just now"
              }`}
            </span>
          </h2>
          <div className="row">
            <div className="col-xs-12 col-xl-4">
              <StatusCards data={data} />
            </div>
            <div className="col-xs-12 col-xl-8">
              <div className={cx("row", styles.box)}>
                <CountryCasesList />
                <CountryCasesMap />
              </div>
            </div>
            <div className="col-xs-12 col-xl-8">
              <div className={cx("row", styles.box)}>
                <TodayHighlight />
              </div>
            </div>
            <div className="col-xs-12 col-xl-4">
              <div className={cx("row", styles.box)}>
                <TodayCasesChart data={data} />
              </div>
            </div>
            <div className="col-xs-12">
              <div className={cx("row", styles.box)}>
                <OutbreakBoard />
              </div>
            </div>
            <div className="col-xs-12">
              <div className={cx("row", styles.box)}>
                <div className={cx("col-xs-12", styles.title, styles.outbreak)}>
                  Outbreak In The Last 30 Days
                </div>
                <OutbreakBarChart />
              </div>
            </div>
            <div className="col-xs-12 col-xl-8">
              <div className={cx("row", styles.box)}>
                <TopCountriesBoard />
              </div>
            </div>
            <div className="col-xs-12 col-xl-4">
              <div className={cx("row", styles.box)}>
                <WHONews />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;
