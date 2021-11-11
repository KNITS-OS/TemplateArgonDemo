/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// core components
import AdminFooter from "components/Footers/AdminFooter";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import { useSidenav } from "context";
import { useToggleSidenav } from "hooks";
import { useRef } from "react";
// react library for routing
import { Redirect, Switch, useLocation } from "react-router-dom";
// import Logo from "assets/img/brand/Logo.png";
import routes from "routes";
import { Theme } from "types/types";
import { getRoutes } from "./GetRoutes";
import ScrollToTop from "./ScrollToTop";

const Admin = () => {
  const location = useLocation();
  const mainContentRef = useRef(document.createElement("div"));
  const { sidenavOpen } = useSidenav();
  const { toggleSidenav } = useToggleSidenav();

  ScrollToTop(mainContentRef);

  const getNavbarTheme = (): Theme => {
    return location.pathname.indexOf("admin/alternative-dashboard") === -1
      ? "dark"
      : "light";
  };

  return (
    <>
      <Sidebar
        routes={routes}
        logo={{
          innerLink: "/",
          outerLink: "/",
          imgSrc: require("assets/img/brand/Logo.png").default,
          imgAlt: "...",
        }}
        rtlActive={false}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar theme={getNavbarTheme()} />
        <Switch>
          {getRoutes(routes, "/admin")}
          <Redirect from="*" to="/admin/dashboard" />
        </Switch>
        <AdminFooter />
      </div>
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
  );
};

export default Admin;
