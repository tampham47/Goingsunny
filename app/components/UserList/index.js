import React, { Component } from 'react';
import { Link } from 'react-router';

import User from './UserInfo';
import styles from './styles.css';


class UserList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clients: [],
    }
  }

  componentDidMount() {
    window.addEventListener('goingsunny', function(e) {
      console.log('goingsunny', e.detail);
      this.setState({
        clients: e.detail.message.clients
      });
    }.bind(this));
  }

  render() {
    return (
      <section className={styles.main}>
        <h5>User List</h5>
        <div className={styles.userList}>
          {this.state.clients.map(function(i, index) {
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
