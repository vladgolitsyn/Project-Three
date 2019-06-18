const express = require("express");
const routes = require("./routes");
const app = express();
const passport = require("passport");
const flash = require("connect-flash");
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

const session = require("express-session");
const PORT = process.env.PORT || 3001;
let db = require("./models");
require("./config/passport")(passport);
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(passport.initialize());
app.use(
  session({
    secret: "cool"
  })
);

app.use(
  cors({
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200,
    credentials: true
  })
)

io.on('connection', (socket) => {
  socket.on('client-message', (message) => {
    console.log(message);
    socket.emit('server-message', message);
  });
  socket.on('new-message', (message) => {
    io.emit('new-message');
  })
});

app.use(passport.session());

app.use((req, res, next) => {
  if (req.isAuthenticated) {
    res.locals.isAuthenticated = req.isAuthenticated();
  }
  next();
});

app.use(flash());
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

app.use(routes);
db.sequelize.sync().then(function() {
  console.log("started!!!");

http.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
  });
});
