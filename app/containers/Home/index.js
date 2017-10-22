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
import DailyTopic from 'components/DailyTopic';

import styles from './styles.css';

// TODO: some functions like the 2 below are called business
// it would like to move to business folder then
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

const getDailyTopic = () => {
  const host = 'https://www.googleapis.com/youtube/v3';
  const apiKey = 'AIzaSyAOtyQmI2QxvuldfAc2e41sbVr0jh312NE';

  const part = 'snippet';
  const query = 'tieng+anh';
  const type = 'video';
  const maxResults = '6';
  const uri = `/search?part=${part}&q=${query}&type=${type}&maxResults=${maxResults}&key=${apiKey}`;

  const url = `${host}${uri}`;
  const params =  { method: 'GET' };

  return fetch(url, params).then(res => {
    return res.json();
  })
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      joinedUsers: [],
      relatedPost: [],
      dailyTopic: [],
    }
  }

  componentDidMount() {
    Promise.all([
      getSession(),
      getRelatedPost(),
      getDailyTopic(),
    ])
    .then(res => {
      this.setState({
        joinedUsers: res[0],
        relatedPost: res[1],
        dailyTopic: res[2].items,
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
          <DailyTopic model={this.state.dailyTopic} />
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
