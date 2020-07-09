import React, { useState } from "react";
import { Logo, LogoMobile } from "../../images";
import { ReactComponent as IconMenu } from "../../images/icon_menu.svg";
import Nav from "./Nav/Nav";
import styles from "./Header.module.scss";
import cx from "classnames";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleToggle = (active) => {
    if (!active) setActive(true);
    setClicked(true);
  };

  const handleClose = (unactive) => {
    if (unactive) setActive(false);
  };

  return (
    <header>
      <div className={styles.logo_date}>
        <div className={styles.container}>
          <div className="row">
            <div className="col-xs-3 col-lg-6 flex a-center">
              <h1>
                <NavLink to="/" exact>
                  <img src={Logo} alt="logo" className={styles.logo} />
                  <img
                    src={LogoMobile}
                    alt="logo"
                    className={styles.logo_mobile}
                  />
                </NavLink>
              </h1>
            </div>
            <div className={cx("col-xs-6 flex a-center", styles.date)}>
              <p>
                Date : <span>{new Date().toDateString()}</span>
              </p>
            </div>
            <div className={cx("col-xs-3 flex a-center", styles.menu)}>
              <IconMenu
                className={styles.menu_button}
                onClick={() => handleToggle(active)}
              />
            </div>
          </div>
        </div>
      </div>
      <Nav active={active} clicked={clicked} handleClose={handleClose} />
    </header>
  );
};

export default Header;
