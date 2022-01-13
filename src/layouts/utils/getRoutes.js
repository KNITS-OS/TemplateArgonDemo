import { Route } from "react-router-dom";

const getLayout = (route, layout, key) => {
  if (route.layout === layout) {
    return <Route path={route.layout + route.path} component={route.component} key={key} />;
  }
  return null;
};

const getRouteViews = (routes, layout) => routes.map((route, key) => getLayout(route, layout, key));

export const getRoutes = (routes, layout) =>
  routes.map((route, key) => {
    if (route.collapse && route.views && route.views.length > 0) {
      return getRouteViews(route.views, layout);
    }

    return getLayout(route, layout, key);
  });
