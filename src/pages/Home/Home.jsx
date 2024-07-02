import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import styles from "./Home.module.scss";
import Banner from '../../components/banner/Banner';
import InfiniteSlider from '../../components/slider/InfiniteSlider';
const Home = () => {
  return (
    <div className = {styles['site-content']}>
        <Header></Header>
        <Banner></Banner>
        
        <div className={styles['spacing']}>
          
        </div>

      
      <Footer></Footer>
    </div>
  )
}

export default Home
