import React, { useState } from "react";
import styles from "./Origin.module.scss";
import Expand from "react-expand-animated";
import cx from "classnames";
import { Covid1, Covid2 } from "../../../images";

const Origin = () => {
  const [expand, setExpand] = useState(false);

  const hanldeToggle = (open) => {
    let readmore_btn = document.getElementById("origin_readmore");
    if (!open) {
      readmore_btn.innerHTML = "Collapse";
      setExpand(true);
    } else {
      readmore_btn.innerHTML = "Read more";
      setExpand(false);
    }
  };

  return (
    <div className="col-xs-12">
      <p className={styles.description}>
        2019 Novel Coronavirus (2019-nCoV) is a virus (more specifically, a
        coronavirus) identified as the cause of an outbreak of respiratory
        illness first detected in Wuhan, China.
      </p>
      <Expand className={styles.expand} open={expand}>
        <p className={styles.description}>
          Early on, many of the patients in the outbreak in Wuhan, China
          reportedly had some link to a large seafood and animal market,
          suggesting animal-to-person spread.
        </p>
        <p className={styles.description}>
          However, a growing number of patients reportedly have not had exposure
          to animal markets, indicating person-to-person spread is occurring.
        </p>
        <p className={styles.description}>
          The name coronavirus is derived from the Latin corona, meaning "crown"
          or "halo", which refers to the characteristic appearance reminiscent
          of a crown.
        </p>
      </Expand>
      <button
        id="origin_readmore"
        className={styles.readmore}
        onClick={() => hanldeToggle(expand)}
      >
        Read more
      </button>
      <div className={styles.full}>
        <p className={styles.description}>
          Early on, many of the patients in the outbreak in Wuhan, China
          reportedly had some link to a large seafood and animal market,
          suggesting animal-to-person spread.
        </p>
        <p className={styles.description}>
          However, a growing number of patients reportedly have not had exposure
          to animal markets, indicating person-to-person spread is occurring.
        </p>
        <p className={styles.description}>
          The name coronavirus is derived from the Latin corona, meaning "crown"
          or "halo", which refers to the characteristic appearance reminiscent
          of a crown.
        </p>
      </div>
      <h2 className={styles.title}>What does it look like?</h2>
      <p className={styles.description} style={{ fontStyle: "italic" }}>
        These images are colorized and from electron microscropes
      </p>
      <div className={cx("row", styles.img_container)}>
        <div className="col-xs-12 col-lg-6">
          <img src={Covid1} alt="" />
        </div>
        <div className="col-xs-12 col-lg-6">
          <img src={Covid2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Origin;
