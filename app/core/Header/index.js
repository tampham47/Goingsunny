import React from 'react';

import icon from './i-docs.svg';
import styles from './styles.css';


const Header = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.wraper}>
        <img className={styles.icon} src={icon} />
      </div>
      <div className={styles.title}>
        {props.title}
      </div>
    </div>
  );
};

export default Header;
