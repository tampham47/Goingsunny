import React, { Component } from 'react';

import Modal from 'core/Modal';
import Detail from './Detail';

import iconYoutube from './ico-youtube.svg';
import styles from './styles.css';
class YoutubeDocument extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowDetail: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleDissmiss = this.handleDissmiss.bind(this);
  }

  handleOnClick() {
    this.setState({ isShowDetail: !this.state.isShowDetail });
  }

  handleDissmiss() {
    this.setState({ isShowDetail: false });
  }

  render() {
    const { item } = this.props;
    return (
      <div className={styles.main} onClick={this.handleOnClick}>
        <div className={styles.wrapIcon}>
          <img className={styles.icon} src={iconYoutube} />
        </div>
          <div className={styles.wrapContent}>
            <div className={styles.title}>
              {item.title}
            </div>
            <div className={styles.description}>
              {item.description}
            </div>
            <div className={styles.link}>
              {item.url}
            </div>
          </div>
        <Modal isShow={this.state.isShowDetail} dismiss={this.handleDissmiss}>
          <Detail isShow={this.state.isShowDetail} item={item}/>
        </Modal>
      </div>
  );
  }
}

export default YoutubeDocument;

