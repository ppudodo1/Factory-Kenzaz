import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import styles from "./Category.module.scss"
const Category = () => {
  return (
    <div className={styles['site-content']}>
        <Header></Header>
      <h1>This is a category page.</h1>
      <Footer></Footer>
    </div>
  )
}

export default Category
