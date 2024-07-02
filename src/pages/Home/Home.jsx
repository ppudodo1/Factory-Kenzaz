import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import styles from "./Home.module.scss";
import Banner from '../../components/banner/Banner';
import InfiniteSlider from '../../components/slider/InfiniteSlider';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import Sidebar from '../../components/sidebar/Sidebar';
import Social from '../../components/social/Social';
import Video from '../../components/video/Video';
import Facebook from '../../components/facebook/Facebook';
import NewsSlider from '../../components/newsSlider/NewsSlider';
import Editorials from '../../components/editorials/Editorials';
import PagingSlider from '../../components/pagingSlider/PagingSlider';

const Home = () => {
  return (
    <div className = {styles['site-content']}>
        <Header></Header>
        <Banner width={940} height={120} center={"auto"} top={20}></Banner>
        <InfiniteSlider></InfiniteSlider>
        <div className={styles['big-bottom-container']}>
          <div className={styles['big-left-container']}>
            <CategoryCard type={"News"}></CategoryCard>
            <CategoryCard type={"Sport"}></CategoryCard>
            <Banner width={620} height={120}></Banner>
            <CategoryCard type={"Bussines"}></CategoryCard>
            <Banner width={620} height={120}></Banner>
            <NewsSlider></NewsSlider>
            <div className={styles["editorials-container"]}>
              <Editorials title={"Editorials"}></Editorials>
              <Editorials title={"Local News"}></Editorials>
            </div>
          
          </div>
         
          <div className={styles['big-right-container']}>
            <Sidebar></Sidebar>
            <Social></Social>
            <Video></Video>
            <div className={styles['banner-container']}>
              <Banner width={128} height={128} top={0}></Banner>
              <Banner width={128} height={128} top={0}></Banner>
            </div>
            <Facebook></Facebook>
          </div>
          
        </div>
        <Banner width={940} height={120} center={"auto"} top={20}></Banner>
       
        <div className={styles['spacing']}></div>
      
        <Footer></Footer>
    </div>
  )
}

export default Home
