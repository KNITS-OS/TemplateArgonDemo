import PropTypes from "prop-types";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Row,
} from "reactstrap";

import Select from "react-select";

import { selectCountriesAsList } from "redux/countries";
import { selectBusinessUnitsAsList } from "redux/business-units";
import { selectEmployeesAsList } from "redux/employees";

export const AddMemberPanel = (
  onChangeRole,
  onChangeCountry,
  onChangeBusinessUnit,
  onSelectCareMember,
) => {
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
                  <Select onChange={onChangeRole} options={jobTitles} />
                </FormGroup>
              </Col>
              <Col xl="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Country
                  </label>
                  <Select
                    onChange={onChangeCountry}
                    options={selectCountriesAsList}
                  />
                </FormGroup>
              </Col>
              <Col xl="2">
                <FormGroup>
                  <label className="form-control-label" htmlFor="members">
                    Business Unit
                  </label>
                  <Select
                    onChange={onChangeBusinessUnit}
                    options={selectBusinessUnitsAsList}
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
                    options={selectEmployeesAsList}
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

AddMemberPanel.propTypes = {
  onChangeRole: PropTypes.func.isRequired,
  onChangeCountry: PropTypes.func.isRequired,
  onChangeBusinessUnit: PropTypes.func.isRequired,
  onSelectCareMember: PropTypes.func.isRequired,
};
