import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import iconCrown from './royal.svg';
import styles from './styles.css';


const UserInfo = (props) => {
  const user = props.model || {};

  return (
    <span className={styles.main}>
      <span className={styles.avatar}>
        <img
          className={styles.avatarImage}
          src={`https://avatars.io/facebook/${user.providerId}`}
          alt=''
        />
        {user.isMentor ? <img className={styles.avatarIcon} src={iconCrown} alt=''/> : null }
      </span>
      <span className={styles.content}>
        <span>{user.displayName || 'User Name'}</span>
        <span>✡✡✡</span>
      </span>
    </span>
  );
}

export default UserInfo;
