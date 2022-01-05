import { useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container } from "reactstrap";

import { selectEmployeeById } from "redux/employees/employee.selectors";

import GradientEmptyHeader from "components/Headers/GradientEmptyHeader";
import EditEmployeePanel from "pages/users/employee-panels/EditEmployee.panel";

const EmployeeDetailsPage = () => {
  let { id } = useParams();
  const history = useHistory();
  const reduxEmployee = useSelector(selectEmployeeById(id));

  const [employee, setEmployee] = useState(reduxEmployee);

  const onSave = updatedEmployee => {
    console.log("updatedEmployee", updatedEmployee);
  };

  const onBackToSearch = () => {
    history.push("/admin/search-employees");
  };

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <EditEmployeePanel
          employee={employee}
          setEmployee={setEmployee}
          onBackToSearchClick={onBackToSearch}
          onSave={onSave}
        />
      </Container>
    </>
  );
};

export default EmployeeDetailsPage;
