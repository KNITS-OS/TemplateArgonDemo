import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

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
  const history = useHistory();

  const [group, setGroup] = useState(initialState);
  const [addMembersCollapse, setAddMembersCollapse] = useState(false);

  const onCreate = () => {
    dispatch(createGroup(group));
    history.push("/admin/search-groups");
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
