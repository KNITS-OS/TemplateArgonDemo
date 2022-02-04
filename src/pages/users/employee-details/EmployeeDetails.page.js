import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router";

import { useParams } from "react-router-dom";

import { Container, Spinner } from "reactstrap";

import SweetAlert from "react-bootstrap-sweetalert";

import { GradientEmptyHeader } from "components/headers";

import { updateEmployee, searchEmployee } from "redux/employees";

import { EditEmployeePanel } from "..";

export const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const employeesState = useSelector(state => state.employee);

  const [alert, setAlert] = useState(employeesState.isError);
  const [employee, setEmployee] = useState(employeesState.entity);

  useEffect(() => {
    dispatch(searchEmployee(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setEmployee(employeesState.entity);
  }, [employeesState.entity]);

  useEffect(() => {
    if (employeesState.isError) {
      setAlert(
        <SweetAlert danger title="Error" onConfirm={() => setAlert(false)}>
          {employeesState.errorMessage}
        </SweetAlert>
      );
    }
  }, [employeesState.isError, employeesState.errorMessage]);

  const onSave = updatedEmployee => {
    dispatch(updateEmployee(id, updatedEmployee));
    if (employeesState.isSuccess) {
      setAlert(
        <SweetAlert success title="Success" onConfirm={() => setAlert(false)}>
          Employee Updated
        </SweetAlert>
      );
    }
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
              <EditEmployeePanel
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
