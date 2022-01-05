import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fullcalendar/common/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "quill/dist/quill.core.css";
import "./variables/chartDefaults";
import React from "react";
import ReactDOM from "react-dom";
// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Provider } from "react-redux";
// react library for routing
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "select2/dist/css/select2.min.css";
import store from "store";
import "sweetalert2/dist/sweetalert2.min.css";
// core styles
import "./assets/scss/argon-dashboard-react.scss?v1.2.0";
// plugins styles downloaded
import "./assets/vendor/nucleo/css/nucleo.css";
import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={() => <AdminLayout />} />
        <Route path="/auth" render={() => <AuthLayout />} />
        <Route path="/" render={() => <AdminLayout />} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
