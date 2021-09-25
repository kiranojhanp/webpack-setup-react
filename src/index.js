require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const domContainer = document.getElementById("root");
if (module.hot) {
	module.hot.accept();
}

ReactDOM.render(<App />, domContainer);
