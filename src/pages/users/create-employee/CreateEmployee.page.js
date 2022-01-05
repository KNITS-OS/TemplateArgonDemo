import { Container } from "reactstrap";

import { GradientEmptyHeader } from "components/Headers";
import { EditEmployeePanel } from "..";

export const CreateEmployeePage = () => {
  let employee = {
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

  const onSave = updatedEmployee => {
    console.log(updatedEmployee);
  };

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <EditEmployeePanel employee={employee} onSave={onSave} />
      </Container>
    </>
  );
};
