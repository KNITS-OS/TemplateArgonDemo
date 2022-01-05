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
import PropTypes from "prop-types";

import { InputField } from "components/widgets";
import { AddMemberPanel } from ".";

export const EditGroupPanel = (
  group,
  setGroup,
  onSave,
  onBackToSearchClick,
  addMembersCollapse,
  setAddMembersCollapse,
) => {
  if (!group) {
    throw new Error("Group not found");
  }

  const { name, description, active, members } = group;

  const onSaveClick = () => {
    let updatedGroup = {
      name,
      description,
      active,
      members,
    };
    onSave(updatedGroup);
  };
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
                        onchangeRole={e => console.log(e)}
                        onchangeCountry={e => console.log(e)}
                        onchangeBunit={e => console.log(e)}
                        onSelectCareMember={e => console.log(e)}
                      />
                    </Collapse>
                  </Col>
                </Row>
              </div>
              <Row className="align-items-center py-4">
                <Col lg="12" xs="7" className="text-right">
                  <Button color="success" onClick={onSaveClick}>
                    Submit
                  </Button>

                  {onBackToSearchClick ? (
                    <Button color="info" onClick={onBackToSearchClick}>
                      Back to Search
                    </Button>
                  ) : (
                    <> &nbsp;</>
                  )}
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

EditGroupPanel.propTypes = {
  group: PropTypes.object,
  setGroup: PropTypes.func,
  onSave: PropTypes.func,
  onBackToSearchClick: PropTypes.func,
  addMembersCollapse: PropTypes.bool,
  setAddMembersCollapse: PropTypes.func,
};
