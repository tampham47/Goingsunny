import React from 'react';

import background from '../../../assets/mstile-310x310.png';
import iconPdf from './ico-pdf.svg';
import styles from './styles.css';

const PdfDocument = ({ item }) => {
  return (
    <a href={item.url} className={styles.main} target="_blank">
      <div className={styles.header}>
        <img className={styles.background} src={background} />
        <img className={styles.icon} src={iconPdf} />
      </div>
      <div className={styles.title}>
        {item.title}
      </div>
    </a>
  );
};

export default PdfDocument;
