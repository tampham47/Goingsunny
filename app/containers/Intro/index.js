import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import moment from 'moment';
import config from 'config';

import Helmet from 'react-helmet'
import Payment from 'components/Payment';
import RelatedPost from 'components/RelatedPost';
import Timer from 'components/Timer';
import UserList from 'components/UserList';

import styles from './styles.css';


class Intro extends Component {

  static initial() {
    const sessionName = moment().format('YYYYMMDD');
    const url = 'http://api.goingsunny.com/api/v1';
    console.log('intro', sessionName);
    return fetch(`${url}/session?query={"sessionName":"${sessionName}"}`, {
      method: 'GET'
    })
    .then(response => { return response.json(); });
  }

  // static fetchData({ store, params, history }) {
  //   let { id } = params;
  //   return Intro.initial();
  // }

  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      joinedUsers: [],
    }
  }

  componentDidMount() {
    Intro.initial().then(body => {
      console.log('intro body', body);
      this.setState({ joinedUsers: body });
    })
    .catch(err => {
      console.log('intro err', body);
      this.setState({ err });
    });
  }

  render() {
    return (
      <div className={styles.main}>
        <Helmet title="The New World" />

        <div className="container">
          <Timer />
          <UserList />
          <Payment />
        </div>
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Intro)
