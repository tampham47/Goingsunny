import React from 'react';

import iconPdf from './ico-pdf.svg';
import styles from './styles.css';

const PdfDocument = ({ item }) => {
  return (
    <a href={item.url} className={styles.main} target="_blank">
      <div className={styles.wrapIcon}>
        <img className={styles.icon} src={iconPdf} />
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
