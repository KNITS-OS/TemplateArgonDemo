import React, { useState } from "react";
import { Card, CardBody, Nav, TabContent, TabPane } from "reactstrap";
import NavItemTabButton from "views/components/NavItemTabButton";
import CreateGroupPage from "./CreateGroupPage";
import GroupsPage from "./GroupsPage";

const GroupsTabPage = () => {
  const tabId1 = "Search Groups";
  const tabId2 = "Create Group";
  const [tab, setTab] = useState(tabId1);

  return (
    <Card>
      <CardBody>
        <Nav pills style={{ marginBottom: 12 }}>
          <NavItemTabButton tabId={tabId1} tab={tab} setTab={setTab} />
          <NavItemTabButton tabId={tabId2} tab={tab} setTab={setTab} />
        </Nav>
        <TabContent activeTab={tab}>
          <TabPane tabId={tabId1}>
            <GroupsPage />
          </TabPane>
          <TabPane tabId={tabId2}>
            <CreateGroupPage />
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
};
export default GroupsTabPage;
