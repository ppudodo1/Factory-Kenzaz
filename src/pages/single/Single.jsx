import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Single.module.scss";
import Banner from "../../components/banner/Banner";
import SideContent from "../../components/sideContent/SideContent";
import FullArticle from "../../components/singleComponents/fullArticle/FullArticle.jsx";
import Author from "../../components/singleComponents/author/Author.jsx";
import Comments from "../../components/singleComponents/comments/Comments.jsx";
import HeroBanner from "../../components/singleComponents/heroBanner/HeroBanner.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../features/news/newsSlice.js";
import { useEffect } from "react";
import { useParams } from "react-router";
const Single = () => {
  const { articleId } = useParams();
  console.log("Params: ", articleId);
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);
  const newsStatus = useSelector((state) => state.news.status);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (newsStatus === "idle") {
      dispatch(fetchNews());
    }
  }, [newsStatus, dispatch]);
  if (newsStatus === "loading") {
    return <div>Loading...</div>;
  }
  if (newsStatus === "error") {
    return <div>Error loading data...</div>;
  }
  if (!articles[articleId]) {
    return <div>Article not found</div>;
  }
  return (
    <div className={styles["site-content"]}>
      <Header></Header>
      <Banner width={940} height={120} center={"auto"} top={20}></Banner>
      <HeroBanner
        title={articles[articleId].title}
        image={articles[articleId].image}
      ></HeroBanner>
      <div className={styles["main-container"]}>
        <main className={styles["main-left-container"]}>
          <FullArticle content={articles[articleId].content}></FullArticle>
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
