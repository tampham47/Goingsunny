import React, { Component } from 'react';
import { Link } from 'react-router';

import User from './UserInfo';
import styles from './styles.css';


class UserList extends Component {
  render() {
    return (
      <section className={styles.main}>
        <h5>User List</h5>
        <div className={styles.userList}>
          {[1,2,3,4,5,6,7,8,9,10].map(function(i, index) {
            return (
              <div key={index} className={styles.userItem}>
                <User />
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default UserList;
