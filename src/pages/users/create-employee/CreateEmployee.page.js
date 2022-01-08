import { Container } from "reactstrap";

import { GradientEmptyHeader } from "components/Headers";

import { EditEmployeePanel } from "..";
import { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";

export const CreateEmployeePage = () => {
  let initialState = {
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
  const [alert, setAlert] = useState(false);

  const onSave = createdEmployee => {
    console.log("createdEmployee", createdEmployee);
    setAlert(
      <SweetAlert
        success
        title="Success"
        onConfirm={() => setAlert(false)}
      >
        User Created
      </SweetAlert>,
    );
  };

  return (
    <>
      <GradientEmptyHeader />
      {alert}
      <Container className="mt--6" fluid>
        <EditEmployeePanel
          employee={employee}
          setEmployee={setEmployee}
          onSave={onSave}
        />
      </Container>
    </>
  );
};
