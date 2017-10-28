import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import iconCrown from './ico-crown.svg';

import styles from './styles.css';


class User extends Component {
  render() {
    const user = this.props.model;

    console.log('isMentor', user.isMentor);

    return (
      <span className={styles.main}>
        <span className={styles.avatar}>
          <img className={styles.avatarImage} src={`https://avatars.io/facebook/${user.providerId}`} alt=''/>
          {user.isMentor ? null: <img className={styles.avatarIcon} src={iconCrown} alt=''/> }
        </span>
        <span className={styles.name}>{user.displayName}</span>
      </span>
    )
  }
}


export default User;
