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

// react library for routing
import { useEffect, useRef } from "react";
import { useLocation, Switch, Redirect } from "react-router-dom";

import { routes } from "routes";
import { AuthNavbar } from "components/Navbars";
import { AuthFooter } from "components/Footers";

import { getRoutes } from "./utils";

export const AuthLayout = () => {
  const location = useLocation();
  const mainContentRef = useRef(null);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
    document.body.classList.add("bg-default");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("bg-default");
    };
  });
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, [location]);

  return (
    <>
      <div className="main-content" ref={mainContentRef}>
        <AuthNavbar />
        <Switch>
          {getRoutes(routes, "/auth")}
          <Redirect from="*" to="/auth/login" />
        </Switch>
      </div>
      <AuthFooter />
    </>
  );
};
