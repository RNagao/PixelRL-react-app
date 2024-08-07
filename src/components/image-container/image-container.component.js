import ImageInput from "../image-input/image-input.component";
import "./image-container.styles.scss";

const ImageContainer = ({
  className,
  image,
  onChangeHandler,
  onDropHandler,
  onDragOverHandler,
  onDragLeaveHandler,
}) => {
  return (
    <div className={`imageBox ${className}`}>
      {image ? (
        <img id="img" src={image} alt="Uploaded" />
      ) : (
        <ImageInput
          className="imageContainerInput"
          image={image}
          onChangeHandler={onChangeHandler}
          onDropHandler={onDropHandler}
          onDragOverHandler={onDragOverHandler}
          onDragLeaveHandler={onDragLeaveHandler}
          value="Clique ou arraste uma imagem"
        />
      )}
    </div>
  );
};

export default ImageContainer;
