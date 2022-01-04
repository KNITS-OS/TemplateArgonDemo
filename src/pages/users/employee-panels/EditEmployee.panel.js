import React, { useState } from "react";

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col, 
    Row,
  } from "reactstrap";

import InputField from 'components/widgets/input-field/InputField.js'

const EditEmployeePanel = ({employee, onSave, onBackSearchClick}) => {

    let [firstName, setFirstName] = useState(employee? employee.firstName : '');
    let [lastName, setLastName] = useState(employee? employee.lastName : '');
    let [internationalName, setInternationalName] = useState(employee? employee.internationalName : '');
    let [title, setTitle] = useState(employee? employee.title : '');
    let [email, setEmail] = useState(employee? employee.email  : '');
    let [businessUnit, setBusinessUnit] = useState(employee? employee.businessUnit : '');
    let [managementGroup, setManagementGroup] = useState(employee? employee.managementGroup : '');
    let [companyCode, setCompanyCode] = useState(employee? employee.companyCode : '');
    let [costCenter, setCostCenter] = useState(employee? employee.costCenter : ''); 
    let [companyPhone, setCompanyPhone] = useState(employee? employee.companyPhone : '');  
    let [officeAddressCountry, setOfficeAddressCountry] = useState(employee? employee.officeAddressCountry : '');
    let [officeAddressCity, setOfficeAddressCity] = useState(employee? employee.officeAddressCity : '');
    let [officeAddressStreet, setOfficeAddressStreet] = useState(employee? employee.officeAddressStreet : '');
    let [officeAddressPostalCode, setOfficeAddressPostalCode] = useState(employee? employee.officeAddressPostalCode : '');
      
  const onSaveClick = () =>{

      let updatedEmployee = {
        firstName,
        lastName,
        internationalName,
        title,
        email,
        businessUnit,
        managementGroup,
        companyCode,
        costCenter,    
        companyPhone,    
        officeAddressCountry,
        officeAddressCity,
        officeAddressStreet,
        officeAddressPostalCode,
      };
    onSave (updatedEmployee);
  }

    return (
        <Row>
        <Col className="order-xl-1" xl="12">
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Create Employee</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>            
                <h6 className="heading-small text-muted mb-4">
                  User information
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <InputField 
                        id="input-first-name" 
                        label="First name"
                        value={firstName}
                        type="text"
                        onChange={e => setFirstName(e.target.value)}
                      />
                    </Col>

                    <Col lg="6">
                    <InputField 
                        id="input-last-name" 
                        label="Last Name"
                        value={lastName}
                        type="text"
                        onChange={e => setLastName(e.target.value)}
                      />                    
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6">   
                      <InputField 
                          id="input-international-name" 
                          label="International Name"
                          value={internationalName}
                          type="text"
                          onChange={e => setInternationalName(e.target.value)}
                        />
                    </Col>
                    <Col lg="6">                     
                       <InputField 
                        id="input-email" 
                        label="Email Address"
                        value={email}
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                      />
                    </Col>
                  </Row>
                </div>
               
                <hr className="my-4" />

               <h6 className="heading-small text-muted mb-4">
                  Contact information
                </h6>
                <div className="pl-lg-4">
                    
                  <Row>
                    <Col md="12">
                      <InputField 
                          id="input-address" 
                          label="Office Street"                        
                          value={officeAddressStreet}
                          type="text"
                          onChange={e => setOfficeAddressStreet(e.target.value)}
                        />                    
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="4">
                       <InputField 
                          id="input-city" 
                          label="Office City"                         
                          value={officeAddressCity}
                          type="text"
                          onChange={e => setOfficeAddressCity(e.target.value)}
                        />  
                    </Col>
                    <Col lg="4">
                     <InputField 
                          id="input-country" 
                          label="Office Country"                         
                          value={officeAddressCountry}
                          type="text"
                          onChange={e => setOfficeAddressCountry(e.target.value)}
                        />  
                    </Col>
                    <Col lg="4">
                      <InputField 
                          id="input-postal-code" 
                          label="Office Postal code"                         
                          value={officeAddressPostalCode}                        
                          type="text"
                          onChange={e => setOfficeAddressPostalCode(e.target.value)}
                        />                     
                    </Col>
                  </Row>
                </div>
                <hr className="my-4" />

                <h6 className="heading-small text-muted mb-4">
                  Company Data
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="4">
                      <InputField 
                            id="input-title" 
                            label="Job Title"                         
                            value={title}                          
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                          />   
                    </Col>

                    <Col lg="4">
                       <InputField 
                            id="input-company-phone" 
                            label="Company Phone"                         
                            value={companyPhone}                          
                            type="text"
                            onChange={e => setCompanyPhone(e.target.value)}
                          />                      
                    </Col>
                    <Col lg="4">
                      <InputField 
                            id="input-company-code" 
                            label="Company Code"                         
                            value={companyCode}                          
                            type="text"
                            onChange={e => setCompanyCode(e.target.value)}
                          />   
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="4">
                      <InputField 
                            id="input-business-unit" 
                            label="Business Unit"                         
                            value={businessUnit}                          
                            type="text"
                            onChange={e => setBusinessUnit(e.target.value)}
                          />                        
                    </Col>

                    <Col lg="4">
                      <InputField 
                            id="input-cost-center" 
                            label="Cost Center"                         
                            value={costCenter}                          
                            type="text"
                            onChange={e => setCostCenter(e.target.value)}
                          />   
                    </Col>
                    <Col lg="4">
                      <InputField 
                            id="input-management-group" 
                            label="Management Group"                         
                            value={managementGroup}                          
                            type="text"
                            onChange={e => setManagementGroup(e.target.value)}
                          />   
                    </Col>
                  </Row> 


                  <Row className="align-items-center py-4">
                    <Col lg="12" xs="7" className="text-right">
                      <Button
                        type="button"
                        color="success"
                        onClick={onSaveClick}
                      >
                        Create
                      </Button>

                      { onBackSearchClick ?
                       (
                       <Button
                            type="button"
                            color="info"
                            onClick={onBackSearchClick}
                        >
                            Back to Search
                        </Button>
                        ) :
                        ( <> &nbsp;</> )
                       }                     
                    </Col>
                  </Row>
                </div>            
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
}

export default EditEmployeePanel;