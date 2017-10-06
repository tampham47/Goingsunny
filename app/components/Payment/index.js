import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import Header from 'core/Header';
import iconQrCode from './ico-qrcode.svg';
import styles from './styles.css';


const PaymentInfo = () => (
  <div className={styles.paymentInfo}>
    <div className={styles.wrapQRCode}>
      <div className={styles.qrCode}>
        <img className={styles.icon} src={iconQrCode} />
      </div>
    </div>
    <div className={styles.wrapContent}>
      <div className={styles.phone}>
        Phone: +841643-652-922
      </div>
      <div className={styles.note}>
        Vui lòng nhắn vào khung bên dưới sau khi đã chuyển tiền thành công. Xin cảm ơn!
      </div>
    </div>
  </div>
);
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
        <h5>Payment</h5>
        <div className={styles.payment}>
          <button
            className="button-primary"
            onClick={() => this.setState({isShowPaymentInfo: !this.state.isShowPaymentInfo})}
          >
            Buy us a beer
          </button>
          {this.state.isShowPaymentInfo ? PaymentInfo() : null}
        </div>
      </section>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Payment)
