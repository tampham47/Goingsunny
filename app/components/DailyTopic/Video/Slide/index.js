import React, { Component } from 'react';

import Placeholder from 'core/Placeholder';

import iconLeft from './ico-left.svg';
import iconRight from './ico-right.svg';

import styles from './styles.css';


class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: this.props.index
    };

    this.handleLeftArrow = this.handleLeftArrow.bind(this);
    this.handleRightArrow = this.handleRightArrow.bind(this);
    this.handleRenderLeftArrow = this.handleRenderLeftArrow.bind(this);
    this.handleRenderRightArrow = this.handleRenderRightArrow.bind(this);
    this.handleShowSlide = this.handleShowSlide.bind(this);
  }

  handleLeftArrow() {
    this.setState({ currentIndex: this.state.currentIndex - 1})
  }

  handleRightArrow() {
    this.setState({ currentIndex: this.state.currentIndex + 1})
  }

  handleRenderLeftArrow() {
    if(this.state.currentIndex === 0) {
      return null;
    }

    return (
      <img
        className={styles.leftArrow}
        src={iconLeft}
        onClick={this.handleLeftArrow}
      />
    );
  }

  handleRenderRightArrow() {
    if(this.state.currentIndex === 5) {
      return null;
    }

    return (
      <img
        className={styles.rightArrow}
        src={iconRight}
        onClick={this.handleRightArrow}
      />
    );
  }

  handleShowSlide() {
    const { isShow, model } = this.props;
    const videoID = model[this.state.currentIndex].id.videoId;
    const urlDetail = `https://www.youtube.com/embed/${videoID}`;

    if (!isShow) { return null; }

    return (
      <div className={styles.main}>
        <Placeholder />
        <iframe className={styles.frame} src={urlDetail} />
        {this.handleRenderLeftArrow()}
        {this.handleRenderRightArrow()}
      </div>
    );
  }

  render() {
    return this.handleShowSlide();
  }
}

export default Slide;
