import React from 'react';
import styles from './styles.css';

const YoutubeDocument = () => <img className={styles.icon} src="/assets/images/youtube.svg"/>;

const OtherDocument = () => <img className={styles.icon} src="/assets/images/link.svg"/>;

const LinkDocument = ({ item }) => {
  return (
    <a href={item.url} className={styles.main} key={item._id}>
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