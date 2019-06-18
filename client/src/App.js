import React from "react";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
