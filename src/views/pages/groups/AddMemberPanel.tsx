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
import { categoriesData } from "mock-data/categories";
import { employeesData } from "mock-data/employees";
// @ts-ignore
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
import { ISelectOption } from "../../../types/types";

interface Props {
  onChangeRole: (e: ISelectOption) => void;
  onChangeCountry: (e: ISelectOption) => void;
  onChangeBunit: (e: ISelectOption) => void;
  onSelectCareMember: (e: ISelectOption) => void;
}

const AddMemberPanel = ({
  onChangeRole,
  onChangeCountry,
  onChangeBunit,
  onSelectCareMember,
}: Props) => {
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
                    onChange={onChangeRole}
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
                    onChange={onChangeCountry}
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
                    onChange={onChangeBunit}
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
                    onChange={onSelectCareMember}
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
};

export default AddMemberPanel;
