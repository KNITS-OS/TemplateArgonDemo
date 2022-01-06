import { Container } from "reactstrap";

import { GradientEmptyHeader } from "components/Headers";

import { EditEmployeePanel } from "..";
import { useState } from "react";

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

  const onSave = createdEmployee => {
    console.log("createdEmployee", createdEmployee);
  };

  return (
    <>
      <GradientEmptyHeader />
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
