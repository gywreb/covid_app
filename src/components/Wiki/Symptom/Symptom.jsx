import React from "react";
import styles from "./Symptom.module.scss";
import {
  HotFever,
  CoughSneezing,
  Fatique,
  SputumProduction,
  ShortnessBreath,
  Headacke,
} from "../../../images";
import cx from "classnames";

const Symptom = () => {
  const infected_boxs = [
    {
      title: "Hot Fever",
      ratio: "87,9%",
      img: HotFever,
    },
    {
      title: "Cough And Sneezing",
      ratio: "67,7%",
      img: CoughSneezing,
    },
    {
      title: "Fatique",
      ratio: "38,1%",
      img: Fatique,
    },
    {
      title: "Sputum Production",
      ratio: "33,4%",
      img: SputumProduction,
    },
    {
      title: "Shortness Of Breath",
      ratio: "18,6%",
      img: ShortnessBreath,
    },
    {
      title: "Strong Headacke",
      ratio: "13,6%",
      img: Headacke,
    },
  ];
  return (
    <div className={cx("col-xs-12", styles.symptom_box)}>
      <p className={styles.description}>
        The most common symptoms of COVID-19 are fever, tiredness, and dry
        cough. Some patients may have aches and pains, nasal congestion, runny
        nose, sore throat or diarrhea. These symptoms are usually mild and begin
        gradually. Also the symptoms may appear 2-14 days after exposure.
      </p>
      <h2 className={styles.title}>How do I know if I am infected?</h2>
      <div className="row">
        {infected_boxs.map(({ title, ratio, img }, index) => (
          <div key={index} className="col-xs-12 col-lg-6">
            <div className={cx(styles.infected_box, "row")}>
              <div className="col-xs-12 flex a-center jc-center">
                <img src={img} alt="" />
              </div>
              <div
                className={cx(
                  "col-xs-12 flex a-center jc-center",
                  styles.infected_title
                )}
              >
                <p>{title}</p>
              </div>
              <div
                className={cx(
                  "col-xs-12 flex a-center jc-center",
                  styles.infected_ratio
                )}
              >
                <p>{ratio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className={styles.title}>Others Symptoms</h2>
      <p className={styles.description}>
        Some patients may have aches and pains, nasal congestion, runny nose,
        sore throat or diarrhea. These symptoms are usually mild & begin
        gradually. Some people become infected but don’t develop any symptoms &
        don't feel unwell. Most people (about 80%) recover from the disease
        without needing special treatment.
      </p>
    </div>
  );
};

export default Symptom;
