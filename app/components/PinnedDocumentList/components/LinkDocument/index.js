import React from 'react';
import styles from './styles.css';

const YoutubeDocument = () => <img className={styles.icon} src="/assets/images/youtube.svg"/>;

const OtherDocument = () => <img className={styles.icon} src="/assets/images/link.svg"/>;

const LinkDocument = ({ item }) => {
  return (
    <a href={item.link} className={styles.main}>
      <div className={styles.wrapIcon}>
        {item.type === 'youtube' ? YoutubeDocument() : OtherDocument()}
      </div>
      <div className={styles.wrapContent}>
        <div className={styles.title}>
          {item.name}
        </div>
        <div className={styles.description}>
          {item.description}
        </div>
        <div className={styles.link}>
          {item.link}
        </div>
      </div>
    </a>
  );
};

export default LinkDocument;
