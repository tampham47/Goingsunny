import React from 'react';

import iconYoutube from './ico-youtube.svg';
import iconLink from './ico-link.svg';
import styles from './styles.css';


const YoutubeDocument = () => {
  return (
    <img className={styles.icon} src={iconYoutube} />
  );
}

const OtherDocument = () => {
  return (
    <img className={styles.icon} src={iconLink} />
  );
}

const LinkDocument = ({ item }) => {
  return (
    <a href={item.url} className={styles.main} key={item._id} target="_blank">
      <div className={styles.wrapIcon}>
        {item.type === 'youtube' ? YoutubeDocument() : OtherDocument()}
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

export default LinkDocument;
