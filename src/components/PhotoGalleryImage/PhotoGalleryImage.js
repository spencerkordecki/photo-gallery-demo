import './PhotoGalleryImage.css';

function PhotoGalleryImage(props) {
  const captionText = `${props.image.description} by ${props.image.author}`;
  let imageClassName = 'photo__image';
  let captionClassName = 'photo__caption';

  if (!props.isActive) {
    imageClassName = `${imageClassName} hidden`;
    captionClassName = `${captionClassName} hidden`;
  }

  return (
    <article className="photo">
      <img
        className={imageClassName}
        src={props.image.path}
        alt={props.image.alt}
      ></img>
      <p className={captionClassName}>{captionText}</p>
    </article>
  );
}

export default PhotoGalleryImage;
