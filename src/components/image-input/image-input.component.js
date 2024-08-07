import "./image-input.styles.scss";

const ImageInput = ({
  className,
  dragging,
  onChangeHandler,
  onDropHandler,
  onDragOverHandler,
  onDragLeaveHandler,
  value,
}) => {
  return (
    <div className={`inputImageButton ${className} ${dragging ? "dragOver" : ""}`}>
      <input
        type="file"
        accept="image/*"
        onChange={onChangeHandler}
        onDrop={onDropHandler}
        onDragOver={onDragOverHandler}
        onDragLeave={onDragLeaveHandler}
      />
    </div>
  );
};

export default ImageInput;
