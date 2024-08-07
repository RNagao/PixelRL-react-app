const SubmitButton = ({loading, onClickHandler, message}) => {
    return (
        <button className="submit-button" onClick={onClickHandler} disabled={loading}>
          {loading ? 'Processing...' : message}
        </button>
    );
};

export default SubmitButton;