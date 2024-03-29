import PropTypes from "prop-types";
import ReactDatetime from "react-datetime";

import { FormGroup } from "reactstrap";

export const DateField = ({ id, label, ...props }) => {
  return (
    <FormGroup>
      <label className="form-control-label" htmlFor={id}>
        {label}
      </label>
      <ReactDatetime {...props} />
    </FormGroup>
  );
};

DateField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  props: PropTypes.any,
};
