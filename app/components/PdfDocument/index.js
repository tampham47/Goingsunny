import React from 'react';
import styles from './styles.css';

const pdfDocument = ({ item }) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <a href={item.link} className={styles.link}>
           <img className={styles.icon} src="/assets/images/pdf.png" />
        </a>
        <div className={styles.name}>{item.name}</div>
      </div>
    </div>
  );
};

export default pdfDocument;
