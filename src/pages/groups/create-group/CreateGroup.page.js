import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "reactstrap";

import { createGroup } from "redux/groups";

import { ErrorAlert, SuccessAlert } from "components/alerts";
import { GradientEmptyHeader } from "components/headers";

import { GroupPanel } from "..";

export const CreateGroupPage = () => {
  const initialState = {
    id: -1,
    name: "",
    description: "",
    members: [],
    active: true,
  };
  const dispatch = useDispatch();
  const groupsState = useSelector(state => state.group);

  const [group, setGroup] = useState(initialState);
  const [alert, setAlert] = useState(null);
  const [saveSent, setSaveSent] = useState(false);

  useEffect(() => {
    if (groupsState.isError && saveSent) {
      setAlert(<ErrorAlert setAlert={setAlert}>{groupsState.errorMessage}</ErrorAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupsState.isError, groupsState.errorMessage]);

  useEffect(() => {
    if (groupsState.entity && saveSent) {
      setAlert(<SuccessAlert setAlert={setAlert}>Group Created</SuccessAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupsState.entity]);

  const onCreate = () => {
    dispatch(createGroup(group));
    setSaveSent(true);
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
            onSave={onCreate}
            groupsState={groupsState}
          />
        )}
      </Container>
    </>
  );
};
