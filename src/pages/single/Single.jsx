import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Single.module.scss";
import Banner from "../../components/banner/Banner";
import InfiniteSlider from "../../components/slider/InfiniteSlider";
import Sidebar from "../../components/sidebar/Sidebar";
import Social from "../../components/social/Social";
import Video from "../../components/video/Video";
import Facebook from "../../components/facebook/Facebook";
import FullArticle from "./singleComponents/fullArticle/FullArticle";
import Author from "./singleComponents/author/Author";
import Comments from "./singleComponents/comments/Comments";
import HeroBanner from "./singleComponents/heroBanner/HeroBanner";
const Single = () => {
  return (
    <div className={styles["site-content"]}>
      <Header></Header>
      <Banner width={940} height={120} center={"auto"} top={20}></Banner>
      <HeroBanner></HeroBanner>
      <section className={styles["big-bottom-container"]}>
        <article className={styles["big-left-container"]}>
          <FullArticle></FullArticle>
          <Banner width={620} height={120} center={"auto"} top={20}></Banner>
          <Author></Author>
          <Comments></Comments>
        </article>
        <aside className={styles["big-right-contaier"]}>
          <Sidebar></Sidebar>
          <Social></Social>
          <Video></Video>
          <div className={styles["banner-container"]}>
            <Banner width={128} height={128} top={0}></Banner>
            <Banner width={128} height={128} top={0}></Banner>
          </div>
          <Facebook></Facebook>
        </aside>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Single;
