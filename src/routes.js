/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

//final pages
import EmployeesTabPage from "views/pages/users/EmployeesTabPage";
import GroupsTabPage from "views/pages/groups/GroupsTabPage";

import GroupDetailsPage from "views/pages/groups/GroupDetailsPage";
import EmployeeDetailsPage from "views/pages/users/EmployeeDetailsPage";

const routes = [
  /* Users */
  {
    collapse: false,
    icon: "ni ni-circle-08 text-info",
    path: "/users",
    component: EmployeesTabPage,
    layout: "/admin",
  },
  /* Groups */
  {
    collapse: false,
    icon: "ni ni-chart-pie-35 text-info",
    path: "/groups",
    component: GroupsTabPage,
    layout: "/admin",
  },
  /* Details Routes*/
  {
    collapse: false,
    global: true,
    path: "/users/employee-details/:id",
    component: EmployeeDetailsPage,
    layout: "/admin",
  },
  {
    collapse: false,
    global: true,
    path: "/groups/group-details/:id",
    component: GroupDetailsPage,
    layout: "/admin",
  },
];

export default routes;
