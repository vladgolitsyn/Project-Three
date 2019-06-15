import React from "react";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
