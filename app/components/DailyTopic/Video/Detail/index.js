import React from 'react';

import Placeholder from 'core/Placeholder';
import styles from './styles.css';


const Detail = ({ isShow, item }) => {
  console.log('item.id.videoId', item.id.videoId);
  const urlDetail = `https://www.youtube.com/embed/${item.id.videoId}`

  if (!isShow) { return null; }

  return (
    <div className={styles.main}>
      <Placeholder />
      <iframe className={styles.frame} src={urlDetail}/>
    </div>
  );
}

export default Detail;
