import {  
    FormGroup,
    Input,
  } from "reactstrap";

const InputField = (props) => {

  let {id,  label} =props;

  return (
    <FormGroup>
    <label
      className="form-control-label"
      htmlFor={id}
    >
      {label}
    </label>
    <Input {...props}  />
  </FormGroup>
  )
}
export default InputField;