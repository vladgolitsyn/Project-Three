import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
// import Landing from "./pages/layout/Homepage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import Events from "./pages/Events/Events";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails/EventDetails";
import Chat from "./pages/chat/Chat";
import io from "socket.io-client";
// import "./app.css";

const socket = io("http://localhost:3001", {
  transports: ["websocket"]
});

// const socket = io('http://localhost:3001', { secure: true, reconnect: true })

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            {/* <Route exact path="/" component={Landing} /> */}

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/eventdetails" component={EventDetails} />
            <Route exact path="/chat" component={Chat} />

            <Switch>
              <Route exact path="/profile" component={Dashboard} />
              {/* <PrivateRoute exact path="/profile" component={Dashboard} /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
