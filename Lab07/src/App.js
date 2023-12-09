// App.js

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TaskList from "./components/TaskList";

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", fontSize: "3rem", fontWeight: "bolder" }}>
          TODO LIST
        </h1>
        <hr />
        <TaskList />
      </div>
    );
  }
}

export default App;
