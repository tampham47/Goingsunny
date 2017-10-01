import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from 'core/Header';
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

  componentWillReceiveProps(next) {
    this.setState({
      users: next.model,
    })
  }

  render() {
    return (
      <section className={styles.main}>
        <Header title="Who will be in next session!" />
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
