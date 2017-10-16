import React from 'react';
import iconQrCode from './ico-qrcode.svg';
import styles from './styles.css';

const PaymentInfo = () => (
  <div className={styles.main}>
    <div className={styles.qrCode}>
      <img className={styles.icon} src={iconQrCode} />
    </div>
    <div className={styles.wrapContent}>
      <div className={styles.phone}>
        Phone: +84 164-365-2922
      </div>
      <div className={styles.note}>
        <p>Sự ủng hộ của bạn là niềm động lực, là niềm vinh hạnh rất lớn để chúng mình tiến về phía trước.</p>
        <i>Mở App Momo và quét mã QR bên cạnh nhé.</i>
      </div>
    </div>
  </div>
);

export default PaymentInfo;
