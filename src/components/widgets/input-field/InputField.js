import PropTypes from "prop-types";

import { FormGroup, Input } from "reactstrap";

export const InputField = ({ id, label, ...props }) => {
  return (
    <FormGroup>
      <label className="form-control-label" htmlFor={id}>
        {label}
      </label>
      <Input {...props} placeholder={label} />
    </FormGroup>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  props: PropTypes.any,
};
