import React from "react";
import styles from "./Footer.module.scss";
import TopComponent from "./footer-components/top-component/TopComponent";
import BotttomComponent from "./footer-components/bottom-component/BotttomComponent";
const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["purple-divider"]}></div>
      <TopComponent> </TopComponent>
      <BotttomComponent></BotttomComponent>
      <hr />
      <section className={styles["footer-template"]}>
        <p>© 2013 - Kenaz Template - Proudly made at Factory Croatia</p>
        <p>Typography - Templates - Contact Form - 404 Page</p>
      </section>
    </footer>
  );
};

export default Footer;
