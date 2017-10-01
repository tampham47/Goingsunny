import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import moment from 'moment';

import CountDown from 'components/CountDown';

import styles from './styles.css';


class Timer extends Component {
  render() {
    let showTimer = false;
    const today = moment().utcOffset(7);

    if (today.get('hour') < 20) {
      today.set({ hour: 20, minute: 0, second: 0, millisecond: 0 });
      showTimer = true;
    }

    return (
      <section className={styles.main}>
        {showTimer ? (
        <div className={styles.timer}>
          <CountDown date={today.toDate()} hideDays />
        </div>
        ) : (
        <p>
          Are you ready, the party time is started, you are not too late.<br/>
          Just click on below button and wait maximun to 2 mins.<br/>
          The system will lead you to another one to talk.
        </p>
        )}
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
