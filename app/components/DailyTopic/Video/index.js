import React, { Component } from 'react';

import config  from 'config';
import Modal from 'core/Modal';

import Detail from './Detail';
import iconYoutube from './ico-youtube.svg';
import styles from './styles.css';


class Video extends Component {
  constructor(props){
    super(props);

    this.state = {
      isShowDetail: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleDissmiss = this.handleDissmiss.bind(this);
  }

  handleOnClick() {
    this.setState({
      isShowDetail: !this.state.isShowDetail,
    });
  }

  handleDissmiss() {
    this.setState({ isShowDetail: false });
  }

  render() {
    const { item } = this.props;
    const { title, thumbnails } = item.snippet;
    const urlImage = thumbnails.high.url;
    return (
      <div className={styles.main} onClick={this.handleOnClick}>
        <div className={styles.header}>
          <img className={styles.background} src={urlImage} />
          <img className={styles.icon} src={iconYoutube} />
        </div>
        <div className={styles.title}>
          {title}
        </div>
        <Modal isShow={this.state.isShowDetail} dismiss={this.handleDissmiss}>
          <Detail isShow={this.state.isShowDetail} item={item}/>
        </Modal>
      </div>
  );
  }
}

export default Video;
