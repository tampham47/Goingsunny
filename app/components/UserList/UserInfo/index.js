import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import styles from './styles.css';


const UserInfo = (props) => {
  const user = props.model || {};

  return (
    <span className={styles.main}>
      <span className={styles.avatar}>
        <img src={`https://avatars.io/facebook/${user.providerId}`} alt=''/>
      </span>
      <span className={styles.content}>
        <span>{user.displayName || 'User Name'}</span>
        <span>✡✡✡</span>
      </span>
    </span>
  );
}

export default UserInfo;
