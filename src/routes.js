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
import groupMenu from "pages/groups/groups.routes";
import userMenu from "pages/users/users.routes";
import dashboardMenu from "pages/dashboards/dashboards.routes";

const routes = [...userMenu, ...groupMenu, ...dashboardMenu];

export default routes;
