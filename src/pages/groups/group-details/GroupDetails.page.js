import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Container,
  Form,
  Row,
  Spinner,
} from "reactstrap";

import SweetAlert from "react-bootstrap-sweetalert";
import { useParams } from "react-router-dom";

import { GradientEmptyHeader } from "components/Headers";
import { InputField, ReactTable } from "components/widgets";

import { employeesTableColumns } from "pages/users";

import { searchEmployeesByIds } from "redux/employees";
import { searchGroup, deactivateGroup, updateGroup, deleteGroup } from "redux/groups";

import { AddMemberPanel } from "..";

export const GroupDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const groupsState = useSelector(state => state.group);
  const employeesState = useSelector(state => state.employee);

  const [alert, setAlert] = useState(groupsState.isError);
  const [group, setGroup] = useState(groupsState.entity);

  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [currentMembersCollapse, setCurrentMembersCollapse] = useState(false);
  const [addMemberCollapse, setAddMemberCollapse] = useState(false);

  useEffect(() => {
    dispatch(searchGroup(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (groupsState.entity) {
      setGroup(groupsState.entity);
      dispatch(searchEmployeesByIds(groupsState.entity.members));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupsState.entity]);

  useEffect(() => {
    if (groupsState.isError) {
      setAlert(
        <SweetAlert danger title="Error" onConfirm={() => setAlert(false)}>
          {groupsState.errorMessage}
        </SweetAlert>
      );
    }
  }, [groupsState.isError, groupsState.errorMessage]);

  useEffect(() => {
    if (employeesState.isError) {
      setAlert(
        <SweetAlert danger title="Error" onConfirm={() => setAlert(false)}>
          {employeesState.errorMessage}
        </SweetAlert>
      );
    }
  }, [employeesState.isError, employeesState.errorMessage]);

  const onSave = () => {
    dispatch(updateGroup(id, group));
    if (groupsState.isSuccess) {
      setAlert(
        <SweetAlert success title="Success" onConfirm={() => setAlert(false)}>
          Group Updated
        </SweetAlert>
      );
    }
  };

  const toggleCurrentMembers = () => {
    setCurrentMembersCollapse(!currentMembersCollapse);
    setAddMemberCollapse(false);
  };

  const toggleAddMember = () => {
    setAddMemberCollapse(!addMemberCollapse);
    setCurrentMembersCollapse(false);
  };

  const memberDetails = e => {
    const { id } = e.target;
    history.push(`/admin/users/employee-details/${id}`);
  };

  const memberRemove = () => {};

  const onToggleGroupActive = () => {
    dispatch(deactivateGroup(id));
  };
  const onDelete = () => {
    dispatch(deleteGroup(id));
  };

  // @todo make this component smaller with EditGroup.panel.js
  // @todo make back to search work
  return (
    <>
      <GradientEmptyHeader />
      {alert}
      <Container className="mt--6" fluid>
        {groupsState.isLoading ? (
          <Spinner />
        ) : (
          <>
            {group && (
              <Row>
                <Col className="order-xl-1" xl="12">
                  <Card>
                    <CardHeader>
                      <Row className="align-items-center">
                        <Col xs="8">
                          <h3 className="mb-0">Group Details</h3>
                        </Col>
                      </Row>
                      <Row className="align-items-center py-4">
                        <Col lg="12" xs="7" className="text-right">
                          {group && group.active ? (
                            <Button type="button" color="danger" onClick={onToggleGroupActive}>
                              Deactivate Group
                            </Button>
                          ) : (
                            <Button type="button" color="success" onClick={onToggleGroupActive}>
                              Activate Group
                            </Button>
                          )}
                          <Button type="button" color="info" onClick={() => history.goBack()}>
                            Back to Search
                          </Button>
                        </Col>
                      </Row>
                    </CardHeader>

                    <CardBody>
                      <Form>
                        <h6 className="heading-small text-muted mb-4">Group Details</h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="10">
                              <InputField
                                id="input-group-name"
                                label="Group Name"
                                value={group.name}
                                type="text"
                                onChange={e =>
                                  setGroup({
                                    ...group,
                                    name: e.target.value,
                                  })
                                }
                              />
                            </Col>
                          </Row>

                          <Row>
                            <Col lg="10">
                              <InputField
                                id="input-group-description"
                                label="Group Description"
                                value={group.description}
                                type="text"
                                onChange={e =>
                                  setGroup({
                                    ...group,
                                    description: e.target.value,
                                  })
                                }
                              />
                            </Col>
                          </Row>

                          <Row>
                            <Col lg="12">
                              <Collapse isOpen={addMemberCollapse}>
                                <AddMemberPanel
                                  // eslint-disable-next-line no-console
                                  onChangeRole={e => console.log(e)}
                                  // eslint-disable-next-line no-console
                                  onChangeCountry={e => console.log(e)}
                                  onChangeBusinessUnit={e =>
                                    // eslint-disable-next-line no-console
                                    console.log(e)
                                  }
                                  // eslint-disable-next-line no-console
                                  onSelectCareMember={e => console.log(e)}
                                />
                              </Collapse>
                            </Col>
                          </Row>
                        </div>

                        <ButtonGroup className="d-flex">
                          <Button onClick={toggleAddMember} color="success">
                            Add new Member
                          </Button>
                          <Button
                            onClick={toggleCurrentMembers}
                            disabled={group.members.length === 0}
                            color="info"
                          >
                            {currentMembersCollapse ? "Hide members" : "Show members"} (
                            {group.members.length} members)
                          </Button>
                        </ButtonGroup>

                        <Row>
                          <Col lg="12">
                            <Collapse isOpen={currentMembersCollapse}>
                              <Card>
                                <CardHeader>
                                  <h3 className="mb-0">Group members</h3>
                                  <p className="text-sm mb-0">Care Members</p>
                                </CardHeader>

                                {employeesState.isLoading ? (
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
                                    onViewDetailsClick={memberDetails}
                                    onDeleteItemClick={memberRemove}
                                    selectedRows={selectedEmployees}
                                    setSelectedRows={setSelectedEmployees}
                                  />
                                )}
                              </Card>
                            </Collapse>
                          </Col>
                        </Row>

                        <hr className="my-4" />

                        <div className="pl-lg-4">
                          <Row>
                            <Button color="primary" onClick={onSave}>
                              Save
                            </Button>
                            <Button color="danger" onClick={onDelete}>
                              Delete group
                            </Button>
                          </Row>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )}
          </>
        )}
      </Container>
    </>
  );
};
