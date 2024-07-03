import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Category.module.scss";
import Banner from "../../components/banner/Banner";
import InfiniteSlider from "../../components/slider/InfiniteSlider";
import Sidebar from "../../components/sidebar/Sidebar";
import Social from "../../components/social/Social";
import Video from "../../components/video/Video";
import Facebook from "../../components/facebook/Facebook";
import NewsComponent from "./categoryComponents/newsComponent/NewsComponent";
import Numeration from "./categoryComponents/numeration/Numeration";

const Category = () => {
  return (
    <div className={styles["site-content"]}>
      <Header></Header>
      <Banner width={940} height={120} center={"auto"} top={20}></Banner>
      <InfiniteSlider></InfiniteSlider>
      <div className={styles["big-bottom-container"]}>
        <div className={styles["big-left-container"]}>
          <div className={styles["news-title-container"]}>
            <h1>News</h1>
          </div>
          <NewsComponent></NewsComponent>
          <NewsComponent></NewsComponent>
          <NewsComponent></NewsComponent>
          <NewsComponent></NewsComponent>
          <NewsComponent></NewsComponent>
          <NewsComponent></NewsComponent>
          <Numeration></Numeration>
          <Banner
            width={620}
            height={120}
            center={"auto"}
            top={20}
            bottom={20}
          ></Banner>
        </div>
        <div className={styles["big-right-container"]}>
          <Sidebar></Sidebar>
          <Social></Social>
          <Video></Video>
          <div className={styles["banner-container"]}>
            <Banner width={128} height={128} top={0}></Banner>
            <Banner width={128} height={128} top={0}></Banner>
          </div>
          <Facebook></Facebook>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Category;
