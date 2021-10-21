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
import React, {useState, useEffect} from "react";

import AddMemberPanel from "./AddMemberPanel.js";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardTitle,
  FormGroup,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Progress,
  Container,
  Row,
  Col,
  ButtonGroup,
  Collapse
} from "reactstrap";


function CreateGroupPage() {


  const [groupName, setGroupName] = useState('')
  const [groupDescription, setGroupDescription] = useState('')
  const [addMembersCollapse, setAddMembersCollapse] = useState(false);
  
  const saveGroup = (e) => {
    e.preventDefault();
  }
 
  return (
    <>
      
      <div
        className="header pb-6 d-flex align-items-center"
        style={{
          minHeight: "100px",        
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span className="mask bg-gradient-info opacity-8" />
      </div>
      <span> CreateGroupPage</span>
      {/* <Container className="mt--6" fluid>
        <span> CreateGroupPage</span>
      </Container> */}
    </>
  );
}

export default CreateGroupPage;
