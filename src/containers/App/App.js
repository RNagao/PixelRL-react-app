import { useState } from "react";
import axios from "axios";
import "./App.styles.scss";
import ImageInput from "../../components/image-input/image-input.component";
import ImageContainer from "../../components/image-container/image-container.component";
import SubmitButton from "../../components/submit-button/submit-button.component";
import TextContainer from "../../components/text-container/text-container.component";
import { ReactComponent as UfrjLogo } from '../../assets/logo_ufrj.svg';

const App = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageChange(file);
    }
  };

  const handleDropImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageChange(file); // Passa o arquivo diretamente
    }
  };

  const handleDragOverImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeaveImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleSubmit = async () => {
    if (image) {
      setLoading(true);
      try {
        const response = await axios.post("localhost:8000/read_image_text", {
          image,
        });
        setText(response.data.text);
      } catch (error) {
        console.error("Error recognizing text:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="App">
      <header>
        <div className="logo">
          <UfrjLogo className="logo-image" />
        </div>
      </header>
      <main>
        <div className="image-input-div">
          <ImageInput
            onChangeHandler={handleChangeImage}
            onDropHandler={handleDropImage}
            onDragOverHandler={handleDragOverImage}
            onDragLeaveHandler={handleDragLeaveImage}
          />
          <ImageContainer
            className="input-image-container"
            image={image}
            onChangeHandler={handleChangeImage}
            onDropHandler={handleDropImage}
            onDragOverHandler={handleDragOverImage}
            onDragLeaveHandler={handleDragLeaveImage}
          />
        </div>
        <div className="text-image-div">
          <SubmitButton
            loading={loading}
            onClickHandler={handleSubmit}
            message="Read Image"
          />
          <TextContainer className="image-text" text={text} />
        </div>
      </main>
    </div>
  );
};

export default App;
