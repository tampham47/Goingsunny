import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from 'core/Header';
import Modal from 'core/Modal';

import User from './UserInfo';
import MatchedGroup from './MatchedGroup';
import styles from './styles.css';


class UserList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: props.model || [],
    }

    this.newCommingUser = this.newCommingUser.bind(this);
  }

  newCommingUser(e) {
    const users = this.state.users;
    users.push(e.detail);

    this.setState({ users });
  }

  componentDidMount() {
    // this will fired when people join the class
    window.addEventListener('SYSTEM_CLASS_DATA', this.newCommingUser);
  }

  componentWillUnmount() {
    window.removeEventListener('SYSTEM_CLASS_DATA', this.newCommingUser);
  }

  componentWillReceiveProps(next) {
    this.setState({
      users: next.model,
    })
  }

  render() {
    return (
      <section className={styles.main}>
        <Header title="Users have joined next session" />
        <div className={styles.userList}>
          {this.state.users.map(function(item, index) {
            return (
              <div key={index} className={styles.userItem}>
                <User model={item}/>
              </div>
            )
          })}
        </div>

        <Modal isShow>
          <MatchedGroup />
        </Modal>
      </section>
    )
  }
}

export default UserList;
