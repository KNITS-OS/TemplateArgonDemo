import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router";

import { useParams } from "react-router-dom";

import { Button, Card, CardBody, CardHeader, Col, Container, Form, Row } from "reactstrap";

import SweetAlert from "react-bootstrap-sweetalert";

import { GradientEmptyHeader } from "components/headers";
import { InputField } from "components/widgets";

import { searchEmployeesByIds } from "redux/employees";
import { deactivateGroup, deleteGroup, searchGroup, updateGroup } from "redux/groups";

import { MembersPanel } from "..";

export const GroupDetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const groupsState = useSelector(state => state.group);
  const employeesState = useSelector(state => state.employee);

  const [alert, setAlert] = useState(groupsState.isError);
  const [group, setGroup] = useState(groupsState.entity);

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

  const onToggleGroupActive = () => {
    dispatch(deactivateGroup(id));
  };
  const onDelete = () => {
    dispatch(deleteGroup(id));
  };

  return (
    <>
      <GradientEmptyHeader />
      {alert}
      <Container className="mt--6" fluid>
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
                    </div>

                    <MembersPanel group={group} setGroup={setGroup} />

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
      </Container>
    </>
  );
};
