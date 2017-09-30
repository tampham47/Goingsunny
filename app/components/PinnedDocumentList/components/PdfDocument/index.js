import React from 'react';
import styles from './styles.css';

const PdfDocument = ({ item }) => {
  return (
    <a href={item.link} className={styles.main}>
      <div className={styles.wrapIcon}>
        <img className={styles.icon} src="/assets/images/pdf.svg" />
      </div>
      <div className={styles.wrapContent}>
        <div className={styles.title}>
          {item.name}
        </div>
        <div className={styles.description}>
          {item.description}
        </div>
        <div className={styles.link}>
          {item.link}
        </div>
      </div>
    </a>
  );
};

export default PdfDocument;
