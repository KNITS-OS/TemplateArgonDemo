import { Route } from "react-router-dom";
import { IRoute, LayoutType, View } from "types/types";

export const getRoutes = (routes: IRoute[], layout: LayoutType) => {
  return routes.map((route, key) => {
    if (route.collapse && route.views) {
      return getRouteViews(route.views, layout);
    }

    if (route.layout === layout) {
      return (
        <Route
          path={route.layout + route.path}
          component={route.component as React.ComponentType}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};

const getRouteViews = (routes: View[], layout: LayoutType) => {
  return routes.map((route, key) => {
    if (route.layout === layout) {
      return (
        <Route
          path={route.layout + route.path}
          component={route.component as React.ComponentType}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};
