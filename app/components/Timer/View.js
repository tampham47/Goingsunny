import React, { Component } from 'react';

import CountDown from 'components/CountDown';
import styles from './styles.css';


const TimerView = (props) => {
  const { showTimer, user, today } = props;

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

      {user._id ? (
        <button className="button-primary">Join next session</button>
      ) : (
        <button className="button-primary">Login via Facebook</button>
      )}

      <div className={styles.quote}>
        <p>You don't have to be great to start</p>
        <p>but you have to start to be great!</p>
      </div>
    </section>
  );
};


export default TimerView;
