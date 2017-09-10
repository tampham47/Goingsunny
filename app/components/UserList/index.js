import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import styles from './styles.css';


class UserList extends Component {
  render() {
    return (
      <section className={styles.main}>User List</section>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(UserList)
