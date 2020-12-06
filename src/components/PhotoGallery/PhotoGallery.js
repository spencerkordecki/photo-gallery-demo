import './PhotoGallery.css';
import React from 'react';
import images from '../../carouselImages.js';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
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

  render() {
    return (
      <div>
        <ul className="Gallery">
          {images.map((image, index) => {
            return (
              <li className="Gallery-item" key={index}>
                <img
                  className="Gallery-image"
                  src={image.path}
                  alt={image.description}
                ></img>
              </li>
            );
          })}
        </ul>
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default PhotoGallery;
