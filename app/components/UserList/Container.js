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
      joinedUsers: props.model || [],
    }

    this.newCommingUser = this.newCommingUser.bind(this);
  }

  newCommingUser(e) {
    const joinedUsers = this.state.joinedUsers;
    joinedUsers.push(e.detail);

    this.setState({ joinedUsers });
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
      joinedUsers: next.model,
    })
  }

  render() {
    return (
      <section className={styles.main}>
        <Header title="joinedUsers have joined next session" />
        <div className={styles.userList}>
          {this.state.joinedUsers.map(function(item, index) {
            return (
              <div key={index} className={styles.userItem}>
                <User model={item}/>
              </div>
            )
          })}
        </div>

        <Modal dismiss={() => null}>
          <MatchedGroup />
        </Modal>
      </section>
    )
  }
}

export default UserList;
