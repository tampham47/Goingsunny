import React, { Component } from 'react';

import UserInfo from '../UserInfo';
import styles from './styles.css';


const MatchedGroup = (props) => {
  const modelList = props.modelList;

  return (
    <div className={styles.main}>
      <h5 className={styles.message}>
        Let have a great talk with your friend!
      </h5>
      <div className={styles.list}>
        <UserInfo />
        <UserInfo />
      </div>
      <div className={styles.control}>
        <button className={styles.button}>GO</button>
      </div>
    </div>
  );
}

export default MatchedGroup;
