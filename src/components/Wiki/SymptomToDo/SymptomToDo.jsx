import React, { useState } from "react";
import { SymptomToDoImg } from "../../../images";
import styles from "./SymptomToDo.module.scss";
import cx from "classnames";
import Expand from "react-expand-animated";

const SymptomToDo = () => {
  const [expand, setExpand] = useState(false);

  const hanldeToggle = (open) => {
    let readmore_btn = document.getElementById("symptom_readmore");
    if (!open) {
      readmore_btn.innerHTML = "Collapse";
      setExpand(true);
    } else {
      readmore_btn.innerHTML = "Read more";
      setExpand(false);
    }
  };

  return (
    <div className={cx("col-xs-12", styles.symptom_box)}>
      <div className="row">
        <div className={cx("col-xs-12", styles.img_container)}>
          <img src={SymptomToDoImg} alt="" />
        </div>
        <div className="col-xs-12">
          <h2 className={styles.title}>Symptoms and what to do</h2>
        </div>
        <div className={cx("col-xs-12", styles.description_box)}>
          <p className={styles.description}>
            Self-isolation at home has been recommended for those diagnosed with
            COVID-19 and those who suspect they have been infected.
          </p>
          <p className={styles.description}>
            Public health agencies have issued self-isolation instructions that
            include notification of healthcare providers by phone and
            restricting all activities outside of the home, except for getting
            medical care.
          </p>
          <Expand open={expand}>
            <p className={styles.description}>
              Do not go to work, school, or public areas. Avoid using public
              transportation, ride-sharing, or taxis
            </p>
            <p className={styles.description}>
              Those who have recently travelled to a country with widespread
              transmission or who have been in direct contact with someone
              diagnosed with COVID-19 have also been asked by some government
              health agencies to self-quarantine or practise social distancing
              for 14 days from the time of last possible exposure.
            </p>
            <p className={styles.description}>
              Attempts to relieve the symptoms may include taking regular
              (over-the-counter) cold medications, drinking fluids, and resting.
              Depending on the severity, oxygen therapy, intravenous fluids, and
              breathing support may be required.
            </p>
            <p className={styles.description}>
              The use of steroids may worsen outcomes.
            </p>
          </Expand>
        </div>
        <div className="col-xs-12">
          <button
            id="symptom_readmore"
            className={styles.readmore}
            onClick={() => hanldeToggle(expand)}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default SymptomToDo;
