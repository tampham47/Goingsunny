import T from 'prop-types';
import React from 'react';

import styles from './styles.css';


const Modal = (props) => {
  const { isShow, children, close } = props;
  let mainClass = styles.main;
  if (isShow) {
    mainClass += ` ${styles.active}`;
  }

  return (
    <div className={mainClass}>
      <div className={styles.wrapper}>
        <button className={styles.close} onClick={close}>Close</button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isShow: T.bool.isRequired,
  close: T.func.isRequired,
  children: T.node,
}

export default Modal;
