import React from 'react';
import styles from './styles.css';
import PdfDocument from '../PdfDocument';
import LinkDocument from '../LinkDocument';
import dummyData from './dummyData';

const pdfType = item => {
  return (
    <li className={styles.item}>
      <PdfDocument item={item} />
    </li>
  );
};

const linkType = item => {
  return (
    <li className={styles.item}>
      <LinkDocument item={item} />
    </li>
  );
};

const pinnedDocumenList = () => {
  return (
    <ul className={styles.main}>
      {dummyData.map(item => {
        return item.type === 'pdf' ? pdfType(item) : linkType(item);
      })}
    </ul>
  );
};

export default pinnedDocumenList;
