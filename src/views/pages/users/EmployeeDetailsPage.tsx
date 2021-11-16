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
import { useParams } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import { useFetchEmployeeQuery } from "../../../redux/features/employees/employeesApiSlice";

interface RouteParams {
  id: string;
}

const EmployeeDetailsPage = () => {
  let { id } = useParams<RouteParams>(); //see in routes path: "/users/employee-details/:id",

  const {
    data = [],
    isError,
    isFetching,
    isLoading,
  } = useFetchEmployeeQuery({
    id,
    select: "*",
  });

  let employee = data[0];

  if (!employee) return <div>No employee found</div>;

  const {
    firstName,
    lastName,
    internationalName,
    email,
    title,
    companyCode,
    businessUnit,
    costCenter,
    managementGroup,
  } = employee;

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        {isError && <div>Couldn't fetch data</div>}
        {employee && (
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card>
                <CardHeader>
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Employee Details</h3>
                    </Col>
                  </Row>
                  {/* <Row className="align-items-center py-4">              
                    <Col lg="12" xs="7" className="text-right">
                        <Button
                            type="button"
                            color="success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}                  
                          >
                            Invite to Care
                          </Button> 
                          <Button
                            type="button"
                            color="info"
                            href="#pablo"
                            onClick={(e) => props.history.push('/admin/employees')}                  
                          >
                            Back to Search
                          </Button>                     
                    </Col>
                  </Row> */}
                </CardHeader>
                {isLoading || isFetching ? (
                  "Loading data"
                ) : (
                  <CardBody>
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
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
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
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
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row>
                          <Col lg="6">
                            <FormGroup>
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
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
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
                              />
                            </FormGroup>
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
                        </Row>
                      </div>
                    </Form>
                  </CardBody>
                )}
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default EmployeeDetailsPage;
