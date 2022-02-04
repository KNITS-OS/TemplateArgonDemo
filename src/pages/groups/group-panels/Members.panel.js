import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Row, Col, Collapse, Spinner, Card, CardHeader, ButtonGroup, Button } from "reactstrap";

import { selectEmployeesState, selectEmployeesByIds } from "redux/employees";

import { ReactTable } from "components/widgets";

import { employeesTableColumns, EMPLOYEE_DETAILS } from "pages/users";

import { AddMemberPanel } from ".";

export const MembersPanel = ({ group, setGroup }) => {
  const history = useHistory();

  const groupsState = useSelector(state => state.group);
  const employeesState = useSelector(selectEmployeesState);
  const groupMembers = useSelector(selectEmployeesByIds(group.members));

  const currentRole = "admin"; //TO GET FROM SELECTORS

  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [currentMembersCollapse, setCurrentMembersCollapse] = useState(false);
  const [addMemberCollapse, setAddMemberCollapse] = useState(false);

  const tableRef = useRef();

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
    history.push(`/${currentRole}${EMPLOYEE_DETAILS}/${id}`);
  };

  const memberRemove = () => {};

  return (
    <>
      <ButtonGroup className="d-flex">
        <Button onClick={toggleAddMember} color="success">
          Add new Member
        </Button>
        <Button onClick={toggleCurrentMembers} disabled={group.members.length === 0} color="info">
          {currentMembersCollapse ? "Hide members" : "Show members"} ({group.members.length}{" "}
          members)
        </Button>
      </ButtonGroup>

      <Row>
        <Col lg="12">
          <Collapse isOpen={addMemberCollapse}>
            <AddMemberPanel
              group={group}
              setGroup={setGroup}
              selectedRows={selectedEmployees}
              setSelectedRows={setSelectedEmployees}
              tableRef={tableRef}
            />
            {groupsState.isLoading ? (
              <div className="text-center">
                <Spinner />
              </div>
            ) : (
              <ReactTable
                data={employeesState.entities}
                keyField="id"
                columns={employeesTableColumns}
                selectedRows={selectedEmployees}
                setSelectedRows={setSelectedEmployees}
                tableRef={tableRef}
                searchBarPlaceholder="Filter results"
              />
            )}
          </Collapse>
        </Col>
      </Row>

      <Row>
        <Col lg="12">
          <Collapse isOpen={currentMembersCollapse}>
            <Card>
              <CardHeader>
                <h3 className="mb-0">Group members</h3>
                <p className="text-sm mb-0">Care Members</p>
              </CardHeader>

              {employeesState.isLoading && !groupMembers ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner />
                </div>
              ) : (
                <ReactTable
                  data={groupMembers}
                  keyField="id"
                  columns={employeesTableColumns}
                  onViewDetailsClick={memberDetails}
                  onDeleteItemClick={memberRemove}
                  selectedRows={selectedEmployees}
                  setSelectedRows={setSelectedEmployees}
                  searchBarPlaceholder="Filter results"
                />
              )}
            </Card>
          </Collapse>
        </Col>
      </Row>
    </>
  );
};

MembersPanel.propTypes = {
  group: PropTypes.object.isRequired,
  setGroup: PropTypes.func.isRequired,
};
