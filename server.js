const express = require("express");

const bodyParser = require("body-parser");
// const routes = require("./routes");
const app = express();
const passport = require("passport");
// const flash = require("connect-flash");
// const session = require("express-session");
const PORT = process.env.PORT || 3001;
let db = require("./models");

const users = require("./routes/api/users");
const chat = require("./routes/api/chat");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/users", chat);

db.sequelize.sync().then(function() {
  console.log("started!!!");

  app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });
});
