import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Home.module.scss";
import Banner from "../../components/banner/Banner";
import InfiniteSlider from "../../components/slider/InfiniteSlider";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import NewsSlider from "../../components/newsSlider/NewsSlider";
import PagingSlider from "../../components/pagingSlider/PagingSlider";
import leftArrowTop from "../../assets/logos/Shape1.png";
import rightArrowTop from "../../assets/logos/Shape2.png";
import leftArrowBottom from "../../assets/logos/Shape3.png";
import rightArrowBottom from "../../assets/logos/Shape4.png";
import SideContent from "../../components/sideContent/SideContent";
const Home = () => {
  return (
    <div className={styles["site-content"]}>
      <Header></Header>
      <Banner width={940} height={120} center={"auto"} top={20}></Banner>
      <InfiniteSlider></InfiniteSlider>
      <div className={styles["main-container"]}>
        <main className={styles["main-left-container"]}>
          <CategoryCard
            title={"News"}
            borderColor={"#3677B5"}
            numberOfNews={3}
          ></CategoryCard>
          <CategoryCard
            title={"Sport"}
            borderColor={"#84C14F"}
            numberOfNews={3}
          ></CategoryCard>
          <Banner width={620} height={120}></Banner>
          <CategoryCard
            title={"Bussines"}
            borderColor={"#EE6151"}
            numberOfNews={3}
          ></CategoryCard>
          <Banner width={620} height={120}></Banner>
          <NewsSlider
            slidesToShow={2}
            title={"News Carousel"}
            arrowLeft={leftArrowTop}
            arrowRight={rightArrowTop}
            imageWidth={260}
            imageHeight={150}
          ></NewsSlider>
          <div className={styles["editorials-container"]}>
            <NewsSlider
              slidesToShow={1}
              title={"Editorials"}
              passedWidth={46}
              borderColor={"#A99765"}
              arrowLeft={leftArrowBottom}
              arrowRight={rightArrowBottom}
              imageWidth={230}
              imageHeight={150}
            ></NewsSlider>
            <NewsSlider
              slidesToShow={1}
              title={"Local News"}
              passedWidth={46}
              borderColor={"#A99765"}
              arrowLeft={leftArrowBottom}
              arrowRight={rightArrowBottom}
              imageWidth={230}
              imageHeight={150}
            ></NewsSlider>
          </div>
        </main>
        <aside className={styles["main-right-container"]}>
          <SideContent></SideContent>
        </aside>
      </div>
      <Banner width={940} height={120} center={"auto"} top={20}></Banner>
      <PagingSlider></PagingSlider>
      <Footer></Footer>
    </div>
  );
};

export default Home;
