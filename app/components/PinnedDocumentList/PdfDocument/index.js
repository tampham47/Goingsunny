import React from 'react';
import styles from './styles.css';

const PdfDocument = ({ item }) => {
  return (
    <a href={item.url} className={styles.main} key={item._id}>
      <div className={styles.wrapIcon}>
        <img className={styles.icon} src="/assets/images/pdf.svg" />
      </div>
      <div className={styles.wrapContent}>
        <div className={styles.title}>
          {item.title}
        </div>
        <div className={styles.description}>
          {item.description}
        </div>
        <div className={styles.link}>
          {item.url}
        </div>
      </div>
    </a>
  );
};

export default PdfDocument;
