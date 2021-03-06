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
        Be nice, stay in conversation at least 15 minutes!
      </h5>
      <div className={styles.list}>
        <UserInfo model={user1} />
        <div className={styles.divider}>
          <img src={matched} alt="matched" />
        </div>
        <UserInfo model={user2} />
      </div>
      <div className={styles.control}>
        <a className={styles.button} target="_blank"
          href={`https://appear.in/${room}`}>GO</a>
      </div>
    </div>
  );
}

export default MatchedGroup;
