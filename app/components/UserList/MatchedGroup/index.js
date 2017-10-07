import React, { Component } from 'react';

import UserInfo from '../UserInfo';

import matched from './matched.svg';
import styles from './styles.css';


const MatchedGroup = (props) => {
  const { user1, user2, room } = props;
  console.log('MatchedGroup', user1, user2);

  return (
    <div className={styles.main}>
      <h5 className={styles.message}>
        Let have a great talk with your friend!
      </h5>
      <div className={styles.list}>
        <UserInfo model={user1} />
        <div className={styles.divider}>
          <img src={matched} alt="matched" />
        </div>
        <UserInfo model={user2} />
      </div>
      <div className={styles.control}>
        <button className={styles.button}>GO</button>
      </div>
    </div>
  );
}

export default MatchedGroup;
