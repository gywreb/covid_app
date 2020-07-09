import React from "react";
import { WorldYoutube, WorldNews } from "./";
import styles from "./News.module.scss";
import cx from "classnames";

const News = () => {
  document.title = "Covilive | News";
  return (
    <div className={styles.news_page}>
      <div className={styles.container}>
        <div className="row">
          <div className="col-xs-12">
            <div className={cx("row", styles.box)}>
              <WorldYoutube />
            </div>
          </div>
          <div className="col-xs-12">
            <div className="row">
              <WorldNews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
