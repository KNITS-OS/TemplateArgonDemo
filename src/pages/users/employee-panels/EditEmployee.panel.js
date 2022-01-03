import React, { useState } from "react";

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    FormGroup,
    Input,
    Row,
  } from "reactstrap";

  import InputField from 'components/widgets/input-field/InputField.js'

const EditEmployeePanel = ({employee, onSave, onBackSearchClick}) => {

    let [firstName, setFirstName] = useState(employee? employee.firstName : '');
    let [lastName, setLastName] = useState(employee? employee.lastName : '');
    let [internationalName, setInternationalName] = useState(employee? employee.internationalName : '');
    let [title, setTitle] = useState(employee.title);
    let [email, setEmail] = useState(employee? employee.email  : '');
    let [businessUnit, setBusinessUnit] = useState(employee.businessUnit);
    let [managementGroup, setManagementGroup] = useState(employee.managementGroup);
    let [companyCode, setCompanyCode] = useState(employee.companyCode);
    let [costCenter, setCostCenter] = useState(employee.costCenter);
    let [country, setCountry] = useState(employee.country);
    let [birthDate, setBirthDate] = useState(employee.birthDate);
    let [companyPhone, setCompanyPhone] = useState(employee.companyPhone);
    let [companyMobilePhone, setCompanyMobilePhone] = useState(employee.companyMobilePhone);
    let [gender, setGender] = useState(employee.gender);
    let [nationality, setNationality] = useState(employee.nationality);
    let [officeAddressCountry, setOfficeAddressCountry] = useState(employee.officeAddressCountry);
    let [officeAddressCity, setOfficeAddressCity] = useState(employee.officeAddressCity);
    let [officeAddressStreet, setOfficeAddressStreet] = useState(employee.officeAddressStreet);   
      
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
        country,
        birthDate,
        companyPhone,
        companyMobilePhone,
        gender,
        nationality,
        officeAddressCountry,
        officeAddressCity,
        officeAddressStreet,
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


                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          First name
                        </label>
                        <Input
                          id="input-first-name"
                          value={firstName}
                          type="text"
                          onChange={e => setFirstName(e.target.value)}
                        />
                      </FormGroup> */}
                    </Col>
                    <Col lg="6">

                    <InputField 
                        id="input-last-name" 
                        label="Last Name"
                        value={lastName}
                        type="text"
                        onChange={e => setLastName(e.target.value)}
                      />

                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Last name
                        </label>
                        <Input
                          id="input-last-name"
                          value={lastName}
                          type="text"
                          onChange={e => setLastName(e.target.value)}
                        />
                      </FormGroup> */}
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6">
                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          International Name
                        </label>
                        <Input
                          id="input-username"
                          value={internationalName}
                          type="text"
                          onChange={e => setInternationalName(e.target.value)}
                        />
                      </FormGroup> */}

                    <InputField 
                        id="input-international-name" 
                        label="International Name"
                        value={internationalName}
                        type="text"
                        onChange={e => setInternationalName(e.target.value)}
                      />
                    </Col>
                    <Col lg="6">
                      {/* <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          Email address
                        </label>
                        <Input
                          id="input-email"
                          value={email}
                          type="email"
                          onChange={e => setEmail(e.target.value)}
                        />
                      </FormGroup> */}
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
                    {/*
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-address"
                        >
                          Address
                        </label>
                        <Input
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          id="input-address"
                          placeholder="Home Address"
                          type="text"
                          onChange={e => setOfficeAddressCity(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-city"
                        >
                          City
                        </label>
                        <Input
                          defaultValue="New York"
                          id="input-city"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-country"
                        >
                          Country
                        </label>
                        <Input
                          defaultValue="United States"
                          id="input-country"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-country"
                        >
                          Postal code
                        </label>
                        <Input
                          id="input-postal-code"
                          placeholder="Postal code"
                          type="number"
                        />
                      </FormGroup>
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
                      <FormGroup>
                        <label className="form-control-label">
                          Title
                        </label>
                        <Input
                          id="title"
                          value={title}
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label">
                          Company Phone
                        </label>
                        <Input
                          id="companyPhone"
                          value="+372 77645322"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label">
                          Company Code
                        </label>
                        <Input
                          id="input-postal-code"
                          value={companyCode}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label">
                          Business Unit
                        </label>
                        <Input
                          id="input-postal-code"
                          value={businessUnit}
                          type="text"
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label">
                          Cost Center
                        </label>
                        <Input
                          id="input-postal-code"
                          value={costCenter}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="4">
                      <FormGroup>
                        <label className="form-control-label">
                          Management Group
                        </label>
                        <Input
                          id="input-postal-code"
                          value={managementGroup}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row> */}


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