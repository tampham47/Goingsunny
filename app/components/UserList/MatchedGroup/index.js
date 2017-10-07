import React, { Component } from 'react';

import UserInfo from '../UserInfo';

import matched from './matched.svg';
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
        <div className={styles.divider}>
          <img src={matched} alt="matched" />
        </div>
        <UserInfo />
      </div>
      <div className={styles.control}>
        <button className={styles.button}>GO</button>
      </div>
    </div>
  );
}

export default MatchedGroup;
