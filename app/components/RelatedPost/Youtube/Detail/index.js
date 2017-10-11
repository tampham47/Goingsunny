import React from 'react';

import styles from './styles.css';

const Detail = ({ isShow, item }) => isShow ? <iframe className={styles.main} src={item.url}/> : null;

export default Detail;
