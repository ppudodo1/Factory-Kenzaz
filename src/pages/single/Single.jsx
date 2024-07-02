import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import styles from "./Single.module.scss";
const Single = () => {
  return (
    <div className={styles['site-content']}>
        <Header></Header>
      <h1>This is a single page</h1>
      <Footer></Footer>
    </div>
  )
}

export default Single
