import React from 'react';

import Placeholder from 'core/Placeholder';
import styles from './styles.css';


const Detail = ({ isShow, item }) => {
  if (!isShow) { return null; }

  return (
    <div className={styles.main}>
      <Placeholder />
      <iframe className={styles.frame} src={item.url}/>
    </div>
  );
}

export default Detail;
