import './PhotoGalleryImage.css';

function PhotoGalleryImage(props) {
  const captionText = `"${props.image.description}" by ${props.image.author}`;
  let photoClassName = 'photo';
  let captionClassName = 'photo__caption';
  let touchstartX = 0;
  let touchendX = 0;

  // Hide all images and captions that are not currently active
  if (!props.isActive) {
    photoClassName = `${photoClassName} hidden`;
    captionClassName = `${captionClassName} hidden`;
  }

  /**
   * Set the beginning X axis value when the user starts to swipe.
   *
   * @param {Object} e TouchEvent
   */
  const handleTouchStart = (e) => {
    touchstartX = e.changedTouches[0].screenX;
  };

  /**
   * Set the end X axis value when the user is finished swiping. If
   * the end value is less than the start value, the user has swiped
   * left and the next photo will be displayed. If the end value is
   * greater than the start value, the user has swiped right and the
   * previous photo will be displayed.
   *
   * @param {Object} e TouchEvent
   */
  const handleTouchEnd = (e) => {
    touchendX = e.changedTouches[0].screenX;

    if (touchendX < touchstartX) {
      props.setNextPhotoActive();
    } else if (touchendX > touchstartX) {
      props.setPreviousPhotoActive();
    }
  };

  return (
    <article className={photoClassName}>
      <img
        className="photo__image"
        src={props.image.path}
        alt={props.image.alt}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      ></img>
      <p className={captionClassName}>{captionText}</p>
    </article>
  );
}

export default PhotoGalleryImage;
