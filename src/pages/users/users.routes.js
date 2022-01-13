import { CreateEmployeePage, SearchEmployeesPage, EmployeeDetailsPage } from ".";

export const userMenu = [
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
        component: SearchEmployeesPage,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: false,
    global: true,
    path: "/users/employee-details/:id",
    component: EmployeeDetailsPage,
    layout: "/admin",
  },
];
