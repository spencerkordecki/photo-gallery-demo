import './PhotoGalleryImage.css';

function PhotoGalleryImage(props) {
  let className = 'Gallery-image';

  if (!props.isActive) {
    className = `${className} hidden`;
  }

  return (
    <img
      className={className}
      src={props.image.path}
      alt={props.image.description}
    ></img>
  );
}

export default PhotoGalleryImage;
