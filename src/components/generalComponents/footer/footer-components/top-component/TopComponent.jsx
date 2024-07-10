import React from "react";
import styles from "./TopComponent.module.scss";
import dribble from "../../../../../assets/logos/dribble.png";
import facebook from "../../../../../assets/logos/Facebook.png";
import linkedin from "../../../../../assets/logos/Linkedin.png";
import rss from "../../../../../assets/logos/Rss.png";
import skype from "../../../../../assets/logos/Skype.png";
import twitter from "../../../../../assets/logos/twitter.png";
import youtube from "../../../../../assets/logos/Youtube.png";
import kenaz from "../../../../../assets/logos/kenaz1.png";

const TopComponent = () => {
  return (
    <div className={styles["footer-top-container"]}>
      <section className={styles["kenaz-container"]}>
        <article className={styles["kenaz-image-container"]}>
          <img src={kenaz} alt="kenaz" />
          <h2>Kenaz</h2>
        </article>

        <p className={styles["kenaz-text-par"]}>
          Lorem ipsum dolor sit amet, consectetur adipsiscing elit. Vivamus leo
          ante.
        </p>
        <div className={styles["icon-container"]}>
          <img src={rss} alt="rss" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={dribble} alt="driblle" />
          <img src={linkedin} alt="linkedin" />
          <img src={youtube} alt="youtube" />
          <img src={skype} alt="skype" />
        </div>
      </section>
      <section className={styles["newsletter-container"]}>
        <h2>Newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adidpsicing elit. Vivamus leo
          ante...
        </p>
        <div className={styles["input-container"]}>
          <input type="text" placeholder="Your mail" />
          <button>Subscribe</button>
        </div>
      </section>
      <section className={styles["tags-container"]}>
        <h2>Tags Widget</h2>
        <article className={styles["tags-button-container"]}>
          <button>assueverit</button>
          <button>utroquoe</button>
          <button>probo</button>
          <button>assuev</button>
          <button>probo</button>
          <button>assueverit</button>
          <button>titl</button>
          <button>assueverit</button>
          <button>utroquoe</button>
          <button>probo</button>
          <button>assueverit</button>
          <button>utroquoe</button>
          <button>assueverit</button>
        </article>
      </section>
    </div>
  );
};

export default TopComponent;
