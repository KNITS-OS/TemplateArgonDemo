import React, { useState } from "react";

import { Container } from "reactstrap";

import { CreateGroupPanel } from "..";

export const CreateGroupPage = () => {
  const initialState = {
    name: "",
    description: "",
    members: [],
    active: true,
  };

  const [group, setGroup] = useState(initialState);
  const [addMembersCollapse, setAddMembersCollapse] = useState(false);

  const onSave = createdGroup => {
    console.log("createdGroup", createdGroup);
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
          onSave={onSave}
          addMembersCollapse={addMembersCollapse}
          setAddMembersCollapse={setAddMembersCollapse}
        />
      </Container>
    </>
  );
};
