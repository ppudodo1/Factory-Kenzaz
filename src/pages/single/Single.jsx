import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Single.module.scss";
import Banner from "../../components/banner/Banner";
/*import FullArticle from "./singleComponents/fullArticle/FullArticle";
import Author from "./singleComponents/author/Author";
import Comments from "./singleComponents/comments/Comments";
import HeroBanner from "./singleComponents/heroBanner/HeroBanner";*/
import SideContent from "../../components/sideContent/SideContent";
import FullArticle from "../../components/singleComponents/fullArticle/FullArticle.jsx";
import Author from "../../components/singleComponents/author/Author.jsx";
import Comments from "../../components/singleComponents/comments/Comments.jsx";
import HeroBanner from "../../components/singleComponents/heroBanner/HeroBanner.jsx";
const Single = () => {
  return (
    <div className={styles["site-content"]}>
      <Header></Header>
      <Banner width={940} height={120} center={"auto"} top={20}></Banner>
      <HeroBanner></HeroBanner>
      <div className={styles["main-container"]}>
        <main className={styles["main-left-container"]}>
          <FullArticle></FullArticle>
          <Banner width={620} height={120} center={"auto"} top={20}></Banner>
          <Author></Author>
          <Comments></Comments>
        </main>
        <aside className={styles["main-right-contaier"]}>
          <SideContent></SideContent>
        </aside>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Single;
