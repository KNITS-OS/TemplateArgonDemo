import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Container } from "reactstrap";

import SweetAlert from "react-bootstrap-sweetalert";

import { GradientEmptyHeader } from "components/Headers";

import { createGroup } from "redux/groups";

import { EditGroupPanel } from "..";

export const CreateGroupPage = () => {
  const initialState = {
    name: "",
    description: "",
    members: [],
    active: true,
  };
  const dispatch = useDispatch();
  const groupsState = useSelector(state => state.group);

  const [group, setGroup] = useState(initialState);
  const [addMembersCollapse, setAddMembersCollapse] = useState(false);
  const [alert, setAlert] = useState(groupsState.isError);

  useEffect(() => {
    if (groupsState.isError) {
      setAlert(
        <SweetAlert danger title="Error" onConfirm={() => setAlert(false)}>
          {groupsState.errorMessage}
        </SweetAlert>
      );
    }
  }, [groupsState.isError, groupsState.errorMessage]);

  const onSave = () => {
    dispatch(createGroup(group));
  };

  useEffect(() => {
    if (groupsState.entity) {
      setAlert(
        <SweetAlert success title="Success" onConfirm={() => setAlert(false)}>
          Group Created
        </SweetAlert>
      );
    }
  }, [groupsState.entity]);
  return (
    <>
      <GradientEmptyHeader />
      {alert}

      <Container className="mt--6" fluid>
        {group && (
          <EditGroupPanel
            group={group}
            setGroup={setGroup}
            onSave={onSave}
            groupsState={groupsState}
            addMembersCollapse={addMembersCollapse}
            setAddMembersCollapse={setAddMembersCollapse}
          />
        )}
      </Container>
    </>
  );
};
