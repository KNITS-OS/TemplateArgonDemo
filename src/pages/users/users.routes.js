import {
  CreateEmployeePage,
  SearchEmployeesPage,
  EmployeeDetailsPage,
  EMPLOYEE_SEARCH,
  EMPLOYEE_CREATE,
  EMPLOYEE_DETAILS,
} from ".";

export const userMenu = [
  {
    collapse: true,
    name: "Users",
    icon: "ni ni-circle-08 text-info",
    state: "userCollapse",
    views: [
      {
        path: EMPLOYEE_CREATE,
        name: "Create Employee",
        miniName: "CE",
        component: CreateEmployeePage,
        layout: "/admin",
      },
      {
        path: EMPLOYEE_SEARCH,
        name: "Search Employee",
        miniName: "SE",
        component: SearchEmployeesPage,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: false,
    global: true,
    path: `${EMPLOYEE_DETAILS}/:id`,
    component: EmployeeDetailsPage,
    layout: "/admin",
  },
];
