import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logos/VectorSmartObject1.png'; 
import searchLogo from '../../assets/logos/searchIcon.png'; 
import { Link } from 'react-router-dom';
const buttonColors = {
  news: '#299EC3',
  business: '#EE6151',
  sport: '#84C14F',
  life: '#5DCFF3',
  tech: '#FCC44D',
  travel: '#A99765',
};

const Header = () => {
  return (
    <div className={styles['header-outside-container']}>
      <div className={styles['header-inside-top']}>
        <div className={styles['header-inside-top-container']}>
            <div className={styles['logo-container']}>
              <div className={styles['inner-logo']}>
                <Link to={'/'}><img src={logo} alt="" className={styles['logo-image']} /></Link>
              </div>
                <Link to={'/'} className={styles['header-link']}><h3 className={styles['header-title']}>Kenzaz</h3></Link>
            </div>
            <div className={styles['top-link-container']}>
              <a href="" className={styles['top-link']}>Media</a>
              <a href="" className={styles['top-link']}>Marketing</a>
              <a href="" className={styles['top-link']}>Contact</a>
              <div className={styles['search-icon']}>
                <img src={searchLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['header-inside-bottom']}>
          <div className={styles['header-inside-bottom-container']}>
            {Object.entries(buttonColors).map(([key, color]) => (
              <Link
                key={key}
                to={`/category`}
                className={styles['button-link']}
                style={{
                  borderBottomColor: color,
                  '--hover-color': color,
                }}
              >
                {key.toUpperCase()}
              </Link>
          ))}
          </div>
        </div>
         
    </div>
  )
}

export default Header;
