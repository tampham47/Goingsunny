import React, { Component } from 'react';

import CountDown from 'components/CountDown';
import styles from './styles.css';


const HeroView = (props) => {
  const { showTimer, user, today } = props;

  return (
    <section className={styles.main}>
      <div className={styles.center}>
        <div className={styles.timerWrapper}>
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
        </div>

        {user._id ? (
          <button className={`button-primary ${styles.button}`}>
            Join next session
          </button>
        ) : (
          <button className={`button-primary ${styles.button}`}>
            Login via Facebook
          </button>
        )}

        <div className={styles.quote}>
          <p>You don't have to be great to start</p>
          <p>but you have to start to be great!</p>
        </div>
      </div>
    </section>
  );
};


export default HeroView;
