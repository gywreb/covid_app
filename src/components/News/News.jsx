import React, { createContext } from "react";
import { VNYoutube } from "./";
import styles from "./News.module.scss";
import cx from "classnames";

const News = () => {
  document.title = "Covilive | News";
  return (
    <div className={styles.news_page}>
      <div className={styles.container}>
        <div className={cx("row", styles.box)}>
          <VNYoutube />
        </div>
      </div>
    </div>
  );
};

export default News;
