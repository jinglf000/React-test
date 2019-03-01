import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Hello(props) {
  return <div> 这是一个对props中更新obj的测试 </div>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
