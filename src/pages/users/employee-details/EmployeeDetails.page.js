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
  const employee = useSelector(selectEmployeeById(id));

  const onSave = updatedEmployee => {
    console.log(updatedEmployee);
  };

  const onBackToSerch = () => {
    history.push("/admin/search-employees");
  };

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <EditEmployeePanel
          employee={employee}
          onBackSearchClick={onBackToSerch}
          onSave={onSave}
        />
      </Container>
    </>
  );
};

export default EmployeeDetailsPage;
