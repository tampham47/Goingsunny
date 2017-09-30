import React, { Component } from 'react';
import { Link } from 'react-router';

import User from './UserInfo';
import styles from './styles.css';


class UserList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: props.model || [],
    }
  }

  componentDidMount() {
    // this will fired when people join the class
    window.addEventListener('SYSTEM_CLASS_DATA', function(e) {
      console.log('SYSTEM_CLASS_DATA', e.detail);
      const users = this.state.users;
      users.push(e.detail);
      this.setState({ users });
    }.bind(this));
  }

  render() {
    return (
      <section className={styles.main}>
        <h5>User List</h5>
        <div className={styles.userList}>
          {this.state.users.map(function(item, index) {
            return (
              <div key={index} className={styles.userItem}>
                <User model={item}/>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default UserList;
