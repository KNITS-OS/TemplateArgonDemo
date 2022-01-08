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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Switch, Redirect } from "react-router-dom";

import { Spinner } from "reactstrap";

import { routes } from "routes";
import { Sidebar } from "components/Sidebar";
import { AdminNavbar } from "components/Navbars";
import { AdminFooter } from "components/Footers";

import { listCountries } from "redux/countries";
import { listBusinessUnits } from "redux/business-units";
import { listCharts } from "redux/charts";
import { listWorldMap } from "redux/world-map";
import { useLoadStateSweetAlert, getRoutes } from "./hooks";

export const AdminLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const countriesState = useSelector(state => state.country);
  const businessUnitsState = useSelector(state => state.businessUnit);
  const chartsState = useSelector(state => state.chart);
  const worldMapState = useSelector(state => state.worldMap);

  const [sidenavOpen, setSidenavOpen] = React.useState(true);
  const mainContentRef = React.useRef(null);

  const [categoryDataLoaded, setCategoryDataLoaded] = useState(false);
  const [alert, setAlert] = useState(
    countriesState.isError ||
      businessUnitsState.isError ||
      chartsState.isError ||
      worldMapState.isError,
  );

  const { useLoadStateSweetAlertMutation } = useLoadStateSweetAlert(
    setAlert,
    setCategoryDataLoaded,
  );

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, [location]);

  useEffect(() => {
    dispatch(listCountries());
    dispatch(listBusinessUnits());
    dispatch(listCharts());
    dispatch(listWorldMap());
  }, [dispatch]);

  useLoadStateSweetAlertMutation(countriesState);
  useLoadStateSweetAlertMutation(businessUnitsState);
  useLoadStateSweetAlertMutation(chartsState);
  useLoadStateSweetAlertMutation(worldMapState);

  const getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  // toggles collapse between mini sidenav and normal
  const toggleSidenav = e => {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
    }
    setSidenavOpen(!sidenavOpen);
  };

  const getNavbarTheme = () => {
    return location.pathname.indexOf("admin/alternative-dashboard") === -1
      ? "dark"
      : "light";
  };

  return (
    <>
      <Sidebar
        routes={routes}
        toggleSidenav={toggleSidenav}
        sidenavOpen={sidenavOpen}
        logo={{
          innerLink: "/",
          imgSrc: require("assets/img/brand/Logo.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        {alert}
        {categoryDataLoaded ? (
          <>
            <AdminNavbar
              theme={getNavbarTheme()}
              toggleSidenav={toggleSidenav}
              sidenavOpen={sidenavOpen}
              brandText={getBrandText(location.pathname)}
            />
            <Switch>
              {getRoutes(routes, "/admin")}
              <Redirect from="*" to="/admin/dashboard" />
            </Switch>
            <AdminFooter />
          </>
        ) : (
          <>
            <div style={{ textAlign: "center" }}>
              <Spinner />
            </div>
          </>
        )}
      </div>
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
  );
};
