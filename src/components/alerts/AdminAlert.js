import PropTypes from "prop-types";
import SweetAlert from "react-bootstrap-sweetalert";

import { UncontrolledAlert } from "reactstrap";
export const AdminAlert = ({ setAlert, setCategoryDataLoaded, errorMessage }) => {
  const cleanAlert = () => {
    setCategoryDataLoaded(true); // remove spinner
    setAlert(
      <UncontrolledAlert color="danger" fade={false}>
        <span className="alert-inner--icon">
          <i className="ni ni-like-2" />
        </span>{" "}
        <span className="alert-inner--text">
          <strong>Attention!</strong> No data were loaded. Application will not work as expected
        </span>
      </UncontrolledAlert>
    );
  };
  return (
    <SweetAlert danger title="Error" onConfirm={() => cleanAlert(setCategoryDataLoaded, setAlert)}>
      {`${errorMessage} please contact administrator`}
    </SweetAlert>
  );
};

AdminAlert.propTypes = {
  setAlert: PropTypes.func.isRequired,
  setCategoryDataLoaded: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
