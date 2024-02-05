import PropTypes from "prop-types";

function ServiceInfo({ text }) {
  return <div className="text-lg text-text-900">{text}</div>;
}

ServiceInfo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ServiceInfo;
