
import CreateEmployeePage from "./create-employee/CreateEmployee.page.js";
import SearchEmployeesPage from "./search-employees/SearchEmployees.page.js";


const userMenu ={
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
  }

  export default userMenu;