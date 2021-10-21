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

import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  Collapse,
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
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";


// core components

import AddMemberPanel from "./AddMemberPanel.js";
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";



function GroupDetailsPage(props) {

  return (
    <>
     <span> GroupDetailsPage</span>
      {/* <GradientEmptyHeader name="Groups"  />
      <Container className="mt--6" fluid>    
        <span> GroupDetailsPage</span>
      </Container> */}
    </>
  );
}


export default GroupDetailsPage;
