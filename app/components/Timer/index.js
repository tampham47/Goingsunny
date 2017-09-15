import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import moment from 'moment';

import CountDown from 'components/CountDown';

import styles from './styles.css';


class Timer extends Component {
  render() {
    const today = moment().add('hours', 1);

    return (
      <section className={styles.main}>
        <div className={styles.timer}>
          <CountDown date={today.toDate()} hideDays />
        </div>
        <button className="button-primary">Join next session</button>
        <div className={styles.quote}>
          <p>You don't have to be great to start</p>
          <p>but you have to start to be great!</p>
        </div>
      </section>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Timer)