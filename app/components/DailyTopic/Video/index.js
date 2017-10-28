import React, { Component } from 'react';

import config  from 'config';
import Modal from 'core/Modal';

import Slide from './Slide';

import iconYoutube from './ico-youtube.svg';
import styles from './styles.css';


class Video extends Component {
  constructor(props){
    super(props);

    this.state = {
      isShowSlice: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleOnClick() {
    this.setState({ isShowSlice: true });
  }

  handleDismiss() {
    this.setState({ isShowSlice: false });
  }

  render() {
    const { item, index, model } = this.props;
    const { title, thumbnails } = item.snippet;
    const urlImage = thumbnails.high.url;
    return (
      <div className={styles.main}>
        <div className={styles.header} onClick={this.handleOnClick}>
          <img className={styles.background} src={urlImage} />
          <img className={styles.icon} src={iconYoutube} />
        </div>
        <div className={styles.title} onClick={this.handleOnClick}>
          {title}
        </div>
        <Modal isShow={this.state.isShowSlice} dismiss={this.handleDismiss}>
          <Slide isShow={this.state.isShowSlice} index={index} model={model}/>
        </Modal>
      </div>
  );
  }
}

export default Video;
