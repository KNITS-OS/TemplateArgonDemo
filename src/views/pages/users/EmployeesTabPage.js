import React, { useState } from "react";
import { Card, CardBody, Nav, TabContent, TabPane } from "reactstrap";
import NavItemTabButton from "views/components/NavItemTabButton";
import CreateEmployeePage from "./CreateEmployeePage";
import EmployeesPage from "./EmployeesPage";

const EmployeesTabPage = () => {
  const tabId1 = "Search Employees";
  const tabId2 = "Create Employee";
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
            <EmployeesPage />
          </TabPane>
          <TabPane tabId={tabId2}>
            <CreateEmployeePage />
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
};
export default EmployeesTabPage;
