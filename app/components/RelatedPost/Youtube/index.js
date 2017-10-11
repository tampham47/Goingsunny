import React, { Component }  from 'react';

import iconYoutube from './ico-youtube.svg';
import styles from './styles.css';

const YoutubeDocument = ({ item, handleOnClick }) => (
  <div className={styles.main} key={item._id} onClick={handleOnClick}>
    <div className={styles.wrapIcon}>
      <img className={styles.icon} src={iconYoutube} />
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
  </div>
);

export default YoutubeDocument;
