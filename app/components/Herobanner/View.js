import T from 'prop-types';
import React, { Component } from 'react';

import CountDown from 'components/CountDown';

import wave from './wave.svg';
import styles from './styles.css';


const HeroView = (props) => {
  const { showTimer, user, today, joinNextSession } = props;

  return (
    <section className={styles.main}>
      <div className={styles.background}>
        <img src={wave} alt="pirate wave" />
      </div>

      <div className={styles.center}>
        <div className={styles.timerWrapper}>
          {showTimer ? (
            <div className={styles.timer}>
              <CountDown date={today.toDate()} hideDays />
            </div>
          ) : (
            <p>
              Hãy nhấn vào nút bên dưới<br/>
              Để có cơ hội gặp gỡ bạn mới mỗi 5 phút.
            </p>
          )}
        </div>

        {user._id ? (
          <button className={`button-primary ${styles.button}`}
            onClick={joinNextSession}
          >
            Tham gia nói chuyện
          </button>
        ) : (
          <p>Hãy đăng nhập để bắt đầu!</p>
        )}

        <div className={styles.quote}>
          <p>Goingsunny hoạt động từ 20h - 22h hằng ngày.</p>
        </div>
      </div>
    </section>
  );
};

HeroView.propTypes = {
  joinNextSession: T.func.isRequired,
}

export default HeroView;
