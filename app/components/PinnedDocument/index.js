import React from 'react';
import styles from './styles.css';

import Header from 'core/Header';
import PdfDocument from './PdfDocument';
import LinkDocument from './LinkDocument';

const PdfType = item => {
  return (
    <li className={styles.item}>
      <PdfDocument item={item} />
    </li>
  );
};

const LinkType = item => {
  return (
    <li className={styles.item}>
      <LinkDocument item={item} />
    </li>
  );
};

const PinnedDocumenList = ({ model }) => {
  return (
    <div className={styles.main}>
      <Header title="Documents" />
      <ul className={styles.content}>
        {model.map(item => {
          return item.type === 'pdf' ? PdfType(item) : LinkType(item);
        })}
      </ul>
    </div>
  );
};

export default PinnedDocumenList;

