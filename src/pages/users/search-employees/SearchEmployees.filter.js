import PropTypes from "prop-types";
import { useState } from "react";
import makeAnimated from "react-select/animated";

import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Row } from "reactstrap";

import { removeEmptyAttributesFromObject } from "redux/utils";

import { SelectField, DateField } from "components/widgets";

export const SearchEmployeesFilterPanel = ({
  onSearchEmployees,
  countries,
  jobTitle,
  businessUnits,
}) => {
  const [searchLastName, setSearchLastName] = useState("");
  const [searchCountry, setSearchCountry] = useState();
  const [searchBusinessUnit, setSearchBusinessUnit] = useState();
  const [searchHiringDate, setSearchHiringDate] = useState();
  const [searchJobTitle, setSearchJobTitle] = useState();

  const findByAllParameters = () => {
    const filters = {
      lastName: searchLastName,
      businessUnit: searchBusinessUnit,
      country: searchCountry,
      onboardingDate: searchHiringDate,
      jobTitle: searchJobTitle,
    };
    const cleanedFilters = removeEmptyAttributesFromObject(filters);
    onSearchEmployees(cleanedFilters);
  };
  return (
    <Card>
      <CardHeader>
        <h3 className="mb-0">Search Employees</h3>
        <p className="text-sm mb-0">Filters</p>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md="3">
            <FormGroup>
              <label className="form-control-label" htmlFor="lastName">
                Last name
              </label>
              <Input
                id="lastName"
                style={{ height: "36px" }}
                className="form-control"
                type="text"
                placeholder="Last Name"
                value={searchLastName}
                onChange={e => setSearchLastName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <SelectField
              id="businessUnits"
              label="Business Units"
              components={makeAnimated()}
              options={businessUnits}
              onChange={item => setSearchBusinessUnit(item.value)}
            />
          </Col>
          <Col md="3">
            <SelectField
              id="select-jobTitle"
              label="Job Title"
              options={jobTitle}
              onChange={item => {
                setSearchJobTitle(item.value);
              }}
            />
          </Col>
          <Col md="2">
            <SelectField
              id="country"
              label="Countries"
              components={makeAnimated()}
              options={countries}
              onChange={item => setSearchCountry(item.value)}
            />
          </Col>
          <Col md="2">
            <DateField
              id="date-hire-from"
              label="Hire Date From"
              onChange={dateAsMoment =>
                setSearchHiringDate(
                  typeof dateAsMoment === "string"
                    ? dateAsMoment
                    : dateAsMoment.format("YYYY-MM-DD")
                )
              }
              timeFormat={false}
            />
          </Col>
          <Col md="2">
            <FormGroup>
              <Button
                style={{
                  marginTop: "32px",
                  marginLeft: "32px",
                  height: "40px",
                }}
                color="info"
                onClick={findByAllParameters}
              >
                Search
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

SearchEmployeesFilterPanel.propTypes = {
  onSearchEmployees: PropTypes.func.isRequired,
  countries: PropTypes.any.isRequired,
  businessUnits: PropTypes.any.isRequired,
  jobTitle: PropTypes.any.isRequired,
};
