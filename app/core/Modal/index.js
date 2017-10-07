import T from 'prop-types';
import React from 'react';

import styles from './styles.css';


const Modal = (props) => {
  const { isShow, children, dismiss } = props;
  let mainClass = styles.main;
  if (isShow) {
    mainClass += ` ${styles.active}`;
  }

  return (
    <div className={mainClass}>
      <div className={styles.wrapper}>
        <button className={styles.close} onClick={dismiss}>Close</button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isShow: T.bool,
  children: T.node,
  dismiss: T.func.isRequired,
}

export default Modal;
