import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router, Route } from "react-router-dom";
import * as history from "history";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
const store = createStore(rootReducer);
const userHistory = history.createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router history={userHistory}>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
