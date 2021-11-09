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

//examples
import Buttons from "views/pages/examples/components/Buttons";
import Calendar from "views/pages/examples/components/Calendar";
import Cards from "views/pages/examples/components/Cards";
import Components from "views/pages/examples/forms/Components";
import Elements from "views/pages/examples/forms/Elements";
import Validation from "views/pages/examples/forms/Validation";
import Notifications from "views/pages/examples/components/Notifications";
import Timeline from "views/pages/examples/components/Timeline";
import Typography from "views/pages/examples/components/Typography";
import Pricing from "views/pages/examples/pages/Pricing";
import Profile from "views/pages/examples/pages/Profile";
import Icons from "views/pages/examples/components/Icons";

//final pages
import CreateEmployeePage from "views/pages/users/CreateEmployeePage";
import EmployeesPage from "views/pages/users/EmployeesPage";
import EmployeeDetailsPage from "views/pages/users/EmployeeDetailsPage";

import CreateGroupPage from "views/pages/groups/CreateGroupPage";
import GroupsPage from "views/pages/groups/GroupsPage";
import GroupDetailsPage from "views/pages/groups/GroupDetailsPage";

import ChartsPage from "views/pages/dashboards/ChartsPage";
import WorldOverviewPage from "views/pages/dashboards/WorldOverviewPage";
import { IRoute } from "./types/types";

const routes: IRoute[] = [
  /* Users */
  {
    collapse: true,
    name: "Users",
    icon: "ni ni-circle-08 text-info",
    state: "userCollapse",
    views: [
      {
        path: "/create-employee",
        name: "Create Employee",
        miniName: "CE",
        component: CreateEmployeePage,
        layout: "/admin",
      },
      {
        path: "/search-employees",
        name: "Search Employee",
        miniName: "SE",
        component: EmployeesPage,
        layout: "/admin",
      },
    ],
  },
  /* Groups */
  {
    collapse: true,
    name: "Groups",
    state: "groupCollapse",
    icon: "ni ni-chart-pie-35 text-info",
    views: [
      {
        path: "/create-group",
        name: "Create Group",
        miniName: "CG",
        component: CreateGroupPage,
        layout: "/admin",
      },
      {
        path: "/search-groups",
        name: "Search Groups",
        miniName: "SC",
        component: GroupsPage,
        layout: "/admin",
      },
    ],
  },
  /* Dashboard */
  {
    collapse: true,
    name: "Dashboard",
    icon: "ni ni-chart-pie-35 text-info",
    state: "dashboardCollapse",
    views: [
      {
        path: "/statistics",
        name: "Charts",
        miniName: "NB",
        component: ChartsPage,
        layout: "/admin",
      },
      {
        path: "/world-view",
        name: "World Overview",
        miniName: "WV",
        component: WorldOverviewPage,
        layout: "/admin",
      },
    ],
  },
  /* Finalized */
  {
    collapse: true,
    name: "Finalized",
    icon: "ni ni-chart-pie-35 text-info",
    state: "finalizedCollapse",
    views: [
      {
        path: "/create-employee-final",
        name: "Create Employee",
        miniName: "CE",
        component: CreateEmployeePage,
        layout: "/admin",
      },
      {
        path: "/search-employees-final",
        name: "Search Employee",
        miniName: "SE",
        component: EmployeesPage,
        layout: "/admin",
      },
      {
        path: "/create-group-final",
        name: "Create Group",
        miniName: "CG",
        component: CreateGroupPage,
        layout: "/admin",
      },
      {
        path: "/search-groups-final",
        name: "Search Groups",
        miniName: "SC",
        component: GroupsPage,
        layout: "/admin",
      },
      {
        path: "/statistics-final",
        name: "Charts",
        miniName: "NB",
        component: ChartsPage,
        layout: "/admin",
      },
      {
        path: "/world-view-final",
        name: "World Overview",
        miniName: "WV",
        component: WorldOverviewPage,
        layout: "/admin",
      },
    ],
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
  /* Examples */
  {
    collapse: true,
    name: "Examples",
    icon: "ni ni-briefcase-24 text-info",
    state: "exampleCollapse",
    layout: "/admin",
    views: [
      {
        path: "/buttons",
        name: "Buttons demo",
        miniName: "NB",
        component: Buttons,
        layout: "/admin",
      },
      {
        path: "/calendars",
        name: "calendars",
        miniName: "WV",
        component: Calendar,
        layout: "/admin",
      },
      {
        path: "/cards",
        name: "cards",
        miniName: "WV",
        component: Cards,
        layout: "/admin",
      },
      {
        path: "/components",
        name: "components",
        miniName: "WV",
        component: Components,
        layout: "/admin",
      },
      {
        path: "/elements",
        name: "elements",
        miniName: "WV",
        component: Elements,
        layout: "/admin",
      },
      {
        path: "/validation",
        name: "validation",
        miniName: "WV",
        component: Validation,
        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "notifications",
        miniName: "WV",
        component: Notifications,
        layout: "/admin",
      },
      {
        path: "/timeline",
        name: "timeline",
        miniName: "WV",
        component: Timeline,
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "typography",
        miniName: "WV",
        component: Typography,
        layout: "/admin",
      },
      {
        path: "/icons",
        name: "icons",
        miniName: "WV",
        component: Icons,
        layout: "/admin",
      },
      {
        path: "/comparePage",
        name: "compare page",
        miniName: "WV",
        component: Pricing,
        layout: "/admin",
      },
      {
        path: "/profilePage",
        name: "profile",
        miniName: "WV",
        component: Profile,
        layout: "/admin",
      },
    ],
  },
];

export default routes;
