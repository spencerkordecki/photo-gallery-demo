import './PhotoGallery.css';
import React from 'react';
import images from '../../galleryImages.js';
import PhotoGalleryImage from '../PhotoGalleryImage/PhotoGalleryImage.js';

/**
 * Component that takes in an array of images from galleryImages.js and
 * displays them in a slider that has the ability to move to the next
 * or previous image by clicking the appropriate button or swiping left/right
 * on mobile.
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

    this.previousButton = React.createRef();
    this.nextButton = React.createRef();
  }

  /**
   * Checks the current active index and sets the index to (current - 1).
   * If the new index is out of range, set the active photo to the last
   * photo in the array.
   */
  setPreviousPhotoActive() {
    let newIndex;

    if (this.state.activeIndex === 0) {
      newIndex = images.length - 1;
    } else {
      newIndex = this.state.activeIndex - 1;
    }

    // Update the currently active photo and enable the previous button
    this.setState(
      {
        activeIndex: newIndex
      },
      () => {
        this.previousButton.current.disabled = false;
      }
    );
  }

  /**
   * Checks the current active index and sets the index to (current + 1).
   * If the new index is out of range, set the active photo to the first
   * photo in the array.
   */
  setNextPhotoActive() {
    let newIndex;
    if (this.state.activeIndex === images.length - 1) {
      newIndex = 0;
    } else {
      newIndex = this.state.activeIndex + 1;
    }

    // Update the currently active photo and enable the next button
    this.setState(
      {
        activeIndex: newIndex
      },
      () => {
        this.nextButton.current.disabled = false;
      }
    );
  }

  /**
   * Display the previous photo in the gallery and disable
   * the previous photo button to prevent spam clicking the
   * component into an inaccurate state.
   */
  handlePreviousClick() {
    this.previousButton.current.disabled = true;
    this.setPreviousPhotoActive();
  }

  /**
   * Display the next photo in the gallery and disable
   * the next photo button to prevent spam clicking the
   * component into an inaccurate state.
   */
  handleNextClick() {
    this.nextButton.current.disabled = true;
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
          ref={this.previousButton}
        >
          {'<'}
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
          ref={this.nextButton}
        >
          {'>'}
        </button>
      </div>
    );
  }
}

export default PhotoGallery;
