import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import styles from './styles.css';


class Payment extends Component {
  render() {
    return (
      <section className={styles.main}>
        <h5>Payment</h5>
        <p>Consectetur consectetur elit ex magna. Aute cupidatat qui adipisicing nulla qui. Duis consectetur irure consectetur laborum consectetur ut ad nostrud eiusmod non.</p>
      </section>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Payment)
