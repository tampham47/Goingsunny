import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import styles from './styles.scss';


class Timer extends Component {
  render() {
    return (
      <div className={styles.main}>Timer</div>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Timer)
