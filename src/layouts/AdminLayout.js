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

import { Spinner, UncontrolledAlert } from "reactstrap";

import SweetAlert from "react-bootstrap-sweetalert";
import { useLocation, Switch, Redirect } from "react-router-dom";

import { AdminFooter } from "components/footers";
import { AdminNavbar } from "components/navbars";
import { Sidebar } from "components/sidebar";

import brandLogoImg from "assets/img/brand/Logo.png";
import { routes } from "routes";

import { listBusinessUnits } from "redux/business-units";
import { listCharts } from "redux/charts";
import { listCountries } from "redux/countries";
import { listWorldMap } from "redux/world-map";

import { getRoutes } from "./utils";

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
      worldMapState.isError
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

  useEffect(() => {
    if (countriesState.entities && countriesState.entities.length > 0) {
      setCategoryDataLoaded(true);
    }
  }, [countriesState.entities]);

  const cleanAlert = () => {
    setCategoryDataLoaded(true); // remove spinner
    setAlert(
      <UncontrolledAlert color="danger" fade={false}>
        <span className="alert-inner--icon">
          <i className="ni ni-like-2" />
        </span>{" "}
        <span className="alert-inner--text">
          <strong>Attention!</strong> No data were loaded. Application will not work as expected
        </span>
      </UncontrolledAlert>
    );
  };

  useEffect(() => {
    if (countriesState.isError) {
      setAlert(
        <SweetAlert
          danger
          title="Error"
          onConfirm={() => cleanAlert(setCategoryDataLoaded, setAlert)}
        >
          {`${countriesState.errorMessage} please contact administrator`}
        </SweetAlert>
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
        <SweetAlert
          danger
          title="Error"
          onConfirm={() => cleanAlert(setCategoryDataLoaded, setAlert)}
        >
          {`${businessUnitsState.errorMessage} please contact administrator`}
        </SweetAlert>
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
        <SweetAlert
          danger
          title="Error"
          onConfirm={() => cleanAlert(setCategoryDataLoaded, setAlert)}
        >
          {`${chartsState.errorMessage} please contact administrator`}
        </SweetAlert>
      );
    }
  }, [chartsState.isError, chartsState.errorMessage]);

  useEffect(() => {
    if (worldMapState.entities && worldMapState.entities.length > 0) {
      setCategoryDataLoaded(true);
    }
  }, [worldMapState.entities]);

  useEffect(() => {
    if (worldMapState.isError) {
      setAlert(
        <SweetAlert
          danger
          title="Error"
          onConfirm={() => cleanAlert(setCategoryDataLoaded, setAlert)}
        >
          {`${worldMapState.errorMessage} please contact administrator`}
        </SweetAlert>
      );
    }
  }, [worldMapState.isError, worldMapState.errorMessage]);

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
