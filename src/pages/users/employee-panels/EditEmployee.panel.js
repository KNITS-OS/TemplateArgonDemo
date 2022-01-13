import { Button, Card, CardBody, CardHeader, Col, Row, Spinner } from "reactstrap";

import PropTypes from "prop-types";

import { InputField } from "components/widgets";

export const EditEmployeePanel = ({
  employee,
  setEmployee,
  onSave,
  onBackToSearchClick,
  employeesState,
}) => {
  const {
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
  } = employee;

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
            <h6 className="heading-small text-muted mb-4">User information</h6>
            <div className="pl-lg-4">
              <Row>
                <Col lg="6">
                  <InputField
                    id="input-first-name"
                    label="First name"
                    value={firstName}
                    type="text"
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        firstName: e.target.value,
                      })
                    }
                  />
                </Col>

                <Col lg="6">
                  <InputField
                    id="input-last-name"
                    label="Last Name"
                    value={lastName}
                    type="text"
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        lastName: e.target.value,
                      })
                    }
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
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        internationalName: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col lg="6">
                  <InputField
                    id="input-email"
                    label="Email Address"
                    value={email}
                    type="text"
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        email: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
            </div>

            <hr className="my-4" />

            <h6 className="heading-small text-muted mb-4">Contact information</h6>
            <div className="pl-lg-4">
              <Row>
                <Col md="12">
                  <InputField
                    id="input-address"
                    label="Office Street"
                    value={officeAddressStreet}
                    type="text"
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        officeAddressStreet: e.target.value,
                      })
                    }
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
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        officeAddressCity: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col lg="4">
                  <InputField
                    id="input-country"
                    label="Office Country"
                    value={officeAddressCountry}
                    type="text"
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        officeAddressCountry: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col lg="4">
                  <InputField
                    id="input-postal-code"
                    label="Office Postal code"
                    value={officeAddressPostalCode}
                    type="text"
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        officeAddressPostalCode: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
            </div>
            <hr className="my-4" />

            <h6 className="heading-small text-muted mb-4">Company Data</h6>
            <div className="pl-lg-4">
              <Row>
                <Col lg="4">
                  <InputField
                    id="input-title"
                    label="Job Title"
                    value={title}
                    type="text"
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        title: e.target.value,
                      })
                    }
                  />
                </Col>

                <Col lg="4">
                  <InputField
                    id="input-company-phone"
                    label="Company Phone"
                    value={companyPhone}
                    type="text"
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        companyPhone: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col lg="4">
                  <InputField
                    id="input-company-code"
                    label="Company Code"
                    value={companyCode}
                    type="text"
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        companyCode: e.target.value,
                      })
                    }
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
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        businessUnit: e.target.value,
                      })
                    }
                  />
                </Col>

                <Col lg="4">
                  <InputField
                    id="input-cost-center"
                    label="Cost Center"
                    value={costCenter}
                    type="text"
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        costCenter: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col lg="4">
                  <InputField
                    id="input-management-group"
                    label="Management Group"
                    value={managementGroup}
                    type="text"
                    onChange={e =>
                      setEmployee({
                        ...employee,
                        managementGroup: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>

              <Row className="align-items-center py-4">
                <Col lg="12" xs="7" className="text-right">
                  <Button type="button" color="success" onClick={() => onSave(employee)}>
                    {employeesState.isLoading ? <Spinner /> : "Submit"}
                  </Button>

                  {onBackToSearchClick ? (
                    <Button type="button" color="info" onClick={onBackToSearchClick}>
                      Back to Search
                    </Button>
                  ) : (
                    <>&nbsp;</>
                  )}
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

EditEmployeePanel.propTypes = {
  employee: PropTypes.object.isRequired,
  setEmployee: PropTypes.func.isRequired,
  employeesState: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onBackToSearchClick: PropTypes.func.isRequired,
};
