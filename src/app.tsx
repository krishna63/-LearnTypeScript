import React from "react";
import ReactDOM from "react-dom/client";
import TypeScriptApp from "./components/TypescriptApp";
import appStore from "./reducers";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root")!);

console.log(appStore.getState())
root.render(
  <Provider store={appStore}>
    <TypeScriptApp />
  </Provider>
);
