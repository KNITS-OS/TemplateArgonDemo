import { Container } from "reactstrap";

import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";
import EditEmployeePanel from "pages/users/employee-panels/EditEmployee.panel.js";

const CreateEmployeePage = () => {
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

export default CreateEmployeePage;
