import React from "react";
import styles from "./Nav.module.scss";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import { ReactComponent as IconDashboard } from "../../../images/icon_dashboard.svg";
import { ReactComponent as IconWiki } from "../../../images/icon_wiki.svg";
import { ReactComponent as IconNews } from "../../../images/icon_news.svg";
import { ReactComponent as IconTest } from "../../../images/icon_test.svg";
import { ReactComponent as IconChat } from "../../../images/icon_chat.svg";

const Nav = ({ active, clicked, handleClose }) => {
  return (
    <React.Fragment>
      <nav>
        <div className={styles.container}>
          <ul className="flex a-center">
            <li>
              <NavLink
                to="/"
                exact
                className={cx("flex a-center", styles.nav_button)}
                activeClassName={styles.active}
              >
                <IconDashboard className={styles.icon} />
                <span className={styles.label}>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wiki"
                className={cx("flex a-center", styles.nav_button)}
                activeClassName={styles.active}
              >
                <IconWiki className={styles.icon} />
                <span className={styles.label}>Wiki</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={cx("flex a-center", styles.nav_button)}
                activeClassName={styles.active}
              >
                <IconNews className={styles.icon} />
                <span className={styles.label}>News</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/survivaltest"
                className={cx("flex a-center", styles.nav_button)}
                activeClassName={styles.active}
              >
                <IconTest className={styles.icon} />
                <span className={styles.label}>Survival Test</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chatroom"
                className={cx("flex a-center", styles.nav_button)}
                activeClassName={styles.active}
              >
                <IconChat className={styles.icon} />
                <span className={styles.label}>Chat Room</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <nav
        className={
          !clicked
            ? styles.nav_fixed
            : active
            ? cx(styles.nav_fixed, styles.active)
            : cx(styles.nav_fixed, styles.unactive)
        }
      >
        <button
          className={styles.close_button}
          onClick={() => handleClose(true)}
        >
          X Close
        </button>
        <div className={styles.container}>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                className={cx("flex a-center", styles.nav_button)}
                activeClassName={styles.active}
                onClick={() => handleClose(true)}
              >
                <IconDashboard className={styles.icon} />
                <span className={styles.label}>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wiki"
                className={cx("flex a-center", styles.nav_button)}
                activeClassName={styles.active}
                onClick={() => handleClose(true)}
              >
                <IconWiki className={styles.icon} />
                <span className={styles.label}>Wiki</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={cx("flex a-center", styles.nav_button)}
                activeClassName={styles.active}
                onClick={() => handleClose(true)}
              >
                <IconNews className={styles.icon} />
                <span className={styles.label}>News</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/survivaltest"
                className={cx("flex a-center", styles.nav_button)}
                activeClassName={styles.active}
                onClick={() => handleClose(true)}
              >
                <IconTest className={styles.icon} />
                <span className={styles.label}>Survival Test</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/chatroom"
                className={cx("flex a-center", styles.nav_button)}
                activeClassName={styles.active}
                onClick={() => handleClose(true)}
              >
                <IconChat className={styles.icon} />
                <span className={styles.label}>Chat Room</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
