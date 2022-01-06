import { useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container } from "reactstrap";

import { GradientEmptyHeader } from "components/Headers";

import { selectEmployeeById } from "redux/employees";

import { EditEmployeePanel } from "..";

export const EmployeeDetailsPage = () => {
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
