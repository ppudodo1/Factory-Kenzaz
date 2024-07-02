import React from 'react'
import styles from "./CategoryCard.module.scss"
import backgroundImage from "../../assets/logos/Layer59.png";
const CategoryCard = ({type}) => {
  return (
    
    <div>
        {type === "News" &&(
            <div className={`${styles["news-card"]} ${styles["card-container"]}`}>
               <div className={styles["outer-div-card"]}>
                <div className={styles["card-text"]}>
                        <h1>News</h1>
                        <a href="">See all</a>
                    </div>
                    <div className={styles["small-card-container"]}>
                        <div className={styles["small-card"]}>
                            <img src={backgroundImage} alt="" />
                            <p>August 26, 2024</p>
                            <p>For Obama, MLK's shadow looms large ahead of speech</p>
                        </div>
                        <div className={styles["small-card"]}>
                            <img src={backgroundImage} alt="" />
                            <p>August 26, 2024</p>
                            <p>NASA releases portrait of a planet waving at Saturn</p>
                        </div>
                        <div className={styles["small-card"]}>
                            <img src={backgroundImage} alt="" />
                            <p>August 26, 2024</p>
                            <p>Patriotsvv make cuts ... and Tim Tebow survives (so far)</p>
                        </div>
                    </div>
               </div>
               
            </div>
        )}
        {type === "Sport" &&(

                <div className={`${styles["sports-card"]} ${styles["card-container"]}`}>
                    <div className={styles["outer-div-card"]}>
                <div className={styles["card-text"]}>
                        <h1>Sport</h1>
                        <a href="">See all</a>
                    </div>
                    <div className={styles["small-card-container"]}>
                        <div className={styles["small-card"]}>
                            <img src={backgroundImage} alt="" />
                            <p>August 26, 2024</p>
                            <p>For Obama, MLK's shadow looms large ahead of speech</p>
                        </div>
                        <div className={styles["small-card"]}>
                            <img src={backgroundImage} alt="" />
                            <p>August 26, 2024</p>
                            <p>NASA releases portrait of a planet waving at Saturn</p>
                        </div>
                        <div className={styles["small-card"]}>
                            <img src={backgroundImage} alt="" />
                            <p>August 26, 2024</p>
                            <p>Patriotsvv make cuts ... and Tim Tebow survives (so far)</p>
                        </div>
                    </div>
               </div>
                </div>
        )}
        {type === "Bussines" &&(

        <div className={`${styles["bussines-card"]} ${styles["card-container"]}`}>
            <div className={styles["outer-div-card"]}>
                <div className={styles["card-text"]}>
                        <h1>Bussines</h1>
                        <a href="">See all</a>
                </div>
                <div className={styles["small-card-container"]}>
                    <div className={styles["small-card"]}>
                        <img src={backgroundImage} alt="" />
                        <p>August 26, 2024</p>
                        <p>For Obama, MLK's shadow looms large ahead of speech</p>
                    </div>
                    <div className={styles["small-card"]}>
                        <img src={backgroundImage} alt="" />
                        <p>August 26, 2024</p>
                        <p>NASA releases portrait of a planet waving at Saturn</p>
                    </div>
                    <div className={styles["small-card"]}>
                        <img src={backgroundImage} alt="" />
                        <p>August 26, 2024</p>
                        <p>Patriotsvv make cuts ... and Tim Tebow survives (so far)</p>
                    </div>
                </div>
            </div>
        </div>
)}
    </div>
  )
}

export default CategoryCard
