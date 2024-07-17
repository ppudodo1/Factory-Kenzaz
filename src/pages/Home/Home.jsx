import React, { useEffect, useState } from "react";
import Header from "../../components/generalComponents/header/Header.jsx";
import Footer from "../../components/generalComponents/footer/Footer.jsx";
import styles from "./Home.module.scss";
import Banner from "../../components/generalComponents/banner/Banner.jsx";
import InfiniteSlider from "../../components/generalComponents/slider/InfiniteSlider";
import CategoryCard from "../../components/homeComponents/categoryCard/CategoryCard.jsx";
import NewsSlider from "../../components/homeComponents/newsSlider/NewsSlider.jsx";
import PagingSlider from "../../components/homeComponents/pagingSlider/PagingSlider";
import leftArrowTop from "../../assets/logos/Shape1.png";
import rightArrowTop from "../../assets/logos/Shape2.png";
import leftArrowBottom from "../../assets/logos/Shape3.png";
import rightArrowBottom from "../../assets/logos/Shape4.png";
import SideContent from "../../components/generalComponents/sideContent/SideContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../features/news/newsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);
  const newsStatus = useSelector((state) => state.news.status);
  const [currentEditorialsWidth, setCurrentEditorialsWidth] = useState(false);
  const updateEditorialsWidth = () => {
    if (window.innerWidth <= 600) {
      setCurrentEditorialsWidth(true);
    } else {
      setCurrentEditorialsWidth(false);
    }
  };
  useEffect(() => {
    if (newsStatus === "idle") {
      dispatch(fetchNews());
    }
  }, [newsStatus, dispatch]);
  useEffect(() => {
    updateEditorialsWidth();
    window.addEventListener("resize", updateEditorialsWidth);
    return () => {
      window.removeEventListener("resize", updateEditorialsWidth);
    };
  });
  if (newsStatus === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles["site-content"]}>
      <Header></Header>
      <Banner width={940} height={120} center={"auto"} top={20}></Banner>
      <InfiniteSlider articles={articles}></InfiniteSlider>
      <div className={styles["main-container"]}>
        <main className={styles["main-left-container"]}>
          <CategoryCard
            title={"News"}
            borderColor={"#3677B5"}
            numberOfNews={3}
            articles={articles.slice(0, 3)}
            articleIndex={0}
          ></CategoryCard>
          <CategoryCard
            title={"Sport"}
            borderColor={"#84C14F"}
            numberOfNews={3}
            articles={articles.slice(3, 6)}
            articleIndex={3}
          ></CategoryCard>
          <Banner width={620} height={120}></Banner>
          <CategoryCard
            title={"Bussines"}
            borderColor={"#EE6151"}
            numberOfNews={3}
            articles={articles.slice(6, 9)}
            articleIndex={6}
          ></CategoryCard>
          <Banner width={620} height={120}></Banner>
          <NewsSlider
            slidesToShow={2}
            title={"News Carousel"}
            arrowLeft={leftArrowTop}
            arrowRight={rightArrowTop}
            imageWidth={260}
            imageHeight={150}
            articles={articles.slice(6, 9)}
            articleIndex={6}
          ></NewsSlider>
          <div className={styles["editorials-container"]}>
            <NewsSlider
              slidesToShow={1}
              title={"Editorials"}
              passedWidth={currentEditorialsWidth ? 100 : 46}
              borderColor={"#A99765"}
              arrowLeft={leftArrowBottom}
              arrowRight={rightArrowBottom}
              imageWidth={230}
              imageHeight={150}
              articles={articles.slice(0, 3)}
              articleIndex={0}
            ></NewsSlider>
            <NewsSlider
              slidesToShow={1}
              title={"Local News"}
              passedWidth={currentEditorialsWidth ? 100 : 46}
              borderColor={"#A99765"}
              arrowLeft={leftArrowBottom}
              arrowRight={rightArrowBottom}
              imageWidth={230}
              imageHeight={150}
              articles={articles.slice(3, 6)}
              articleIndex={3}
            ></NewsSlider>
          </div>
        </main>
        <aside className={styles["main-right-container"]}>
          <SideContent articles={articles}></SideContent>
        </aside>
      </div>
      <Banner width={940} height={120} center={"auto"} top={20}></Banner>
      <PagingSlider></PagingSlider>
      <Footer></Footer>
    </div>
  );
};

export default Home;
