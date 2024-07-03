import React from "react";
import styles from "./Footer.module.scss";
import TopComponent from "./footer-components/top-component/TopComponent";
import BotttomComponent from "./footer-components/bottom-component/BotttomComponent";
const Footer = () => {
  return (
    <div className={styles["footer-styles"]}>
      <div className={styles["purple-divider"]}></div>
      <TopComponent> </TopComponent>
      <BotttomComponent></BotttomComponent>
      <hr />
      <div className={styles["footer-template"]}>
        <p>© 2013 - Kenaz Template - Proudly made at Factory Croatia</p>
        <p>Typography - Templates - Contact Form - 404 Page</p>
      </div>
    </div>
  );
};

export default Footer;
