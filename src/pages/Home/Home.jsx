import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Home.module.scss";
import Banner from "../../components/banner/Banner";
import InfiniteSlider from "../../components/slider/InfiniteSlider";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import Sidebar from "../../components/sidebar/Sidebar";
import Social from "../../components/social/Social";
import Video from "../../components/video/Video";
import Facebook from "../../components/facebook/Facebook";
import NewsSlider from "../../components/newsSlider/NewsSlider";
import PagingSlider from "../../components/pagingSlider/PagingSlider";
import leftArrowTop from "../../assets/logos/Shape1.png";
import rightArrowTop from "../../assets/logos/Shape2.png";
import leftArrowBottom from "../../assets/logos/Shape3.png";
import rightArrowBottom from "../../assets/logos/Shape4.png";
const Home = () => {
  return (
    <section className={styles["site-content"]}>
      <Header></Header>
      <Banner width={940} height={120} center={"auto"} top={20}></Banner>
      <InfiniteSlider></InfiniteSlider>
      <section className={styles["big-bottom-container"]}>
        <article className={styles["big-left-container"]}>
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
        </article>
        <aside className={styles["big-right-container"]}>
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
      <Banner width={940} height={120} center={"auto"} top={20}></Banner>
      <PagingSlider></PagingSlider>
      <Footer></Footer>
    </section>
  );
};

export default Home;
