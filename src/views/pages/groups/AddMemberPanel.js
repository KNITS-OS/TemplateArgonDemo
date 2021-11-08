/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { categoriesData } from "mock-data/categories.js";
import { employeesData } from "mock-data/employees.js";
import React from "react";
// core components
import Select from "react-select";
// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Row,
} from "reactstrap";

function AddMemberPanel(props) {
  const employees = employeesData.map(employee => {
    return { value: employee.id, label: employee.internationalName };
  });
  const businessUnits = categoriesData.businessUnits.map(businessUnit => {
    return { value: businessUnit.id, label: businessUnit.name };
  });
  const countries = categoriesData.countryListAllIsoData.map(country => {
    return { value: country.code, label: country.name };
  });
  const jobTitles = [
    { value: 1, label: "product manager" },
    { value: 2, label: "qa engineer" },
    { value: 3, label: "hr consultant" },
    { value: 4, label: "office manager" },
    { value: 5, label: "sales representative" },
    { value: 6, label: "logistics consultant" },
  ];

  return (
    <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col xs="8">
            <h3 className="mb-0">Add Members</h3>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xl="12">
            <Row>
              <Col xl="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Job Title
                  </label>
                  <Select
                    onChange={props.onchangeRole}
                    options={jobTitles}
                    // getOptionValue={(option) => option.value}
                    // getOptionLabel={(option) => option.value}
                  />
                </FormGroup>
              </Col>
              <Col xl="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Country
                  </label>
                  <Select
                    onChange={props.onchangeCountry}
                    options={countries}
                    // getOptionValue={(option) => option.value}
                    // getOptionLabel={(option) => option.name}
                  />
                </FormGroup>
              </Col>
              <Col xl="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Business Unit
                  </label>
                  <Select
                    onChange={props.onchangeBunit}
                    options={businessUnits}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Add members
                  </label>
                  <Select
                    isMulti
                    onChange={props.onSelectCareMember}
                    options={employees}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default AddMemberPanel;

// AddMemberPanel.propTypes = {
//   onchangeRole: PropTypes.func,
//   onchangeCountry: PropTypes.func,
//   onchangeBunit: PropTypes.func,
//   onSelectCareMember: PropTypes.func
// };
