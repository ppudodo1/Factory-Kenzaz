import React from 'react'
import styles from "./Banner.module.scss";
const Banner = ({width,height,center,top,bottom}) => {
  return (
    <div className={styles['banner-container']} style={{ height: `${height}px`, width: `${width}px`, margin: `0 ${center}`,marginTop:  `${top}px`,marginBottom:  `${bottom}px` }}>

        
    </div>
  )
}

export default Banner
