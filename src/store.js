import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "redux/reducers/rootReducer";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware, logger)),
);

export default store;
