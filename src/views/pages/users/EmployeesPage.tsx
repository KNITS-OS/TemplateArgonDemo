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
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader";
import { employeesData as employees } from "mock-data/employees";
import { useState } from "react";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import ReactDatetime from "react-datetime";
import { useHistory } from "react-router";
import Select from "react-select";
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
} from "reactstrap";
import { pagination } from "utils/tableUtils";
import { Employee } from "types/types";
import {
  getSelectBusinessUnits,
  getSelectCountries,
} from "utils/fetchData";

const { SearchBar } = Search;

const EmployeesPage = () => {
  const history = useHistory();

  const [searchLastName, setSearchLastName] = useState("");
  const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchHiringDate, setSearchHiringDate] = useState(null);

  const findByAllParameters = () => {
    let filters = {
      lastName: searchLastName,
      businessUnitId: searchBusinessUnit,
      countryIsoCode3: searchCountry,
      hiringDate: searchHiringDate,
    };
    console.log("filters: ", filters);
  };

  const goToEmployeeDetails = (e: React.MouseEvent<HTMLButtonElement>) => {
    var { id } = e.target as HTMLButtonElement;
    history.push(`/admin/users/employee-details/${id}`);
  };

  const removeEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
    var { id } = e.target as HTMLButtonElement;
    let empIndex = employees.findIndex(emp => emp.id !== parseInt(id));
    console.log(employees[empIndex]);
    console.log(employees.length);
    console.log(employees.length);
    // employees = employees.splice(id, 1);

    //history.push('/admin/users/employee-details/'+id);
  };

  const formatActionButtonCell = (_: undefined, row: Employee) => {
    const { id } = row;

    let employeeId = id.toString();
    return (
      <>
        <Button
          id={employeeId}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={goToEmployeeDetails}
        >
          <span id={employeeId} className="btn-inner--icon">
            <i id={employeeId} className="ni ni-badge" />
          </span>
        </Button>
        <Button
          id={employeeId}
          className="btn-icon btn-2"
          color="danger"
          type="button"
          onClick={removeEmployee}
        >
          <span id={employeeId} className="btn-inner--icon">
            <i id={employeeId} className="ni ni-fat-remove" />
          </span>
        </Button>
      </>
    );
  };

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
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
                        options={getSelectBusinessUnits}
                        onChange={item =>
                          item && setSearchBusinessUnit(item.value)
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
                        options={getSelectCountries}
                        onChange={item =>
                          item && setSearchCountry(item.value)
                        }
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
                        onChange={(dateAsMoment: any) =>
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
              <ToolkitProvider
                data={employees}
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
                    />
                  </div>
                )}
              </ToolkitProvider>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default EmployeesPage;
