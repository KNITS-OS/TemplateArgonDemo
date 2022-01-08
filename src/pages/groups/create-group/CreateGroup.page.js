import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch } from "react-redux";

import { Container } from "reactstrap";

import { createGroup } from "redux/groups";

import { CreateGroupPanel } from "..";

export const CreateGroupPage = () => {
  const initialState = {
    name: "",
    description: "",
    members: [],
    active: true,
  };
  const dispatch = useDispatch();

  const [group, setGroup] = useState(initialState);
  const [addMembersCollapse, setAddMembersCollapse] = useState(false);
  const [alert, setAlert] = useState(false);

  const onCreate = () => {
    dispatch(createGroup(group));
    setAlert(
      <SweetAlert
        success
        title="Success"
        onConfirm={() => setAlert(false)}
      >
        Group Created
      </SweetAlert>,
    );
  };

  return (
    <>
      <div
        className="header pb-6 d-flex align-items-center"
        style={{
          minHeight: "100px",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span className="mask bg-gradient-info opacity-8" />
      </div>
      {alert}

      <Container className="mt--6" fluid>
        <CreateGroupPanel
          group={group}
          setGroup={setGroup}
          onSave={onCreate}
          addMembersCollapse={addMembersCollapse}
          setAddMembersCollapse={setAddMembersCollapse}
        />
      </Container>
    </>
  );
};
