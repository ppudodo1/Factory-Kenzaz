import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/logos/VectorSmartObject1.png";
import searchLogo from "../../../assets/logos/searchIcon.png";
import { Link, useLocation } from "react-router-dom";

const buttonColors = {
  news: "#299EC3",
  business: "#EE6151",
  sport: "#84C14F",
  life: "#5DCFF3",
  tech: "#FCC44D",
  travel: "#A99765",
};

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles["header-outside-container"]}>
      <nav className={styles["header-inside-top"]}>
        <div className={styles["header-inside-top-container"]}>
          <div className={styles["logo-container"]}>
            <div className={styles["inner-logo"]}>
              <Link to={"/"}>
                <img src={logo} alt="logo" className={styles["logo-image"]} />
              </Link>
            </div>
            <Link to={"/"} className={styles["header-link"]}>
              <h3 className={styles["header-title"]}>Kenaz</h3>
            </Link>
          </div>
          <div className={styles["top-link-container"]}>
            <a href="" className={styles["top-link"]}>
              Media
            </a>
            <a href="" className={styles["top-link"]}>
              Marketing
            </a>
            <a href="" className={styles["top-link"]}>
              Contact
            </a>
            <div className={styles["search-icon"]}>
              <img src={searchLogo} alt="searchLogo" />
            </div>
          </div>
        </div>
      </nav>
      <nav className={styles["header-inside-bottom"]}>
        <div className={styles["header-inside-bottom-container"]}>
          {Object.entries(buttonColors).map(([key, color]) => (
            <Link
              key={key}
              to={`/category/${key}`}
              className={styles["button-link"]}
              style={{
                borderBottomColor: color,
                "--hover-color": color,
                backgroundColor:
                  location.pathname.split("/")[2] === key ? color : "initial",
              }}
            >
              {key.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
