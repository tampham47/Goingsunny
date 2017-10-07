import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import Header from 'core/Header';
import Modal from 'core/Modal';
import PaymentInfo from './PaymentInfo';

import styles from './styles.css';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowPaymentInfo: false,
    };
  }

  render() {
    return (
      <section className={styles.main}>
        <button
          className={styles.momo}
          onClick={() => this.setState({isShowPaymentInfo: !this.state.isShowPaymentInfo})}
        >
          Buy us a beer via MOMO
        </button>
        <Modal
          dismiss={() => this.setState({isShowPaymentInfo: false}) }
          isShow={this.state.isShowPaymentInfo}
        >
          <PaymentInfo />
        </Modal>
      </section>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Payment)
