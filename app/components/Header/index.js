import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import styles from './styles.scss';


class Intro extends Component {
  render() {
    return (
      <header className={styles.main}>
        <div className={styles.left}>Left</div>
        <div className={styles.right}>Right</div>
        <div className={styles.center}>
          GOING SUNNY
        </div>
      </header>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Intro)
