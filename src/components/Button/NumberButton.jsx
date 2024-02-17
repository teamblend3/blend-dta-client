import PropTypes from "prop-types";

import Button from "./Button";
import { getStyleNumberButton } from "../../utils/styleUtils";

function NumberButton({ number, usePage, isCurrent, setCurrentPage }) {
  return (
    <li>
      <Button
        type="button"
        onClick={() => setCurrentPage(number)}
        style={getStyleNumberButton(usePage, isCurrent)}
      >
        {number}
      </Button>
    </li>
  );
}

NumberButton.propTypes = {
  usePage: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  number: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default NumberButton;
