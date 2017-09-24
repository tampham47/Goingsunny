import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import styles from './styles.css';


class User extends Component {
  render() {
    const user = {};
    
    return (
      <span className={styles.main}>
        <span className={styles.avatar}>
          <img src={`https://avatars.io/facebook/${user.username}`} alt=''/>
        </span>
        <span className={styles.content}>
          <span>Tam Pham</span>
          <span>✡✡✡</span>
        </span>
      </span>
    )
  }
}


export default User;
