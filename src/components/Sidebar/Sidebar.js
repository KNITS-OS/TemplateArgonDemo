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
// nodejs library that concatenates classes
// nodejs library to set properties for components
import { PropTypes } from "prop-types";
import React from "react";
// react library that creates nice scrollbar on windows devices
import PerfectScrollbar from "react-perfect-scrollbar";
// react library for routing
import {
  Link,
  NavLink as NavLinkRRD,
  useLocation,
} from "react-router-dom";
// reactstrap components
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from "reactstrap";

function Sidebar({ toggleSidenav, sidenavOpen, routes, logo, rtlActive }) {
  const location = useLocation();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = routeName => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // makes the sidenav normal on hover (actually when mouse enters on it)
  const onMouseEnterSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  };
  // makes the sidenav mini on hover (actually when mouse leaves from it)
  const onMouseLeaveSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  };

  // this is used on mobile devices, when a user navigates
  // the sidebar will autoclose
  const closeSidenav = () => {
    if (window.innerWidth < 1200) {
      toggleSidenav();
    }
  };
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = routes => {
    return routes.map((prop, key) => {
      if (prop.redirect || prop.global) {
        return null;
      }
      return (
        <>
          <NavItem
            id={prop.tooltip}
            className={activeRoute(prop.layout + prop.path)}
            key={key}
          >
            <NavLink
              to={prop.layout + prop.path}
              activeClassName=""
              onClick={closeSidenav}
              tag={NavLinkRRD}
            >
              {prop.icon !== undefined ? (
                <>
                  <i className={prop.icon} />
                  <span className="nav-link-text">{prop.name}</span>
                </>
              ) : prop.miniName !== undefined ? (
                <>
                  <span className="sidenav-mini-icon">
                    {prop.miniName}
                  </span>
                  <span className="sidenav-normal">{prop.name}</span>
                </>
              ) : (
                prop.name
              )}
            </NavLink>
          </NavItem>
        </>
      );
    });
  };

  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }
  const scrollBarInner = (
    <div className="scrollbar-inner">
      <div className="sidenav-header d-flex align-items-center">
        {logo ? (
          <NavbarBrand {...navbarBrandProps}>
            <img
              alt={logo.imgAlt}
              className="navbar-brand-img"
              src={logo.imgSrc}
            />
          </NavbarBrand>
        ) : null}
      </div>
      <div className="navbar-inner">
        <Collapse navbar isOpen={true}>
          <Nav navbar>{createLinks(routes)}</Nav>

          <hr className="my-3" />
          <h6 className="navbar-heading p-0 text-muted">
            <span className="docs-normal">S</span>
            <span className="docs-mini">D</span>
          </h6>
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="#supportPage" target="_blank">
                <i className="ni ni-spaceship" />
                {/* <span className="nav-link-text">Contact Support Team</span> */}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/colors?ref=adpr-sidebar"
                target="_blank"
              >
                <i className="ni ni-palette" />
                {/* <span className="nav-link-text">Documentation</span> */}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </div>
  );
  return (
    <Navbar
      className={
        "sidenav navbar-vertical navbar-expand-xs navbar-light bg-white " +
        (rtlActive ? "" : "fixed-left")
      }
      onMouseEnter={onMouseEnterSidenav}
      onMouseLeave={onMouseLeaveSidenav}
    >
      {navigator.platform.indexOf("Win") > -1 ? (
        <PerfectScrollbar>{scrollBarInner}</PerfectScrollbar>
      ) : (
        scrollBarInner
      )}
    </Navbar>
  );
}

Sidebar.defaultProps = {
  routes: [{}],
  toggleSidenav: () => {},
  sidenavOpen: false,
  rtlActive: false,
};

Sidebar.propTypes = {
  // function used to make sidenav mini or normal
  toggleSidenav: PropTypes.func,
  // prop to know if the sidenav is mini or normal
  sidenavOpen: PropTypes.bool,
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  // logo
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
  // rtl active, this will make the sidebar to stay on the right side
  rtlActive: PropTypes.bool,
};

export default Sidebar;
