import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import styles from './styles.css';


class User extends Component {
  render() {
    return (
      <span className={styles.main}>
        <span className={styles.avatar}>
          <img src='https://avatars.io/facebook/wikiblack' alt=''/>
        </span>
        <span className={styles.name}>Tam Pham</span>
      </span>
    )
  }
}


export default User;
