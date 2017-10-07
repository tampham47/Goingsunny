import React from 'react';
import styles from './styles.css';

import Header from 'core/Header';
import Pdf from './Pdf';
import Link from './Link';


const PinnedDocuments = ({ model }) => {
  return (
    <section className={styles.main}>
      <Header title="Documents" />
      <ul className={styles.content}>
        {model.map((item, index) => {
          const Elm = item.type === 'pdf' ? Pdf : Link;
          return (
            <li key={index} className={styles.item}>
              <Elm item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PinnedDocuments;

