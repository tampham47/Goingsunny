import React from 'react';
import styles from './styles.css';

const youtubeDocument = () => <img className={styles.icon} src="/assets/images/youtube.png"/>;

const otherDocument = image => <img className={styles.icon} src={image}/>;

const linkDocument = ({ item }) => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <a href={item.link} className={styles.link}>
          {item.type === 'youtube' ? youtubeDocument() : otherDocument(item.image)}
        </a>
        <div className={styles.name}>{item.name}</div>
      </div>
    </div>
  );
};

export default linkDocument;
