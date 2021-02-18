import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import "./assets/css/tailwind.css";
import App from "./App";
import { createReduxStore } from './redux';
// import AppTest5 from "./components/testing/Test5/AppTest5";

ReactDOM.render(
	<React.StrictMode>
    <Provider store={createReduxStore()}>
      <App />
    </Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
