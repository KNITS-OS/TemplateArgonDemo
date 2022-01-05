import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Row,
  Spinner,
} from "reactstrap";

import ReactTable from "components/widgets/react-table/ReactTable";

import { searchGroups, deleteGroup } from "redux/groups/group.actions";
import groupsTableColumns from "./SearchGroups.table";
import GradientEmptyHeader from "components/Headers/GradientEmptyHeader";

const SearchGroupsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const groupsState = useSelector(state => state.group);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [alert, setAlert] = useState(groupsState.isError);

  useEffect(() => {
    if (groupsState.isError) {
      setAlert(
        <SweetAlert danger title="Error" onConfirm={() => setAlert(false)}>
          {groupsState.errorMessage}
        </SweetAlert>,
      );
    }
  }, [groupsState.isError, groupsState.errorMessage]);

  const goToGroupDetails = e => {
    var { id } = e.target;
    history.push(`/admin/groups/group-details/${id}`);
  };

  const removeGroup = e => {
    var { id } = e.target;
    dispatch(deleteGroup(id));
  };

  const findByAllParameters = () => {
    dispatch(searchGroups());
  };

  return (
    <>
      {alert}
      <GradientEmptyHeader />
      <Container className="mt--6" fluid>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Search Groups</h3>
                <p className="text-sm mb-0">Search</p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="2">
                    <FormGroup>
                      <button
                        style={{
                          marginTop: "32px",
                          marginLeft: "32px",
                          height: "40px",
                        }}
                        className="btn btn-info"
                        type="button"
                        onClick={findByAllParameters}
                      >
                        Search
                      </button>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>

        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">Groups</h3>
                <p className="text-sm mb-0">Groups</p>
              </CardHeader>
              {groupsState.isLoading ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Spinner />
                </div>
              ) : (
                <ReactTable
                  data={groupsState.entities}
                  keyField="id"
                  columns={groupsTableColumns}
                  onViewDetails={goToGroupDetails}
                  onDeleteItem={removeGroup}
                  selectedRows={selectedGroups}
                  setSelectedRows={setSelectedGroups}
                />
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default SearchGroupsPage;