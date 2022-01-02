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

// core react libraries
import React, { useState , useEffect} from "react";
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
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

//local components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";

// redux
import { searchEmployees,deleteUser } from "redux/employees/employee.actions.js";
import { pagination } from "utils/tableUtils";



const { SearchBar } = Search;

const SearchEmployeesPage = () => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const employeesState = useSelector(state => state.employee);


  // const businessUnitsList = useSelector(state => {
  //   return state.categories.businessUnits.map(bunit => {
  //     return { value: bunit.id, label: bunit.name };
  //   });
  // });

  // const countriesList = useSelector(state => {
  //   return state.categories.countryListAllIsoData.map(country => {
  //     return { value: country.code3, label: country.name };
  //   });
  // });


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
    //history.push('/admin/users/employee-details/'+id);
  };

 

  const formatActionButtonCell = (cell, row) => {
    return (
      <>    
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={goToEmployeeDetails}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>
        </Button>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          color="danger"
          type="button"
          onClick={removeEmployee}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-fat-remove" />
          </span>
        </Button>
      </>
    );
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
                        // options={countriesList}
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
                <ToolkitProvider
                data={employeesState.entities}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "id",
                    hidden: true,
                  },
                  {
                    dataField: "firstName",
                    text: "firstName",
                    sort: true,
                  },
                  {
                    dataField: "lastName",
                    text: "lastName",
                    sort: true,
                  },
                  {
                    dataField: "internationalName",
                    text: "int Name",
                    sort: true,
                  },
                  {
                    dataField: "title",
                    text: "title",
                    sort: true,
                  },
                  {
                    dataField: "businessUnit",
                    text: "bUnit",
                    sort: true,
                  },
                  {
                    dataField: "managementGroup",
                    text: "Man Group",
                    sort: true,
                  },
                  {
                    dataField: "country",
                    text: "country",
                    sort: true,
                  },
                  {
                    dataField: "action",
                    text: "",
                    formatter: formatActionButtonCell,
                  },
                ]}
                search
              >
                {props => (
                  <div className="py-4 table-responsive">
                    <div
                      id="datatable-basic_filter"
                      className="dataTables_filter px-4 pb-1"
                    >
                      <label>
                        Search:
                        <SearchBar
                          className="form-control-sm"
                          placeholder=""
                          {...props.searchProps}
                        />
                      </label>
                    </div>
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      pagination={pagination}
                      bordered={false}
                      deleteRow={true}
                    />
                  </div>
                )}
                </ToolkitProvider>
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
