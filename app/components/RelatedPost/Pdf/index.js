import React from 'react';

import config  from 'config';

import iconPdf from './ico-pdf.svg';
import styles from './styles.css';

const getImage = (item) => {
  if(item.cover) {
    return `${config.API_IMAGE_URL}/${item.cover.filename}`;
  }
  return require('../default.png');
}

const PdfDocument = ({ item }) => {
  console.log('kq', getImage(item));
  return (
    <a href={item.url} className={styles.main} target="_blank">
      <div className={styles.header}>
        <img className={styles.background} src={getImage(item)} />
        <img className={styles.icon} src={iconPdf} />
      </div>
      <div className={styles.title}>
        {item.title}
      </div>
    </a>
  );
};

export default PdfDocument;
