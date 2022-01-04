// core react libraries
import React, { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

// reactstrap components
import {
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
import GradientEmptyHeader from "components/headers/GradientEmptyHeader.js";
import ReactTable from "components/widgets/react-table/ReactTable.js";

// redux
import { searchEmployees,deleteUser } from "redux/employees/employee.actions.js";
import { selectCountriesAsList } from "redux/countries/country.selectors.js";

//local components
import employeesTableColumns from "./SearchEmployees.table.js";



const SearchEmployeesPage = () => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const employeesState = useSelector(state => state.employee);
  const countriesList = useSelector(selectCountriesAsList);

  const [searchLastName, setSearchLastName] = useState("");
  const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchHiringDate, setSearchHiringDate] = useState(null);
  const [alert, setAlert] = useState(employeesState.isError);


  useEffect(() => {
    if (employeesState.isError){
      setAlert(
        <SweetAlert danger title="Error" onConfirm={() => setAlert(false)}>
          {employeesState.errorMessage}
        </SweetAlert>
      )
    }
  }, [employeesState.isError,employeesState.errorMessage ])

  const findByAllParameters = () => {
    let filters = {
      lastName: searchLastName,
      businessUnitId: searchBusinessUnit,
      countryIsoCode3: searchCountry,
      hiringDate: searchHiringDate,
    };
    dispatch(searchEmployees(filters));
  };

  const goToEmployeeDetails = e => {
    var { id } = e.target;
    history.push(`/admin/users/employee-details/${id}`);
  };

  const removeEmployee = e => {
    var { id } = e.target;
    dispatch(deleteUser(id)); 
  };

 
  return (
    <>
      <GradientEmptyHeader /> 
      <Container className="mt--6" fluid>
        { alert}          
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
                        // options={businessUnitsList}
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
                            dateAsMoment.format("D-MM-YYYY"),
                          )
                        }
                        timeFormat={false}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="2">
                    <FormGroup>
                      <button
                        style={{
                          marginTop: "32px",
                          marginLeft: "32px",
                          height: "40px",
                        }}
                        className="btn btn-info"
                        type="button"
                        onClick={findByAllParameters}
                      >
                        Search
                      </button>
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
                <p className="text-sm mb-0">Employees </p>
              </CardHeader>
               { employeesState.isLoading ? (
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
                    onViewDetails={goToEmployeeDetails}
                    onDeleteItem={removeEmployee}
                  />              
                )
              }     
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default SearchEmployeesPage;