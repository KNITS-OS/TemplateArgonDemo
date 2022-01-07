import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

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
} from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { GradientEmptyHeader } from "components/Headers";
import { InputField, pagination } from "components/widgets";

import {
  selectGroupById,
  deactivateGroup,
  updateGroup,
} from "redux/groups";
import { searchEmployeesByIds } from "redux/employees";

import { AddMemberPanel } from "..";

const { SearchBar } = Search;

export const GroupDetailsPage = () => {
  let { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const currentGroup = useSelector(selectGroupById(id));
  const groupMembers = useSelector(state => state.employee.entities);
  const [group, setGroup] = useState(currentGroup);
  const [currentMembersCollapse, setCurrentMembersCollapse] =
    useState(false);
  const [addMemberCollapse, setAddMemberCollapse] = useState(false);

  if (!group) {
    throw new Error("Group not found");
  }

  const { name, description, active, members } = group;

  useEffect(() => {
    dispatch(searchEmployeesByIds(currentGroup.members));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSave = () => {
    dispatch(updateGroup(group));
  };

  const onBackToSearch = () => {
    history.push("/admin/search-groups");
  };

  const toggleCurrentMembers = () => {
    setCurrentMembersCollapse(!currentMembersCollapse);
    setAddMemberCollapse(false);
  };

  const toggleAddMember = () => {
    setAddMemberCollapse(!addMemberCollapse);
    setCurrentMembersCollapse(false);
  };

  const formatActionButtonCell = (cell, row) => {
    return (
      <>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          type="button"
          color="info"
          onClick={memberDetails}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-badge" />
          </span>
        </Button>
        <Button
          id={row.id}
          className="btn-icon btn-2"
          color="danger"
          type="button"
          onClick={memberRemove}
        >
          <span id={row.id} className="btn-inner--icon">
            <i id={row.id} className="ni ni-fat-remove" />
          </span>
        </Button>
      </>
    );
  };

  const memberDetails = e => {
    var { id } = e.target;
    history.push("/admin/users/employee-details/" + id);
  };

  const memberRemove = e => {
    var { id } = e.target;
    console.log(id);
  };

  const onToggleGroupActive = () => {
    dispatch(deactivateGroup(parseInt(id)));
  };

  return (
    <>
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
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
                    {group && active ? (
                      <Button
                        type="button"
                        color="danger"
                        onClick={onToggleGroupActive}
                      >
                        Deactivate Group
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        color="success"
                        onClick={onToggleGroupActive}
                      >
                        Activate Group
                      </Button>
                    )}
                    <Button
                      type="button"
                      color="info"
                      onClick={onBackToSearch}
                    >
                      Back to Search
                    </Button>
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Group Details
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
                            onChangeRole={e => console.log(e)}
                            onChangeCountry={e => console.log(e)}
                            onChangeBusinessUnit={e => console.log(e)}
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
                      disabled={members.length === 0}
                      color="info"
                    >
                      {currentMembersCollapse
                        ? "Hide members"
                        : "Show members"}{" "}
                      ({members.length} members)
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

                          <ToolkitProvider
                            data={groupMembers}
                            keyField="firstName"
                            columns={[
                              {
                                dataField: "firstName",
                                text: "First Name",
                                hidden: true,
                              },
                              {
                                dataField: "lastName",
                                text: "lastName",
                                hidden: true,
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
                                style: { width: "50px" },
                              },
                              {
                                dataField: "businessUnit",
                                text: "bUnit",
                                sort: true,
                                style: { width: "50px" },
                              },
                              {
                                dataField: "companyCode",
                                text: "companyCode",
                                sort: true,
                                style: { width: "50px" },
                              },
                              {
                                dataField: "costCenter",
                                text: "costCenter",
                                sort: true,
                              },
                              {
                                dataField: "country",
                                text: "country",
                                sort: true,
                              },
                              {
                                dataField: "hiringDate",
                                text: "hiringDate",
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
                              <>
                                <div className="py-4 table-responsive">
                                  <div
                                    id="datatable-basic_filter"
                                    className="dataTables_filter px-4 pb-1"
                                  >
                                    <label>
                                      Search:
                                      <SearchBar
                                        className="form-control-sm"
                                        placeholder="Filter results"
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
                              </>
                            )}
                          </ToolkitProvider>
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
                      <Button color="danger" onClick={onSave}>
                        Delete group
                      </Button>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
