import React from "react";
import Register from "./pages/Register";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Register} />;
          <Route exact path="/Events" component={Events} />;
          <Route exact path="/EventDetails" component={EventDetails} />;
        </Switch>
      </div>
    </Router>
  );
}

export default App;
