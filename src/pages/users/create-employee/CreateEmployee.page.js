import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Container } from "reactstrap";

import SweetAlert from "react-bootstrap-sweetalert";

import { GradientEmptyHeader } from "components/headers";

import { createEmployee } from "redux/employees";

import { EditEmployeePanel } from "..";

export const CreateEmployeePage = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    internationalName: "",
    title: "",
    email: "",
    businessUnit: "",
    managementGroup: "",
    companyCode: "",
    costCenter: "",
    country: "",
    birthDate: "",
    companyPhone: "",
    companyMobilePhone: "",
    gender: "",
    nationality: "",
    officeAddressCountry: "",
    officeAddressCity: "",
    officeAddressStreet: "",
  };
  const [employee, setEmployee] = useState(initialState);
  const dispatch = useDispatch();
  const employeesState = useSelector(state => state.employee);
  const [alert, setAlert] = useState(employeesState.isError);

  useEffect(() => {
    if (employeesState.isError) {
      setAlert(
        <SweetAlert danger title="Error" onConfirm={() => setAlert(false)}>
          {employeesState.errorMessage}
        </SweetAlert>
      );
    }
  }, [employeesState.isError, employeesState.errorMessage]);

  const onSave = () => {
    dispatch(createEmployee(employee));
  };

  useEffect(() => {
    if (employeesState.entity) {
      setAlert(
        <SweetAlert success title="Success" onConfirm={() => setAlert(false)}>
          Employee Created
        </SweetAlert>
      );
    }
  }, [employeesState.entity]);

  return (
    <>
      <GradientEmptyHeader />
      {alert}
      <Container className="mt--6" fluid>
        {employee && (
          <EditEmployeePanel
            employee={employee}
            setEmployee={setEmployee}
            onSave={onSave}
            employeesState={employeesState}
          />
        )}
      </Container>
    </>
  );
};
