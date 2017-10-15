import React from 'react';

import iconLink from './ico-link.svg';
import styles from './styles.css';

const LinkDocument = ({ item }) => (
  <a href={item.url} className={styles.main} target="_blank">
    <div className={styles.wrapIcon}>
      <img className={styles.icon} src={iconLink} />
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
)

export default LinkDocument;
