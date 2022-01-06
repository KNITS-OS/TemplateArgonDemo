import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// react library for routing
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// plugins styles from node_modules
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fullcalendar/common/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "quill/dist/quill.core.css";
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "select2/dist/css/select2.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
// plugins styles downloaded
import "./assets/vendor/nucleo/css/nucleo.css";
// core styles
import "./assets/scss/argon-dashboard-react.scss?v1.2.0";

import "./variables/chartDefaults";

import { AdminLayout } from "layouts/AdminLayout";
import { AuthLayout } from "layouts/AuthLayout";

import { store } from "store";

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
  document.getElementById("root"),
);
