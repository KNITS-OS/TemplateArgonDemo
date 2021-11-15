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
import classnames from "classnames";
import { useEffect, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "redux/app/hooks";
import { IRoute, View } from "types/types";
import { toggleSidenav } from "redux/features/sidenav/sidenavSlice";

// @todo fix all @ts-ignore

interface Props {
  /**
   * links that will be displayed inside the component
   */
  routes: IRoute[];
  logo: {
    /**
     * innerLink is for links that will direct the user within the app
     * it will be rendered as <Link to="...">...</Link> tag
     */
    innerLink?: string;

    /**
     * outerLink is for links that will direct the user outside the app
     * it will be rendered as simple <a href="...">...</a> tag
     */
    outerLink?: string;
    /**
     * the image src of the logo
     */
    imgSrc: string;
    /**
     * the alt for the img
     */
    imgAlt: string;
  };
  /**
   * @default false
   * rtl active, this will make the sidebar to stay on the right side
   */
  rtlActive: boolean;
}

const Sidebar = ({ routes, logo, rtlActive = false }: Props) => {
  const [state, setState] = useState({});
  const location = useLocation();

  const dispatch = useAppDispatch();
  const { isSidenavOpen } = useAppSelector(state => state.sidenav);
  useEffect(() => {
    setState(getCollapseStates(routes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * verifies if routeName is the one active (in browser input)
   */
  const activeRoute = (routeName: string) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  /**
   * makes the sidenav normal on hover (actually when mouse enters on it)
   */
  const onMouseEnterSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  };
  /**
   * makes the sidenav mini on hover (actually when mouse leaves from it)
   */
  const onMouseLeaveSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  };
  /**
   * this creates the intial state of this component
   * based on the collapse routesthat it gets through routes
   */
  const getCollapseStates = (routes: IRoute[]) => {
    let initialState = {};
    routes.map(route => {
      if (route.collapse && route.state && route.views) {
        initialState = {
          [route.state]: getViewCollapseInitialState(route.views),
          // ...getViewCollapseStates(route.views),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  };

  /**
   * this verifies if any of the collapses should be default opened on a rerender of this component
   * for example, on the refresh of the page,
   * while on the src/views/forms/RegularForms.js - route /admin/regular-forms
   */
  // const getCollapseInitialState = (routes: IRoute[]) => {
  //   for (let i = 0; i < routes.length; i++) {
  //     let routePath = routes[i].path;
  //     let routeViews = routes[i].views;
  //     if (routeViews) {
  //       if (
  //         routes[i].collapse &&
  //         getViewCollapseInitialState(routeViews)
  //       ) {
  //         return true;
  //       }
  //     }
  //     if (routePath) {
  //       if (location.pathname.indexOf(routePath) !== -1) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // };

  const getViewCollapseInitialState = (routes: View[]) => {
    for (let i = 0; i < routes.length; i++) {
      let routePath = routes[i].path;
      if (routePath) {
        if (location.pathname.indexOf(routePath) !== -1) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * this is used on mobile devices, when a user navigates
   * the sidebar will autoclose
   */
  const closeSidenav = () => {
    if (window.innerWidth < 1200) {
      dispatch(toggleSidenav());
    }
  };

  /**
   * this function creates the links and collapses that appear in the sidebar (left menu)
   */
  const createLinks = (routes: IRoute[]) => {
    return routes.map((route, key) => {
      if (route.global) {
        return null;
      }
      if (route.collapse && route.state && route.views) {
        var st = {};
        st[route["state"]] = !state[route.state];
        return (
          <NavItem key={key}>
            <NavLink
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={state[route.state]}
              className={classnames({
                active: getViewCollapseInitialState(route.views),
              })}
              onClick={e => {
                e.preventDefault();
                setState(st);
              }}
            >
              {route.icon ? (
                <>
                  <i className={route.icon} />
                  <span className="nav-link-text">{route.name}</span>
                </>
              ) : // @ts-ignore
              route.miniName ? (
                <>
                  <span className="sidenav-mini-icon">
                    {/* @ts-ignore */}
                    {route.miniName}
                  </span>
                  <span className="sidenav-normal"> {route.name} </span>
                </>
              ) : null}
            </NavLink>
            <Collapse isOpen={state[route.state]}>
              <Nav className="nav-sm flex-column">
                {/* @ts-ignore */}
                {createLinks(route.views)}
              </Nav>
            </Collapse>
          </NavItem>
        );
      }
      return (
        <NavItem
          // @ts-ignore
          className={activeRoute(route.layout + route.path)}
          key={key}
        >
          <NavLink
            // @ts-ignore
            to={route.layout + route.path}
            activeClassName=""
            onClick={closeSidenav}
            tag={NavLinkRRD}
          >
            {route.icon !== undefined ? (
              <>
                <i className={route.icon} />
                <span className="nav-link-text">{route.name}</span>
              </>
            ) : // @ts-ignore
            route.miniName !== undefined ? (
              <>
                {/* @ts-ignore */}
                <span className="sidenav-mini-icon">{route.miniName}</span>
                <span className="sidenav-normal"> {route.name} </span>
              </>
            ) : (
              route.name
            )}
          </NavLink>
        </NavItem>
      );
    });
  };

  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outerLink) {
    navbarBrandProps = {
      href: logo.outerLink,
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
        <div className="ml-auto">
          <div
            className={classnames("sidenav-toggler d-none d-xl-block", {
              active: isSidenavOpen,
            })}
            onClick={() => dispatch(toggleSidenav())}
          >
            <div className="sidenav-toggler-inner">
              <i className="sidenav-toggler-line" />
              <i className="sidenav-toggler-line" />
              <i className="sidenav-toggler-line" />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-inner">
        <Collapse navbar isOpen={true}>
          <Nav navbar>{createLinks(routes)}</Nav>

          <hr className="my-3" />
          <h6 className="navbar-heading p-0 text-muted">
            <span className="docs-normal">Support</span>
            <span className="docs-mini">D</span>
          </h6>
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="#supportPage" target="_blank">
                <i className="ni ni-spaceship" />
                <span className="nav-link-text">Contact Support Team</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/colors?ref=adpr-sidebar"
                target="_blank"
              >
                <i className="ni ni-palette" />
                <span className="nav-link-text">Documentation</span>
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
};

export default Sidebar;
