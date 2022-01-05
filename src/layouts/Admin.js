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
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

import { UncontrolledAlert, Spinner } from "reactstrap";

import SweetAlert from "react-bootstrap-sweetalert";

import routes from "routes";
import AdminNavbar from "components/Navbars/AdminNavbar";
import AdminFooter from "components/Footers/AdminFooter";
import Sidebar from "components/Sidebar/Sidebar";

import { listCountries } from "redux/countries/country.actions";

function Admin() {
  const dispatch = useDispatch();
  const location = useLocation();
  const countriesState = useSelector(state => state.country);

  const [sidenavOpen, setSidenavOpen] = React.useState(true);
  const mainContentRef = React.useRef(null);

  const [categoryDataLoaded, setCategoryDataLoaded] = useState(false);
  const [alert, setAlert] = useState(countriesState.isError);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, [location]);

  useEffect(() => {
    dispatch(listCountries());
  }, [dispatch]);

  useEffect(() => {
    if (countriesState.entities && countriesState.entities.length > 0) {
      setCategoryDataLoaded(true);
    }
  }, [countriesState.entities]);

  useEffect(() => {
    if (countriesState.isError) {
      setAlert(
        <SweetAlert danger title="Error" onConfirm={() => cleanAlert()}>
          {`${countriesState.errorMessage} please contact administrator`}
        </SweetAlert>,
      );
    }
  }, [countriesState.isError, countriesState.errorMessage]);

  const cleanAlert = () => {
    setCategoryDataLoaded(true); // remove spinner
    setAlert(
      <UncontrolledAlert color="danger" fade={false}>
        <span className="alert-inner--icon">
          <i className="ni ni-like-2" />
        </span>{" "}
        <span className="alert-inner--text">
          <strong>Attention!</strong> No data were loaded. Application will
          not work as expected
        </span>
      </UncontrolledAlert>,
    );
  };

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

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
              {getRoutes(routes)}
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
}

export default Admin;
