import React from "react";
import styles from "./Prevention.module.scss";
import cx from "classnames";
import {
  Handwashing,
  SafeDistance,
  NoTouch,
  StayHome,
  MedicalHelp,
  FollowInstruction,
} from "../../../images";

const Prevention = () => {
  const preventions = [
    {
      title: "Handwashing",
      img: Handwashing,
      content:
        "Clean your hands often. Use soap and water, or an alcohol-based hand rub.",
    },
    {
      title: "Safe Distance",
      img: SafeDistance,
      content:
        "Maintain a safe distance from anyone who is coughing or sneezing.",
    },
    {
      title: "Don't Touch",
      img: NoTouch,
      content: "Don’t touch your eyes, nose or mouth.",
    },
    {
      title: "Stay Home",
      img: StayHome,
      content: "Stay home if you feel unwell.",
    },
    {
      title: "Call Medical Help",
      img: MedicalHelp,
      content:
        "If you have a fever, cough and difficulty breathing, seek medical attention.",
    },
    {
      title: "Follow Instruction",
      img: FollowInstruction,
      content: "Follow the directions of your local health authority.",
    },
  ];
  return (
    <div className={cx("col-xs-12", styles.prevention_zone)}>
      <div className="row">
        {preventions.map(({ title, img, content }, index) => (
          <div key={index} className="col-xs-12 col-lg-4">
            <div className={cx(styles.prevention_box, "row")}>
              <div className="col-xs-12 flex a-center jc-center">
                <img src={img} alt="" />
              </div>
              <div
                className={cx(
                  "col-xs-12 flex a-center jc-center",
                  styles.prevention_title
                )}
              >
                <p>{title}</p>
              </div>
              <div
                className={cx(
                  "col-xs-12 flex a-center jc-center",
                  styles.prevention_content
                )}
              >
                <p>{content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prevention;
