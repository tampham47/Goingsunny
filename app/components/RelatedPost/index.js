import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import styles from './styles.css';


class RelatedPost extends Component {
  render() {
    return (
      <section className={styles.main}>
        <h5>Related Post</h5>
      </section>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(RelatedPost)
