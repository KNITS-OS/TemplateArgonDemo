import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";

import { Container } from "reactstrap";

import { selectGroupById } from "redux/groups";

import { EditGroupPanel } from "..";

export const CreateGroupPage = () => {
  let { id } = useParams();
  const history = useHistory();
  const reduxGroup = useSelector(selectGroupById(id));

  const [group, setGroup] = useState(reduxGroup);
  const [addMembersCollapse, setAddMembersCollapse] = useState(false);

  const onSave = updatedGroup => {
    console.log("updatedGroup", updatedGroup);
  };

  const onBackToSearch = () => {
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
        <EditGroupPanel
          group={group}
          setGroup={setGroup}
          onBackSearchClick={onBackToSearch}
          onSave={onSave}
          addMembersCollapse={addMembersCollapse}
          setAddMembersCollapse={setAddMembersCollapse}
        />
      </Container>
    </>
  );
};
