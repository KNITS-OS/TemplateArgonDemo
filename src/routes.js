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
import Buttons from "views/pages/examples/components/Buttons.js";
import Calendar from "views/pages/examples/components/Calendar.js";
import Cards from "views/pages/examples/components/Cards.js";
import Components from "views/pages/examples/forms/Components.js";
import Elements from "views/pages/examples/forms/Elements.js";
import Validation from "views/pages/examples/forms/Validation.js";
import Notifications from "views/pages/examples/components/Notifications.js";
import Timeline from "views/pages/examples/components/Timeline.js";
import Typography from "views/pages/examples/components/Typography.js";
import Pricing from "views/pages/examples/pages/Pricing.js";
import Profile from "views/pages/examples/pages/Profile.js";
import Icons from "views/pages/examples/components/Icons.js";


//final pages
import CreateEmployeePage from "views/demo/CreateEmployeePage.js"
import EmployeesPage from "views/demo/EmployeesPage.js"
import EmployeeDetailsPage from "views/demo/EmployeeDetailsPage.js";

import CreateGroupPage from "views/demo/CreateGroupPage.js"
import GroupsPage from "views/demo/GroupsPage.js"
import GroupDetailsPage from "views/demo/GroupDetailsPage.js"

import ChartsPage from "views/demo/ChartsPage.js"
import WorldOverviewPage from "views/demo/WorldOverviewPage.js"


import CreateEmployeeView from "views/pages/users/CreateEmployeeView.js"
import EmployeesView from "views/pages/users/EmployeesView.js"
import EmployeeDetailsView from "views/pages/users/EmployeeDetailsView.js";

import CreateGroupView from "views/pages/groups/CreateGroupView.js"
import GroupsView from "views/pages/groups/GroupsView.js"
import GroupDetailsView from "views/pages/groups/GroupDetailsView.js"

import ChartsView from "views/pages/dashboards/ChartsView.js"
import WorldOverviewView from "views/pages/dashboards/WorldOverviewView.js"


const routes = [
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
        component: CreateEmployeeView,
        layout: "/admin",
      },
      {
        path: "/search-employees",
        name: "Search Employee",
        miniName: "SE",
        component: EmployeesView,
        layout: "/admin",
      },
    ],
  },
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
        component: CreateGroupView,
        layout: "/admin",
      },
      {
        path: "/search-groups",
        name: "Search Groups",
        miniName: "SC",
        component: GroupsView,
        layout: "/admin",
      }
    ]
  },
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
        component: ChartsView,
        layout: "/admin",
      },
      {
        path: "/world-view",
        name: "World Overview",
        miniName: "WV",
        component: WorldOverviewView,
        layout: "/admin",
      },
    ],
  },
  /* */
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
      }
    ],
  },
  /* */
  {
    collapse: false,  
    global:true, 
    path: "/users/employee-details/:id",
    component: EmployeeDetailsPage,
    layout: "/admin"
  },
  {
    collapse: false,  
    global:true, 
    path: "/groups/group-details/:id",           
    component: GroupDetailsPage,
    layout: "/admin"
  },  
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
  }
];

export default routes;
