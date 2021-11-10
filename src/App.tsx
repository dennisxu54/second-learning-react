import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import TaskDetailPage from "./pages/task-detail-page";
import TaskPage from "./pages/task-page";

function App() {
  return (
    <div>
      <Router>
      <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/task">
            <TaskPage />
          </Route>
          <Route path="/task-detail/:id">
            <TaskDetailPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
