import React from 'react';
import styles from './styles.css';
import PdfDocument from './components/PdfDocument';
import LinkDocument from './components/LinkDocument';
import dummyData from './dummyData';

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

const PinnedDocumenList = () => {
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
      <section>
        <ul className={styles.content}>
          {dummyData.map(item => {
            return item.type === 'pdf' ? PdfType(item) : LinkType(item);
          })}
        </ul>
      </section>
    </div>
  );
};

export default PinnedDocumenList;

