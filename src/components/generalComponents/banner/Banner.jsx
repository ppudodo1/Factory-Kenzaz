import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./Banner.module.scss";
const Banner = ({ width, height, center, top, bottom }) => {
  const [fullBannerWidth, setFullBannerWidth] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
        setFullBannerWidth(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      className={styles["banner-container"]}
      style={{
        height: `${height}px`,
        width: fullBannerWidth && center == "auto" ? "95%" : "100%",
        maxWidth: `${width}px`,
        margin: `0 ${center}`,
        marginTop: `${top}px`,
        marginBottom: `${bottom}px`,
      }}
    ></section>
  );
};

export default Banner;
