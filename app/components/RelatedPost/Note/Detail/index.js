import React from 'react';

import styles from './styles.css';


const Detail = ({ isShow, item, imgSrc }) => {
  if (!isShow) { return null; }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <img className={styles.background} src={imgSrc} />
      </div>
      <div className={styles.description}>
        {item.description}
      </div>
    </div>
  );
}

export default Detail;
