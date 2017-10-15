import React from 'react';

import styles from './styles.css';

const Detail = ({ isShow, item }) => {
  if (!isShow) { return null; }

  return (
    <iframe className={styles.main} src={item.url}/>
  );
}

export default Detail;
