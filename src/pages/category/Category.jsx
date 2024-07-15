import React from "react";
import Header from "../../components/generalComponents/header/Header.jsx";
import Footer from "../../components/generalComponents/footer/Footer.jsx";
import styles from "./Category.module.scss";
import Banner from "../../components/generalComponents/banner/Banner.jsx";
import InfiniteSlider from "../../components/generalComponents/slider/InfiniteSlider";
import SideContent from "../../components/generalComponents/sideContent/SideContent";
import NewsComponent from "../../components/categoryComponents/newsComponent/NewsComponent.jsx";
import Numeration from "../../components/categoryComponents/numeration/Numeration.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../features/news/newsSlice.js";
import { useEffect } from "react";
const Category = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);
  const newsStatus = useSelector((state) => state.news.status);
  const firstArticleIndex = useSelector(
    (state) => state.pagination.firstArticleIndex
  );

  const lastArticleIndex = useSelector(
    (state) => state.pagination.lastArticleIndex
  );
  useEffect(() => {
    if (newsStatus === "idle") {
      dispatch(fetchNews());
    }
  }, [newsStatus, dispatch]);
  if (newsStatus === "loading" && articles == undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles["site-content"]}>
      <Header></Header>
      <Banner width={940} height={120} center={"auto"} top={20}></Banner>
      <InfiniteSlider articles={articles}></InfiniteSlider>
      <div className={styles["main-container"]}>
        <main className={styles["main-left-container"]}>
          <div className={styles["news-title-container"]}>
            <h1>News</h1>
          </div>
          {articles && articles.length > 0 ? (
            articles
              .slice(firstArticleIndex, lastArticleIndex)
              .map((data, index) => (
                <NewsComponent
                  article={data}
                  articleId={firstArticleIndex + index}
                  key={index}
                ></NewsComponent>
              ))
          ) : (
            <p>No articles</p>
          )}

          <Numeration></Numeration>
          <Banner
            width={620}
            height={120}
            center={"auto"}
            top={20}
            bottom={20}
          ></Banner>
        </main>
        <aside className={styles["main-right-container"]}>
          <SideContent articles={articles}></SideContent>
        </aside>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Category;
