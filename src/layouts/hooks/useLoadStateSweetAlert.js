import { useEffect } from "react";

import { UncontrolledAlert } from "reactstrap";

import SweetAlert from "react-bootstrap-sweetalert";

export const useLoadStateSweetAlert = (
  setAlert,
  setCategoryDataLoaded,
) => {
  const cleanAlert = () => {
    setCategoryDataLoaded(true); // remove spinner
    setAlert(
      <UncontrolledAlert color="danger" fade={false}>
        <span className="alert-inner--icon">
          <i className="ni ni-like-2" />
        </span>{" "}
        <span className="alert-inner--text">
          <strong>Attention!</strong> No data were loaded. Application will
          not work as expected
        </span>
      </UncontrolledAlert>,
    );
  };
  return {
    useLoadStateSweetAlertMutation: state => {
      useEffect(() => {
        if (state.entities && state.entities.length > 0) {
          setCategoryDataLoaded(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [state.entities]);

      useEffect(() => {
        if (state.isError) {
          setAlert(
            <SweetAlert
              danger
              title="Error"
              onConfirm={() => cleanAlert(setCategoryDataLoaded, setAlert)}
            >
              {`${state.errorMessage} please contact administrator`}
            </SweetAlert>,
          );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [state.isError, state.errorMessage]);
    },
  };
};
