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
        Phone: +84 164-365-2922
      </div>
      <div className={styles.note}>
        <p>Sự ủng hộ của bạn là niềm động lực, là niềm vinh hạnh rất lớn để chúng mình tiến nhanh về phía trước. Cảm ơn các bạn rất nhiều!</p>
        <i>* Bạn mở App Momo rồi quét mã QR bên dưới.</i>
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
        <div className={styles.payment}>
          <button
            className={styles.momo}
            onClick={() => this.setState({isShowPaymentInfo: !this.state.isShowPaymentInfo})}
          >
            Buy us a beer via MOMO
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
