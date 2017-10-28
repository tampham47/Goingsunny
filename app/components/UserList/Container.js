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
      user: props.user,
      user2: null,
      joinedList: props.model || [],
      isMatched: false,
      room: '',
    }

    this.userEntered = this.userEntered.bind(this);
    this.matched = this.matched.bind(this);
    this.dismiss = this.dismiss.bind(this);
  }

  userEntered(e) {
    const joinedList = this.state.joinedList;
    joinedList.push(e.detail);

    this.setState({ joinedList });
  }

  matched(e) {
    const data = e.detail;
    this.setState({
      isMatched: true,
      room: data.room,
      user2: data.matched,
      joinedList: [],
    });
  }

  dismiss() {
    this.setState({ isMatched: false });
  }

  componentDidMount() {
    // this will fired when people join the class
    window.addEventListener('SYSTEM_CLASS_DATA', this.userEntered);
    const user = this.state.user;
    if (user._id) {
      window.addEventListener(`SYSTEM_${user._id}`, this.matched);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('SYSTEM_CLASS_DATA', this.userEntered);
    const user = this.state.user;
    if (user.id) {
      window.removeEventListener(`SYSTEM_${user._id}`, this.matched);
    }
  }

  componentWillReceiveProps(next) {
    if (this.props.model !== next.model) {
      this.setState({ joinedList: next.model });
    }

    if (this.props.user !== next.user) {
      const user = next.user;
      this.setState({ user });
      if (user._id) {
        window.addEventListener(`SYSTEM_${user._id}`, this.matched);
      }
    }
  }

  render() {
    return (
      <section className={styles.main}>
        <Header title="Bạn bè tham gia" />
        <div className={styles.userList}>
          {this.state.joinedList.map(function(item, index) {
            return (
              <div key={index} className={styles.userItem}>
                <User model={item}/>
              </div>
            )
          })}
          {!this.state.joinedList.length && (
            <p>Chưa có ai, hãy là người đầu tiên tham gia!</p>
          )}
        </div>

        {this.state.isMatched && (
        <Modal isShow={this.state.isMatched} dismiss={this.dismiss}>
          <MatchedGroup
            user1={this.state.user}
            user2={this.state.user2}
            room={this.state.room}
          />
        </Modal>
        )}
      </section>
    )
  }
}

export default UserList;
