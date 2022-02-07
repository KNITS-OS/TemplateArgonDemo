import PropTypes from "prop-types";
import SweetAlert from "react-bootstrap-sweetalert";

export const ErrorAlert = ({ children, setAlert }) => {
  return (
    <SweetAlert error title="Error" onConfirm={() => setAlert(null)}>
      {children}
    </SweetAlert>
  );
};

ErrorAlert.propTypes = {
  children: PropTypes.node.isRequired,
  setAlert: PropTypes.func.isRequired,
};
