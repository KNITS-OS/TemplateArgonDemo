import PropTypes from "prop-types";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Form,
  Row,
} from "reactstrap";

import { InputField } from "components/widgets";

import { AddMemberPanel } from ".";

export const CreateGroupPanel = ({
  group,
  setGroup,
  onSave,
  addMembersCollapse,
  setAddMembersCollapse,
}) => {
  const { name, description } = group;

  return (
    <Row>
      <Col className="order-xl-1" xl="12">
        <Card>
          <CardHeader>
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Create Group</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <h6 className="heading-small text-muted mb-4">
                Group information
              </h6>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="10">
                    <InputField
                      id="input-group-name"
                      label="Group Name"
                      value={name}
                      type="text"
                      onChange={e =>
                        setGroup({ ...group, name: e.target.value })
                      }
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg="10">
                    <InputField
                      id="input-group-description"
                      label="Group Description"
                      value={description}
                      type="text"
                      onChange={e =>
                        setGroup({ ...group, description: e.target.value })
                      }
                    />
                  </Col>
                </Row>

                <Row className="d-flex justify-content-between mx-2">
                  <h6 className="heading-small text-muted mb-4">
                    MEMBERS
                  </h6>
                  <ButtonGroup className="d-flex">
                    <Button
                      onClick={e =>
                        setAddMembersCollapse(!addMembersCollapse)
                      }
                      color="success"
                      type="button"
                    >
                      Add new Members
                    </Button>
                  </ButtonGroup>
                </Row>

                <Row>
                  <Col lg="12">
                    {/* <MembersTableComps data={group.members} /> */}
                    <Collapse isOpen={addMembersCollapse}>
                      <AddMemberPanel
                        onChangeRole={e => console.log(e)}
                        onChangeCountry={e => console.log(e)}
                        onChangeBusinessUnit={e => console.log(e)}
                        onSelectCareMember={e => console.log(e)}
                      />
                    </Collapse>
                  </Col>
                </Row>
              </div>
              <Row className="align-items-center py-4">
                <Col lg="12" xs="7" className="text-right">
                  <Button color="success" onClick={onSave}>
                    Create
                  </Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

CreateGroupPanel.propTypes = {
  group: PropTypes.object,
  setGroup: PropTypes.func,
  onSave: PropTypes.func,
  addMembersCollapse: PropTypes.bool,
  setAddMembersCollapse: PropTypes.func,
};
