import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

import { Container, Spinner } from "reactstrap";

import { updateEmployee, searchEmployee } from "redux/employees";

import { ErrorAlert, SuccessAlert } from "components/alerts";
import { GradientEmptyHeader } from "components/headers";

import { EmployeePanel } from "..";

export const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const employeesState = useSelector(state => state.employee);

  const [employee, setEmployee] = useState(employeesState.entity);

  const [alert, setAlert] = useState(null);
  const [saveSent, setSaveSent] = useState(false);

  useEffect(() => {
    dispatch(searchEmployee(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (employeesState.entity) {
      setEmployee(employeesState.entity);
      if (saveSent) {
        setAlert(<SuccessAlert>Employee Updated</SuccessAlert>);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeesState.entity]);

  useEffect(() => {
    if (employeesState.isError && saveSent) {
      setAlert(<ErrorAlert>{employeesState.errorMessage}</ErrorAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeesState.isError, employeesState.errorMessage]);

  const onSave = updatedEmployee => {
    dispatch(updateEmployee(id, updatedEmployee));
    setSaveSent(true);
  };

  return (
    <>
      <GradientEmptyHeader />
      {alert}
      <Container className="mt--6" fluid>
        {employeesState.isLoading ? (
          <Spinner />
        ) : (
          <>
            {employee && (
              <EmployeePanel
                employee={employee}
                setEmployee={setEmployee}
                onSave={onSave}
                employeesState={employeesState}
                onBackToSearchClick={() => history.goBack()}
              />
            )}
          </>
        )}
      </Container>
    </>
  );
};
