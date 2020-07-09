import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./assets/scss/style.scss";
import * as serviceWorker from "./serviceWorker";
import {PersistGate} from 'redux-persist/integration/react';
import {store,persistor} from './redux/store';




//addCollectionAndDocuments("products-main",productsData)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
