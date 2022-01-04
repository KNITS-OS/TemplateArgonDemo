import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Container,
} from "reactstrap";

import {selectEmployeeById} from "redux/employees/employee.selectors.js"

import GradientEmptyHeader from "components/headers/GradientEmptyHeader.js";
import EditEmployeePanel from "pages/users/employee-panels/EditEmployee.panel.js";


const EmployeeDetailsPage = () => {

  let { id } = useParams()
  const history = useHistory();  
  const employee = useSelector( selectEmployeeById(id));
 
  const onSave = (updatedEmployee) =>{
      console.log(updatedEmployee);    
  }

  const onBackToSerch = () =>{
    history.push("/admin/search-employees")
  }

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <EditEmployeePanel employee={employee} onBackSearchClick={onBackToSerch}  onSave={onSave} />       
      </Container>
    </>
  );

};

export default EmployeeDetailsPage;
