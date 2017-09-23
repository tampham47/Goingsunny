import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import Payment from 'components/Payment';
import RelatedPost from 'components/RelatedPost';
import Timer from 'components/Timer';
import UserList from 'components/UserList';
import FacebookLogin from 'components/FacebookLogin';

import styles from './styles.css';


class Intro extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Helmet title="Intro" />

        <div className="container">
          <Timer />
          <UserList />
          <FacebookLogin />
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
