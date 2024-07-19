import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/logos/VectorSmartObject1.png";
import searchLogo from "../../../assets/logos/searchIcon.png";
import { Link, useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.js";
import { useDispatch } from "react-redux";
import { addUser, logOut } from "../../../features/loggedUser/userSlice.js";
import hamburger from "../../../assets/logos/hamburger.png";
import close from "../../../assets/logos/close.png";
const buttonColors = {
  news: "#299EC3",
  business: "#EE6151",
  sport: "#84C14F",
  life: "#5DCFF3",
  tech: "#FCC44D",
  travel: "#A99765",
};

const Header = () => {
  const [authUser, setAuthUser] = useState(null);
  const [visibleNav, setVisibleNav] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      if (user) {
        dispatch(addUser(user));
      } else {
        dispatch(addUser({}));
      }
    });
    return () => {
      listen();
    };
  }, [dispatch]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setVisibleNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logOut());
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const location = useLocation();

  return (
    <header className={styles["header-outside-container"]}>
      <nav className={styles["header-inside-top"]}>
        <div
          className={
            visibleNav
              ? styles["header-inside-top-container-mobile"]
              : styles["header-inside-top-container"]
          }
        >
          <div className={styles["logo-container-nav"]}>
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
            <button
              onClick={() => setVisibleNav(!visibleNav)}
              className={styles["mobile-nav"]}
            >
              {visibleNav ? (
                <img src={close} alt="close" />
              ) : (
                <img src={hamburger} alt="hamburger" />
              )}
            </button>
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
            {authUser ? (
              <>
                <a href="/userProfile" className={styles["top-link"]}>
                  {authUser.displayName}
                </a>
                <button onClick={userSignOut} className={styles["log-out"]}>
                  Log out
                </button>
              </>
            ) : (
              <>
                <a href="/login" className={styles["top-link"]}>
                  Login
                </a>
                <a href="/signIn" className={styles["top-link"]}>
                  Sign up
                </a>
              </>
            )}
            <div className={styles["search-icon"]}>
              <img src={searchLogo} alt="searchLogo" />
            </div>
          </div>

          <div className={visibleNav ? styles["visible"] : styles["invisible"]}>
            <a href="" className={styles["top-link"]}>
              Media
            </a>
            <a href="" className={styles["top-link"]}>
              Marketing
            </a>
            <a href="" className={styles["top-link"]}>
              Contact
            </a>
            {authUser ? (
              <>
                <a href="/userProfile" className={styles["top-link"]}>
                  {authUser.displayName}
                </a>
                <button onClick={userSignOut} className={styles["log-out"]}>
                  Log out
                </button>
              </>
            ) : (
              <>
                <a href="/login" className={styles["top-link"]}>
                  Login
                </a>
                <a href="/signIn" className={styles["top-link"]}>
                  Sign up
                </a>
              </>
            )}
            <div className={styles["search-icon"]}>
              <img src={searchLogo} alt="searchLogo" />
            </div>
          </div>
        </div>
      </nav>
      <nav className={styles["header-inside-bottom"]}>
        <div
          className={
            visibleNav
              ? styles["header-inside-bottom-container-nav"]
              : styles["header-inside-bottom-container"]
          }
        >
          {Object.entries(buttonColors).map(([key, color]) => (
            <Link
              key={key}
              to={`/category/${key}/0`}
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
