import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';
import Helmet from 'react-helmet';
import request from 'middleware/request';

import Payment from 'components/Payment';
import Herobanner from 'components/Herobanner';
import UserList from 'components/UserList';
import RelatedPost from 'components/RelatedPost';

import styles from './styles.css';

const getSession = () => {
  const sessionName = moment().format('YYYYMMDD');
  const query = JSON.stringify({
    sessionName,
    roomName: '',
  });
  return request(`/session?populate=_user&query=${query}`, { method: 'GET' })
  .then(models => {
    return models.map(i => i._user);
  });
}
const getRelatedPost = () => {
  return request('/pinedPost?query={"state": "public"}', { method: 'GET' });
}


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      joinedUsers: [],
      relatedPost: []
    }
  }

  componentDidMount() {
    Promise.all([
      getSession(),
      getRelatedPost(),
    ])
    .then(res => {
      this.setState({
        joinedUsers: res[0],
        relatedPost: res[1],
      });
    })
    .catch(err => {
      this.setState({ err });
    });
  }

  render() {
    return (
      <div className={styles.main}>
        <Helmet title="An online English club - Goingsunny" />
        <Herobanner />

        <div className="container">
          <UserList model={this.state.joinedUsers} />
          <RelatedPost model={this.state.relatedPost} />
          <Payment />
        </div>
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Home);
