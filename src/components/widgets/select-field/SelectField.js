import { FormGroup } from "reactstrap";

import PropTypes from "prop-types";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export const SelectField = ({ id, label, ...props }) => {
  return (
    <FormGroup>
      <label className="form-control-label" htmlFor={id}>
        {label}
      </label>
      <Select {...props} components={makeAnimated()} />
    </FormGroup>
  );
};

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  props: PropTypes.any,
};
