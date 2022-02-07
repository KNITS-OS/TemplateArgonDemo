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
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Switch, Redirect } from "react-router-dom";

import { Spinner } from "reactstrap";

import brandLogoImg from "assets/img/brand/Logo.png";

import { routes } from "routes";

import { listBusinessUnits } from "redux/business-unit";
import { listCharts } from "redux/charts";
import { listCountries } from "redux/countries";
import { listWorldOverview } from "redux/world-overview";

import { AdminAlert } from "components/alerts";
import { AdminFooter } from "components/footers";
import { AdminNavbar } from "components/navbars";
import { Sidebar } from "components/sidebar";

import { getRoutes } from "./utils";

export const AdminLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const countriesState = useSelector(state => state.country);
  const businessUnitsState = useSelector(state => state.businessUnit);
  const chartsState = useSelector(state => state.chart);
  const worldOverviewState = useSelector(state => state.worldOverview);

  const [sidenavOpen, setSidenavOpen] = useState(true);
  const mainContentRef = useRef(null);

  const [categoryDataLoaded, setCategoryDataLoaded] = useState(false);
  const [alert, setAlert] = useState(
    countriesState.isError ||
      businessUnitsState.isError ||
      chartsState.isError ||
      worldOverviewState.isError
  );

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, [location]);

  useEffect(() => {
    dispatch(listCountries());
    dispatch(listCharts());
    dispatch(listBusinessUnits());
    dispatch(listWorldOverview());
  }, [dispatch]);

  useEffect(() => {
    if (countriesState.entities && countriesState.entities.length > 0) {
      setCategoryDataLoaded(true);
    }
  }, [countriesState.entities]);

  useEffect(() => {
    if (countriesState.isError) {
      setAlert(
        <AdminAlert
          setAlert={setAlert}
          setCategoryDataLoaded={setCategoryDataLoaded}
          errorMessage={countriesState.errorMessage}
        />
      );
    }
  }, [countriesState.isError, countriesState.errorMessage]);

  useEffect(() => {
    if (businessUnitsState.entities && businessUnitsState.entities.length > 0) {
      setCategoryDataLoaded(true);
    }
  }, [businessUnitsState.entities]);

  useEffect(() => {
    if (businessUnitsState.isError) {
      setAlert(
        <AdminAlert
          setAlert={setAlert}
          setCategoryDataLoaded={setCategoryDataLoaded}
          errorMessage={businessUnitsState.errorMessage}
        />
      );
    }
  }, [businessUnitsState.isError, businessUnitsState.errorMessage]);

  useEffect(() => {
    if (chartsState.entities && chartsState.entities.length > 0) {
      setCategoryDataLoaded(true);
    }
  }, [chartsState.entities]);

  useEffect(() => {
    if (chartsState.isError) {
      setAlert(
        <AdminAlert
          setAlert={setAlert}
          setCategoryDataLoaded={setCategoryDataLoaded}
          errorMessage={chartsState.errorMessage}
        />
      );
    }
  }, [chartsState.isError, chartsState.errorMessage]);

  useEffect(() => {
    if (worldOverviewState.entities && worldOverviewState.entities.length > 0) {
      setCategoryDataLoaded(true);
    }
  }, [worldOverviewState.entities]);

  useEffect(() => {
    if (worldOverviewState.isError) {
      setAlert(
        <AdminAlert
          setAlert={setAlert}
          setCategoryDataLoaded={setCategoryDataLoaded}
          errorMessage={worldOverviewState.errorMessage}
        />
      );
    }
  }, [worldOverviewState.isError, worldOverviewState.errorMessage]);

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  // toggles collapse between mini sidenav and normal
  const toggleSidenav = () => {
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
    return location.pathname.indexOf("admin/alternative-dashboard") === -1 ? "dark" : "light";
  };

  return (
    <>
      <Sidebar
        routes={routes}
        toggleSidenav={toggleSidenav}
        sidenavOpen={sidenavOpen}
        logo={{
          innerLink: "/",
          imgSrc: brandLogoImg,
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
          <div style={{ textAlign: "center" }}>
            <Spinner />
          </div>
        )}
      </div>
      {sidenavOpen ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div className="backdrop d-xl-none" role="button" tabIndex={0} onClick={toggleSidenav} />
      ) : null}
    </>
  );
};
