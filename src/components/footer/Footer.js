import React from 'react';
import styles from '../styles/pagesCSS/Footer.module.css'; // CSS dosyasını içe aktar

const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      <img className={styles.logo} src='/okinar.svg' alt='logo'  />
      
    </div>
  );
}

export default Footer;