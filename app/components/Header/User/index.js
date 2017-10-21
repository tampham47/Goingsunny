import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import styles from './styles.css';


class User extends Component {
  render() {
    const user = this.props.model;

    return (
      <span className={styles.main}>
        <span className={styles.avatar}>
          <img src={`https://avatars.io/facebook/${user.providerId}`} alt=''/>
        </span>
        <span className={styles.name}>{user.displayName}</span>
      </span>
    )
  }
}


export default User;
