import './text-container.style.scss'

const TextContainer = ({className, text}) => {
    return (
        <div className={`textBox ${className}`}>
            <p className='imageText'>{text}</p>
        </div>
    );
};

export default TextContainer;