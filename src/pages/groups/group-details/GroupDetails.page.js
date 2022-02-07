import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

import { Container } from "reactstrap";

import { searchEmployeesByIds } from "redux/employees";
import { deactivateGroup, deleteGroup, searchGroup, updateGroup } from "redux/groups";

import { ErrorAlert, SuccessAlert } from "components/alerts";
import { GradientEmptyHeader } from "components/headers";

import { GroupPanel } from "..";

export const GroupDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const groupsState = useSelector(state => state.group);
  const employeesState = useSelector(state => state.employee);

  const [alert, setAlert] = useState(null);
  const [saveSent, setSaveSent] = useState(false);
  const [employeesSent, setEmployeesSent] = useState(false);
  const [group, setGroup] = useState(groupsState.entity);

  useEffect(() => {
    dispatch(searchGroup(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (groupsState.entity) {
      setGroup(groupsState.entity);
      dispatch(searchEmployeesByIds(groupsState.entity.members));
      setEmployeesSent(true);
      if (saveSent) {
        setAlert(<SuccessAlert setAlert={setAlert}>Group Saved</SuccessAlert>);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupsState.entity]);

  useEffect(() => {
    if (groupsState.isError && saveSent) {
      setAlert(<ErrorAlert setAlert={setAlert}>{groupsState.errorMessage}</ErrorAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupsState.isError, groupsState.errorMessage]);

  useEffect(() => {
    if (employeesState.isError && employeesSent) {
      setAlert(<ErrorAlert setAlert={setAlert}>{employeesState.errorMessage}</ErrorAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeesState.isError, employeesState.errorMessage]);

  const onSave = () => {
    dispatch(updateGroup(id, group));
    setSaveSent(true);
  };

  const onToggleGroupActive = () => {
    dispatch(deactivateGroup(id));
  };

  const onDelete = () => {
    dispatch(deleteGroup(id));
  };

  const onBackToSearchClick = () => {
    history.goBack();
  };

  return (
    <>
      <GradientEmptyHeader />
      {alert}

      <Container className="mt--6" fluid>
        {group && (
          <GroupPanel
            group={group}
            setGroup={setGroup}
            onSave={onSave}
            onDeleteGroup={onDelete}
            onToggleGroupActive={onToggleGroupActive}
            groupsState={groupsState}
            onBackToSearchClick={onBackToSearchClick}
          />
        )}
      </Container>
    </>
  );
};
