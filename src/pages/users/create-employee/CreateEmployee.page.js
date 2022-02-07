import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "reactstrap";

import { createEmployee } from "redux/employees";

import { ErrorAlert, SuccessAlert } from "components/alerts";
import { GradientEmptyHeader } from "components/headers";

import { EmployeePanel } from "..";

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
  const [alert, setAlert] = useState(null);
  const [saveSent, setSaveSent] = useState(false);

  useEffect(() => {
    if (employeesState.isError && saveSent) {
      setAlert(<ErrorAlert>{employeesState.errorMessage}</ErrorAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeesState.isError, employeesState.errorMessage]);

  useEffect(() => {
    if (employeesState.entity && saveSent) {
      setAlert(<SuccessAlert>Employee Created</SuccessAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeesState.entity]);

  const onSave = () => {
    dispatch(createEmployee(employee));
    setSaveSent(true);
  };

  return (
    <>
      <GradientEmptyHeader />
      {alert}
      <Container className="mt--6" fluid>
        {employee && (
          <EmployeePanel
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
