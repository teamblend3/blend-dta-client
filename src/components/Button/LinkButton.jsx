import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import FormButton from "../Form/FormButton";

function LinkButton({ to, children }) {
  const navigate = useNavigate();

  return (
    <FormButton type="button" handleClick={() => navigate(to)}>
      {children}
    </FormButton>
  );
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkButton;
