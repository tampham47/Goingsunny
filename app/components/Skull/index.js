import React, { Component } from 'react';

import skull from './skull.svg';
import styles from './styles.css';


const Skull = (props) => {
  return (
    <section className={styles.main}>
      <img src={skull} alt="skull" />
    </section>
  )
}

export default Skull;
