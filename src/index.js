import React, { StrictMode } from "react";

import { Provider } from "react-redux";

import ReactDOM from "react-dom";
// react library for routing
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { AdminLayout } from "layouts/AdminLayout";
import { AuthLayout } from "layouts/AuthLayout";
import { store } from "store";

import "variables/chartDefaults";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fullcalendar/common/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "quill/dist/quill.core.css";
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "select2/dist/css/select2.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/scss/argon-dashboard-react.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <Switch>
          <Route path="/admin" render={() => <AdminLayout />} />
          <Route path="/auth" render={() => <AuthLayout />} />
          <Route path="/" render={() => <AdminLayout />} />
          <Redirect from="*" to="/" />
        </Switch>
      </StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
