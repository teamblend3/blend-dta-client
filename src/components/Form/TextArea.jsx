import PropTypes from "prop-types";

function TextArea({ data, style }) {
  return (
    <div className="items-center justify-center w-full">
      <textarea readOnly rows={12} value={data} className={style} />
    </div>
  );
}

TextArea.defaultProps = {
  style: "",
};

TextArea.propTypes = {
  data: PropTypes.string.isRequired,
  style: PropTypes.string,
};

export default TextArea;
