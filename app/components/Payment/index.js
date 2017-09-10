import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import styles from './styles.scss';


class Payment extends Component {
  render() {
    return (
      <section className={styles.main}>Payment</section>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Payment)
