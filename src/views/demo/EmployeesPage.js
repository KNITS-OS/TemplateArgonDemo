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

import React, { useState} from "react";
// react component for creating dynamic tables
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

// reactstrap components
import { Button, Card, Col, Form ,CardBody, CardHeader, Container, Input, Row,FormGroup } from 'reactstrap'
import ReactDatetime from "react-datetime";
import Select from "react-select";
import makeAnimated from 'react-select/animated';

// core components
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader.js";

import {employeesData as employees } from "mock-data/employees.js";
import { categoriesData  } from "mock-data/categories.js";



const pagination = paginationFactory({
  page: 1,
  alwaysShowAllBtns: true,
  showTotal: true,
  withFirstAndLast: false,
  sizePerPageRenderer: ({ options, currSizePerPage, onSizePerPageChange }) => (
    <div className="dataTables_length" id="datatable-basic_length">
      <label>
        Show{" "}
        {
          <select
            name="datatable-basic_length"
            aria-controls="datatable-basic"
            className="form-control form-control-sm"
            onChange={(e) => onSizePerPageChange(e.target.value)}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        }{" "}
        entries.
      </label>
    </div>
  ),
});

const { SearchBar } = Search;

function Employees(props) {

  
  const businessUnits =categoriesData.businessUnits.map(businessUnit => {return {"value": businessUnit.id, "label":businessUnit.name}});
  const countries =categoriesData.countryListAllIsoData.map(country => {return {"value": country.code, "label":country.name}});

  const [searchLastName, setSearchLastName] = useState("");
  const [searchBusinessUnit, setSearchBusinessUnit] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchHiringDate, setSearchHiringDate] = useState(null);

  const findByAllParameters = () => {
    let filters ={    
      lastName: searchLastName,
      businessUnitId: searchBusinessUnit,
      countryId:searchCountry,    
      hiringDate:searchHiringDate
    }
    console.log("filters: ",filters);
  }

  const onChangeSearchHiringDate = (dateAsMoment) => {    
    setSearchHiringDate(dateAsMoment.format('D-MM-YYYY'));
  };

  const onChangeSearchLastName = e => {  
    const searchLastName = e.target.value;
    setSearchLastName(searchLastName);
  };

  const employeeDetails = (e)=> {  
      var { id} = e.target;
      props.history.push('/admin/users/employee-details/'+id);     
  }

  const employeeRemove = (e)=> {       
    var { id} = e.target;   
    let empIndex=employees.findIndex(emp => emp.id!==parseInt(id));
    console.log(employees[empIndex]);
    console.log(employees.length);
    employees= employees.splice(id,  1);
    console.log(employees.length);

    //props.history.push('/admin/users/employee-details/'+id);   
  }
  
  const formatActionButtonCell =(cell, row)=>{  
      
      return (    <>
                      <Button id={row.id} className="btn-icon btn-2" type="button" color="info" onClick={employeeDetails}>
                          <span id={row.id} className="btn-inner--icon">
                            <i id={row.id} className="ni ni-badge" />
                          </span>                        
                        </Button>
                        <Button id={row.id} className="btn-icon btn-2" color="danger" type="button" onClick={employeeRemove}>
                          <span id={row.id} className="btn-inner--icon">
                            <i id={row.id} className="ni ni-fat-remove" />
                          </span>
                        </Button>
                        </>);  
  }

  return (
    <>
      <GradientEmptyHeader name="Employees"  />
      <Container className="mt--6" fluid>
      <Row>    
        <div className="col">
            <Card >
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
                    style={{height:'36px'}}
                    className="form-control"                    
                    type="text"
                    placeholder="Last Name"
                    value={searchLastName}
                    onChange={onChangeSearchLastName}
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
                      components = {makeAnimated()}
                      options = {businessUnits}
                      onChange = {item => setSearchBusinessUnit(item.value)}
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
                      components = {makeAnimated()}
                      options = {countries}
                      onChange = {item => setSearchCountry(item.value)}
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
                    onChange={(e) =>
                      onChangeSearchHiringDate(e)
                    }
                    timeFormat={false}
                  />
                </FormGroup>
              </Col>
              <Col md="2"> 
                <FormGroup>            
                      <button
                        style={{marginTop:'32px', marginLeft:'32px', height:'40px'}}                       
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
                <p className="text-sm mb-0">
                  Employees                </p>
              </CardHeader>
              <ToolkitProvider
                data={employees}
                keyField="id"
                columns={[
                  {
                    dataField: "id",
                    text: "id",
                    hidden : true,
                  },
                  {
                    dataField: "firstName",
                    text: "firstName",
                    sort: "First Name",                    
                  },
                  {
                    dataField: "lastName",
                    text: "lastName",
                    sort : true,
                  },
                  {
                    dataField: "internationalName",
                    text: "int Name",
                    sort: true                    
                  },
                  {
                    dataField: "title",
                    text: "title",
                    sort: true                                     
                  },
                  {
                    dataField: "businessUnit",
                    text: "bUnit",
                    sort: true,
                    // style: { width:'50px' }
                  },
                  {
                    dataField: "managementGroup",
                    text: "Man Group",
                    sort: true,
                    // style: { width:'50px' }
                  },                            
                  {
                    dataField: "country",
                    text: "country",
                    sort: true,
                  },{  
                    dataField: 'action',    
                    text:'',
                    formatter: formatActionButtonCell
                }
                ]}
                search
              >
                {(props) => (
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
                      deleteRow={ true }
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
}

export default Employees;
