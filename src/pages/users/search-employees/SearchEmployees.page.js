// core react libraries
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
  Spinner,
} from "reactstrap";

// 3rd part react libraries
import ReactDatetime from "react-datetime";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import SweetAlert from "react-bootstrap-sweetalert";

//template core components
import { GradientEmptyHeader } from "components/Headers";
import { ReactTable } from "components/widgets";

// redux
import { searchEmployees, deleteEmployee } from "redux/employees";
import { selectCountriesAsList } from "redux/countries";
import { selectBusinessUnitsAsList } from "redux/business-units";

//local components
import { employeesTableColumns } from ".";

export const SearchEmployeesPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const employeesState = useSelector(state => state.employee);
  const countriesList = useSelector(selectCountriesAsList);
  const businessUnitsList = useSelector(selectBusinessUnitsAsList);

  const [searchLastName, setSearchLastName] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
  const [searchHiringDate, setSearchHiringDate] = useState(null);
  const [alert, setAlert] = useState(employeesState.isError);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  useEffect(() => {
    if (employeesState.isError) {
      setAlert(
        <SweetAlert danger title="Error" onConfirm={() => setAlert(false)}>
          {employeesState.errorMessage}
        </SweetAlert>,
      );
    }
  }, [employeesState.isError, employeesState.errorMessage]);

  // https://stackoverflow.com/questions/286141/remove-blank-attributes-from-an-object-in-javascript
  const removeEmptyAttributesFromObject = obj => {
    // _ is not used but its value is the attribute name
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([_, value]) => value !== null && value !== "",
      ),
    );
  };

  const findByAllParameters = () => {
    let filters = {
      lastName: searchLastName,
      businessUnit: searchBusinessUnit,
      country: searchCountry,
      onboardingDate: searchHiringDate,
    };
    const cleanedFilters = removeEmptyAttributesFromObject(filters);
    dispatch(searchEmployees(cleanedFilters));
  };

  const goToEmployeeDetails = e => {
    var { id } = e.target;
    history.push(`/admin/users/employee-details/${id}`);
  };

  const removeEmployee = e => {
    var { id } = e.target;
    dispatch(deleteEmployee(id));
  };

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        {alert}
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search Employees</h3>
                <p className="text-sm mb-0">Filters</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="3">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="lastName"
                      >
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
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="businessUnits"
                      >
                        Business Units
                      </label>
                      <Select
                        id="businessUnits"
                        components={makeAnimated()}
                        options={businessUnitsList}
                        onChange={item =>
                          setSearchBusinessUnit(item.value)
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="country"
                      >
                        Countries
                      </label>
                      <Select
                        id="country"
                        components={makeAnimated()}
                        options={countriesList}
                        onChange={item => setSearchCountry(item.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="example3cols2Input"
                      >
                        Hire Date From
                      </label>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Hire date",
                        }}
                        onChange={dateAsMoment =>
                          setSearchHiringDate(
                            dateAsMoment.format("MM/DD/YYYY"),
                          )
                        }
                        timeFormat={false}
                      />
                    </FormGroup>
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
          </div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Employees</h3>
                <p className="text-sm mb-0">Employees</p>
              </CardHeader>
              {employeesState.isLoading ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner />
                </div>
              ) : (
                <ReactTable
                  data={employeesState.entities}
                  keyField="id"
                  columns={employeesTableColumns}
                  onViewDetailsClick={goToEmployeeDetails}
                  onDeleteItemClick={removeEmployee}
                  selectedRows={selectedEmployees}
                  setSelectedRows={setSelectedEmployees}
                />
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
