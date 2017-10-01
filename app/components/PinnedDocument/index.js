import React from 'react';
import styles from './styles.css';
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
      <div className={styles.header}>
        <div className={styles.wrapIcon}>
          <img className={styles.icon} src="/assets/images/documents.svg"/>
        </div>
        <div className={styles.title}>
          Documents
        </div>
      </div>
      <ul className={styles.content}>
        {model.map(item => {
          return item.type === 'pdf' ? PdfType(item) : LinkType(item);
        })}
      </ul>
    </div>
  );
};

export default PinnedDocumenList;

