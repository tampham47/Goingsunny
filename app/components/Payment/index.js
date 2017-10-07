import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import Header from 'core/Header';
import Modal from 'core/Modal';
import Detail from './Detail';

import styles from './styles.css';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetail: false,
    };
  }

  render() {
    return (
      <section className={styles.main}>
        <button
          className={styles.momo}
          onClick={() => this.setState({isShowDetail: !this.state.isShowDetail})}
        >
          Buy us a beer via MOMO
        </button>
        <Modal
          isShow={this.state.isShowDetail}
          dismiss={() => this.setState({isShowDetail: false}) }
        >
          <Detail />
        </Modal>
      </section>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Payment)
