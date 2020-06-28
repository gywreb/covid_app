import React, { useEffect } from "react";
import styles from "./Wiki.module.scss";
import { Origin, Symptom, SymptomToDo, Prevention } from "./";
import cx from "classnames";

const Wiki = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Covilive | Wiki";
  }, []);

  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col-xs-12">
          <div className={cx("row", styles.box)} style={{ marginTop: "30px" }}>
            <h2 className={cx("col-xs-12", styles.title)}>Origin</h2>
            <Origin />
          </div>
        </div>
        <div
          className={cx(styles.symptom_zone, "row")}
          style={{ height: "1138px" }}
        >
          <div className="col-xs-12 col-xl-8">
            <div className={cx("row", styles.box, styles.symptom)}>
              <h2 className={cx("col-xs-12", styles.title)}>Symptoms</h2>
              <Symptom />
            </div>
          </div>
          <div className="col-xs-12 col-xl-4">
            <div className={cx("row", styles.box, styles.symptom)}>
              <SymptomToDo />
            </div>
          </div>
          <div className="col-xs-12">
            <div className={cx("row", styles.box)}>
              <h2 className={cx("col-xs-12", styles.title)}>Preventions</h2>
              <Prevention />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wiki;
