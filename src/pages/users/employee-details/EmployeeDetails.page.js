/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// core components
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// reactstrap components
import {
  Container,
} from "reactstrap";

import GradientEmptyHeader from "components/headers/GradientEmptyHeader.js";
import EditEmployeePanel from "pages/users/employee-panels/EditEmployee.panel.js";
import {selectEmployeeById} from "redux/employees/employee.selectors.js"

const EmployeeDetailsPage = () => {

  let { id } = useParams()
  const history = useHistory();
  
  const employee = useSelector( selectEmployeeById(id));
  console.log(employee);

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
