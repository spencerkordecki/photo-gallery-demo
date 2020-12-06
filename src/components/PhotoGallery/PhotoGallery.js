import './PhotoGallery.css';
import React from 'react';
import images from '../../carouselImages.js';
import PhotoGalleryImage from '../PhotoGalleryImage/PhotoGalleryImage.js';

/**
 * Renders the images from carouselImages.js and handles clicks on the
 * next and previous buttons to advance the slides.
 */
class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };

    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);

    this.setPreviousPhotoActive = this.setPreviousPhotoActive.bind(this);
    this.setNextPhotoActive = this.setNextPhotoActive.bind(this);
  }

  /**
   * Checks the current active index and sets the index to the photo
   * currently active minus 1. If the new index is out of range, set the
   * active photo to the last photo in the array.
   */
  setPreviousPhotoActive() {
    if (this.state.activeIndex === 0) {
      this.setState({
        activeIndex: images.length - 1
      });
    } else {
      this.setState({
        activeIndex: this.state.activeIndex - 1
      });
    }
  }

  /**
   * Checks the current active index and sets the index to the photo
   * currently active plus 1. If the new index is out of range, set the
   * active photo to the first photo in the array.
   */
  setNextPhotoActive() {
    if (this.state.activeIndex === images.length - 1) {
      this.setState({
        activeIndex: 0
      });
    } else {
      this.setState({
        activeIndex: this.state.activeIndex + 1
      });
    }
  }

  /**
   * Display the previous photo in the gallery.
   */
  handlePreviousClick() {
    this.setPreviousPhotoActive();
  }

  /**
   * Display the next photo in the gallery.
   */
  handleNextClick() {
    this.setNextPhotoActive();
  }

  render() {
    return (
      <div
        className="gallery"
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        <button
          className="gallery__button gallery__button--prev"
          onClick={this.handlePreviousClick}
          aria-label="Display Previous Photo"
        >
          ◀
        </button>
        <ul className="gallery__images">
          {images.map((image, index) => {
            return (
              <li className="gallery__item" key={index}>
                <PhotoGalleryImage
                  image={image}
                  isActive={this.state.activeIndex === index}
                  setNextPhotoActive={this.setNextPhotoActive}
                  setPreviousPhotoActive={this.setPreviousPhotoActive}
                ></PhotoGalleryImage>
              </li>
            );
          })}
        </ul>
        <button
          className="gallery__button gallery__button--next"
          onClick={this.handleNextClick}
          aria-label="Display Next Photo"
        >
          ▶
        </button>
      </div>
    );
  }
}

export default PhotoGallery;
